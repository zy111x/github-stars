import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { McpAgent } from 'agents/mcp'
import { z } from 'zod'

export class GitHubStarsMCP extends McpAgent {
  server = new McpServer({ name: 'GitHub Stars', version: '0.0.2' })

  async init() {
    this.server.tool(
      'search_github_stars',
      'Search GitHub Starred Repositories',
      { query: z.string() },
      async ({ query }) => {
        const answer = await this.env.AI.autorag(this.env.AUTO_RAG_NAME).search({
          query,
        })

        return {
          content: [{ type: 'text', text: JSON.stringify(answer.data) }],
        }
      },
    )
  }
}

export default {
  fetch: (req, env, ctx) => {
    const authHeader = req.headers.get('Authorization')
    const apiKey = authHeader?.replace('Bearer ', '')

    if (env.MCP_API_KEY && apiKey !== env.MCP_API_KEY) {
      return new Response('Unauthorized', { status: 401 })
    }
    return GitHubStarsMCP.serve('/').fetch(req, env, ctx)
  },
}
