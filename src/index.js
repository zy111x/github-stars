import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { McpAgent } from 'agents/mcp'
import { z } from 'zod'

export class GitHubStarsMCP extends McpAgent {
  server = new McpServer({ name: 'GitHub Stars', version: '0.0.1' })

  async init() {
    this.server.tool(
      'search_github_stars',
      { query: z.string() },
      async ({ query }) => {
        const answer = await this.env.AI.AutoRAG(this.env.AUTO_RAG_NAME).aiSearch({
          query,
        })

        return {
          content: [{ type: 'text', text: answer }],
        }
      },
    )
  }
}

export default {
  fetch: (req, env, ctx) => {
    const request = new URL(req.url)
    const API_KEY = request.searchParams.get('api-key')
    if (env.MCP_API_KEY && API_KEY !== env.MCP_API_KEY) {
      return new Response('Unauthorized', { status: 401 })
    }
    return GitHubStarsMCP.mount('/').fetch(req, env, ctx)
  },
}
