---
project: Scrapling
stars: 88294
description: 🕷️ A Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev
url: https://github.com/D4Vinci/Scrapling
---

  
Effortless Web Scraping for the Modern Web
=============================================

  
  
  
  

**Selection methods** · **Fetchers** · **Spiders** · **Proxy Rotation** · **CLI** · **MCP**

Scrapling is a Python Web Scraping framework that brings fast HTTP requests, stealth browsers, powerful parsing, and concurrent crawling into one library.

Scrape static pages, render JavaScript, interact with websites, and extract data from the API calls behind them. Build crawlers with reusable sessions, proxy rotation, automatic retries, pause/resume, and built-in data exports.

Use it from Python, the terminal, or your AI agent through its MCP server and Agent Skill. From extracting a few fields to collecting a whole website as clean Markdown, Scrapling covers the full scraping workflow.

What you can do with Scrapling
------------------------------

-   **Fetch & interact**: Fast HTTP requests, stealth browsers, JavaScript rendering, Cloudflare Turnstile/Interstitial handling, persistent sessions, and background API capture.
-   **Parse & extract**: CSS, XPath, text and regex search, adaptive element tracking, similar-element matching, and clean Markdown output.
-   **Crawl & export**: Concurrent spiders, proxy rotation, retries, AutoThrottle, pause/resume, streaming, ready-made templates, and JSON/JSONL/CSV/XML exports.
-   **Scrape with AI or from your terminal**: An MCP server for AI agents to browse and extract data, an Agent Skill, CLI commands, and an interactive shell.

Start with a single page:

from scrapling.fetchers import Fetcher

page \= Fetcher.get('https://quotes.toscrape.com/')
quotes \= page.css('.quote .text::text').getall()
print(quotes)

Or scale up with a spider:

from scrapling.spiders import Spider, Response

class QuotesSpider(Spider):
    name \= "quotes"
    start\_urls \= \["https://quotes.toscrape.com/"\]

    async def parse(self, response: Response):
        for quote in response.css('.quote'):
            yield {
                "text": quote.css('.text::text').get(),
                "author": quote.css('.author::text').get(),
            }

result \= QuotesSpider().start()
print(len(result.items))
result.items.to\_json("quotes.json")

This prints `10` and saves the quotes and authors to `quotes.json`.

Platinum Sponsors
=================

NodeMaven - The most efficient proxy provider for Web Scraping and Automation with the Highest Quality IP on the market. Use code SCRAPLING35 for 35% discount.

Scrapling handles Cloudflare Turnstile. For enterprise-grade protection, **Hyper Solutions** provides API endpoints that generate valid antibot tokens for **Akamai**, **DataDome**, **Kasada**, and **Incapsula**. Simple API calls, no browser automation required.

**Evomi** : residential proxies from $0.49/GB. Scraping browser with fully spoofed Chromium, residential IPs, auto CAPTCHA solving, and anti-bot bypass.  
**Scraper API for hassle-free results. MCP and N8N integrations are available.**

TikHub.io provides 900+ stable APIs across 16+ platforms including TikTok, X, YouTube & Instagram, with 40M+ datasets.  
Also offers DISCOUNTED AI models - Claude, GPT, GEMINI & more up to 71% off.

Read a full review of Scrapling on The Web Scraping Club (Nov 2025), the #1 newsletter dedicated to Web Scraping.

Swiftproxy provides scalable residential proxies with 80M+ IPs across 195+ countries, delivering fast, reliable connections, automatic rotation, and strong anti-block performance. Free trial available.

Byteful supplies ethical residential, mobile, ISP, and datacenter proxies, plus scraping and AI automation tools. Use code SCRAPLING10: 10% off residential proxies.

ProxyLane: Reduce blocks and CAPTCHAs by 90%. 28M Premium Residential IPs for Heavy Web Scraping. 195 countries. City/ISP/ZIP targeting. Sticky/rotating sessions. Non-expiring traffic from $2/GB. Code **SCRAPEANDTAKE**: _25% off_.

LundProxy: Stop paying per GB. Unlimited residential traffic, 100M+ IPs, 190+ countries. Pay by bandwidth. Request a free 50 Mbps residential proxies trial.

$1/GB at DataImpulse. Ethical first-party proxies. 90M+ IPs, 195+ countries. Residential, datacenter, mobile. Pay-as-you-go = no subscription. Traffic never expires.

_Do you want to show your ad here? Click here_

Sponsors
========

  

_Do you want to show your ad here? Click here and choose the tier that suits you!_

* * *

Key Features
------------

### Spiders - A Full Crawling Framework

-   🕷️ **Scrapy-like Spider API**: Define spiders with `start_urls`, async `parse` callbacks, and `Request`/`Response` objects.
-   ⚡ **Concurrent Crawling**: Configurable concurrency limits, per-domain throttling, and download delays.
-   🔄 **Multi-Session Support**: Unified interface for HTTP requests, and stealthy headless browsers in a single spider - route requests to different sessions by ID.
-   💾 **Pause & Resume**: Save pending requests and seen URLs with `crawldir`. Press Ctrl+C to stop gracefully and restart with the same directory.
-   📡 **Streaming Mode**: Stream scraped items as they arrive via `async for item in spider.stream()` with real-time stats - ideal for UI, pipelines, and long-running crawls.
-   🛡️ **Blocked Request Detection**: Automatic detection and retry of blocked requests with customizable logic.
-   🚦 **AutoThrottle**: Stop guessing delays. The spider tunes the delay of each domain on its own from how fast the website responds, then doubles it (or waits what `Retry-After` asks) whenever the website starts blocking or rate-limiting you, and speeds back up once it stops.
-   🤖 **Robots.txt Compliance**: Optional `robots_txt_obey` flag that respects `Disallow`, `Crawl-delay`, and `Request-rate` directives with per-domain caching.
-   🧪 **Development Mode**: Cache responses to disk on the first run and replay them on subsequent runs - iterate on your `parse()` logic without re-hitting the target servers.
-   🧩 **Ready-made Spider Templates**: Skip the boilerplate with `CrawlSpider` for rule-based link following, `SitemapSpider` for sitemap/robots.txt-driven crawls, `XMLFeedSpider`/`CSVFeedSpider` for iterating XML/RSS and CSV feeds, and `ShopifySpider` to collect products from public Shopify stores, one item per variant.
-   🔗 **Link Extraction**: A standalone `LinkExtractor` primitive with allow/deny patterns, domain filters, CSS/XPath scoping, extension filtering, and canonicalization - use it inside the templates or on its own.
-   📦 **Built-in Export**: Export results through hooks and your own pipeline or the built-in JSON/JSONL/CSV/XML exporters with `result.items.to_json()`, `to_jsonl()`, `to_csv()`, and `to_xml()`.

### Advanced Websites Fetching with Session Support

-   **HTTP Requests**: Fast and stealthy HTTP requests with the `Fetcher` class. Can impersonate browsers' TLS fingerprint, headers, and use HTTP/3.
-   **Dynamic Loading**: Fetch dynamic websites with full browser automation through the `StealthyFetcher` class supporting Playwright's Chromium and Google's Chrome.
-   **Anti-bot Bypass**: Advanced stealth capabilities with `StealthyFetcher` and fingerprint spoofing. Can easily bypass all types of Cloudflare's Turnstile/Interstitial with automation.
-   **Session Management**: Persistent session support with `FetcherSession` and `StealthySession` classes for cookie and state management across requests.
-   **Proxy Rotation**: Built-in `ProxyRotator` with cyclic or custom rotation strategies across all session types, plus per-request proxy overrides.
-   **Domain & Ad Blocking**: Block requests to specific domains (and their subdomains) or enable built-in ad blocking (~3,500 known ad/tracker domains) in browser-based fetchers.
-   **DNS Leak Prevention**: Optional DNS-over-HTTPS support to route DNS queries through Cloudflare's DoH, preventing DNS leaks when using proxies.
-   **Remote Browsers**: Instead of launching a browser locally, connect to one that's already running through CDP with `cdp_url`, whether it's on the same machine, another host, or a managed browser provider. You can also point any browser fetcher at your own Chromium build with `executable_path`.
-   **Background API Capture**: Enable `record_requests=True` on a browser session, then search its saved responses with `session.network.search(limit=None)`. Read API data and HTTP errors across page loads without sending requests again. History is bounded and saves text response bodies.
-   **Async Support**: Complete async support across all fetchers and dedicated async session classes.

### Parsing and Data Extraction

-   🔄 **Smart Element Tracking**: Relocate elements after website changes using intelligent similarity algorithms.
-   🎯 **Smart Flexible Selection**: CSS selectors, XPath selectors, filter-based search, text search, regex search, and more.
-   🔍 **Find Similar Elements**: Automatically locate elements similar to found elements.

### AI Features

-   🤖 **MCP Server**: Let AI chatbots and agents (Claude/Cursor/etc) scrape through Scrapling with HTTP requests, browser actions, screenshots, saved login state, and background API responses. Uses our stealthy browser with the right tools to enable suitable AI models to bypass any CAPTCHA is faces while working (not to mention our Cloudflare solver). It uses a lot of methods to reduce the content sent to the model, block ads, and protect it against Prompt-Injection. Remote browsers over CDP and HTTP transport with authentication options are included. (demo video)
-   🧠 **Agent Skill**: A ready-to-install Agent Skill that teaches coding agents the whole library, so the code they write with Scrapling matches the current API instead of guessing.
-   📚 **RAG-ready Markdown**: Turn any page into clean, sanitized, LLM-ready Markdown with one line (`page.markdown()`), or crawl a whole website into a Markdown corpus with the `ContentSpider` template, all without an LLM in the loop. (docs)

### High-Performance & battle-tested Architecture

-   🚀 **Lightning Fast**: Optimized performance outperforming most Python scraping libraries.
-   🔋 **Memory Efficient**: Optimized data structures and lazy loading for a minimal memory footprint.
-   ⚡ **Fast JSON Serialization**: 10x faster than the standard library.
-   🏗️ **Battle tested**: Not only does Scrapling have 92% test coverage and full type hints coverage, but it has been used daily by hundreds of Web Scrapers over the past year.

### Developer/Web Scraper Friendly Experience

-   🎯 **Interactive Web Scraping Shell**: Optional built-in IPython shell with Scrapling integration, shortcuts, and new tools to speed up Web Scraping scripts development, like converting curl requests to Scrapling requests and viewing requests results in your browser.
-   🚀 **Use it directly from the Terminal**: Optionally, you can use Scrapling to scrape a URL without writing a single line of code!
-   🛠️ **Rich Navigation API**: Advanced DOM traversal with parent, sibling, and child navigation methods.
-   🧬 **Enhanced Text Processing**: Built-in regex, cleaning methods, and optimized string operations.
-   📝 **Auto Selector Generation**: Generate robust CSS/XPath selectors for any element.
-   🔌 **Familiar API**: Similar to Scrapy/BeautifulSoup with the same pseudo-elements used in Scrapy/Parsel.
-   🤝 **Drop-in Scrapy Integration**: Already invested in Scrapy? Decorate any callback with `scrapling_response` to parse the responses you already fetch with Scrapling's parser, no rewrite needed.
-   📘 **Complete Type Coverage**: Full type hints for excellent IDE support and code completion. The entire codebase is automatically scanned with **PyRight** and **MyPy** with each change.
-   🔋 **Ready Docker image**: With each release, a Docker image containing all browsers is automatically built and pushed.

Getting Started
---------------

Let's give you a quick glimpse of what Scrapling can do without deep diving.

### Basic Usage

HTTP requests with session support

from scrapling.fetchers import Fetcher, FetcherSession

with FetcherSession(impersonate\='chrome') as session:  \# Use latest version of Chrome's TLS fingerprint
    page \= session.get('https://quotes.toscrape.com/', stealthy\_headers\=True)
    quotes \= page.css('.quote .text::text').getall()

\# Or use one-off requests
page \= Fetcher.get('https://quotes.toscrape.com/')
quotes \= page.css('.quote .text::text').getall()

Advanced stealth mode

from scrapling.fetchers import StealthyFetcher, StealthySession

with StealthySession(headless\=True, solve\_cloudflare\=True) as session:  \# Keep the browser open until you finish
    page \= session.fetch('https://nopecha.com/demo/cloudflare', google\_search\=False)
    data \= page.css('#padded\_content a').getall()

\# Or use one-off request style, it opens the browser for this request, then closes it after finishing
page \= StealthyFetcher.fetch('https://nopecha.com/demo/cloudflare', solve\_cloudflare\=True)
data \= page.css('#padded\_content a').getall()

Full browser automation

from scrapling.fetchers import StealthyFetcher, StealthySession

with StealthySession(headless\=True, disable\_resources\=False, network\_idle\=True) as session:  \# Keep the browser open until you finish
    page \= session.fetch('https://quotes.toscrape.com/', load\_dom\=False)
    data \= page.xpath('//span\[@class="text"\]/text()').getall()  \# XPath selector if you prefer it

\# Or use one-off request style, it opens the browser for this request, then closes it after finishing
page \= StealthyFetcher.fetch('https://quotes.toscrape.com/')
data \= page.css('.quote .text::text').getall()

### Spiders

Build full crawlers with concurrent requests, multiple session types, and pause/resume:

from scrapling.spiders import Spider, Response

class QuotesSpider(Spider):
    name \= "quotes"
    start\_urls \= \["https://quotes.toscrape.com/"\]
    concurrent\_requests \= 10
    
    async def parse(self, response: Response):
        for quote in response.css('.quote'):
            yield {
                "text": quote.css('.text::text').get(),
                "author": quote.css('.author::text').get(),
            }
            
        next\_page \= response.css('.next a')
        if next\_page:
            yield response.follow(next\_page\[0\].attrib\['href'\])

result \= QuotesSpider().start()
print(f"Scraped {len(result.items)} quotes")
result.items.to\_json("quotes.json")

Use multiple session types in a single spider:

from scrapling.spiders import Spider, Request, Response
from scrapling.fetchers import FetcherSession, AsyncStealthySession

class MultiSessionSpider(Spider):
    name \= "multi"
    start\_urls \= \["https://example.com/"\]
    
    def configure\_sessions(self, manager):
        manager.add("fast", FetcherSession(impersonate\="chrome"))
        manager.add("stealth", AsyncStealthySession(headless\=True), lazy\=True)
    
    async def parse(self, response: Response):
        for link in response.css('a::attr(href)').getall():
            \# Route protected pages through the stealth session
            if "protected" in link:
                yield Request(link, sid\="stealth")
            else:
                yield Request(link, sid\="fast", callback\=self.parse)  \# explicit callback

Pause and resume long crawls with checkpoints by running the spider like this:

QuotesSpider(crawldir\="./crawl\_data").start()

With `crawldir` set, press Ctrl+C to save pending requests and seen URLs. Restart with the same `crawldir` to resume. Save scraped items separately.

Or skip writing the crawling logic altogether with the ready-made templates, like pulling an entire Shopify store's catalog:

from scrapling.spiders import ShopifySpider

class MyStore(ShopifySpider):
    target\_website \= "example.com"

result \= MyStore().start()  \# Every product in the store, one item per variant

The template reads products exposed through public collection endpoints, one item per variant.

### Advanced Parsing & Navigation

from scrapling.fetchers import Fetcher

\# Rich element selection and navigation
page \= Fetcher.get('https://quotes.toscrape.com/')

\# Get quotes with multiple selection methods
quotes \= page.css('.quote')  \# CSS selector
quotes \= page.xpath('//div\[@class="quote"\]')  \# XPath
quotes \= page.find\_all('div', {'class': 'quote'})  \# BeautifulSoup-style
\# Same as
quotes \= page.find\_all('div', class\_\='quote')
quotes \= page.find\_all(\['div'\], class\_\='quote')
quotes \= page.find\_all(class\_\='quote')  \# and so on...
\# Find element by text content
quotes \= page.find\_by\_text('Albert Einstein', first\_match\=False)

\# Advanced navigation
quote\_text \= page.css('.quote')\[0\].css('.text::text').get()
quote\_texts \= page.css('.quote').css('.text::text').getall()  \# Chained selectors
first\_quote \= page.css('.quote')\[0\]
author \= first\_quote.css('.author::text').get()
next\_quote \= first\_quote.next
parent\_container \= first\_quote.parent

\# Element relationships and similarity
similar\_elements \= first\_quote.find\_similar()
below\_elements \= first\_quote.below\_elements

You can use the parser right away if you don't want to fetch websites like below:

from scrapling.parser import Selector

page \= Selector("<html>...</html>")

And it works precisely the same way!

### Async Session Management Examples

import asyncio
from scrapling.fetchers import FetcherSession, AsyncStealthySession

async def main():
    async with FetcherSession(http3\=True) as http\_session:  \# \`FetcherSession\` is context-aware and can work in both sync/async patterns
        page1 \= await http\_session.get('https://quotes.toscrape.com/')
        page2 \= await http\_session.get('https://quotes.toscrape.com/page/2/', impersonate\='chrome')
        print(len(page1.css('.quote')), len(page2.css('.quote')))

    async with AsyncStealthySession(max\_pages\=2) as browser\_session:
        urls \= \['https://quotes.toscrape.com/js/', 'https://quotes.toscrape.com/js/page/2/'\]
        pages \= await asyncio.gather(\*(browser\_session.fetch(url, wait\_selector\='.quote') for url in urls))
        print(\[len(page.css('.quote')) for page in pages\])

asyncio.run(main())

CLI & Interactive Shell
-----------------------

Scrapling includes a powerful command-line interface:

Launch the interactive Web Scraping shell

pip install "scrapling\[shell\]"
scrapling shell

Extract pages to a file directly without programming. Use `--css-selector` to pick the content, or `--ai-targeted` to select and sanitize the `body` content. Use `.txt` for text, `.md` for Markdown, or `.html` for HTML.

scrapling extract get 'https://quotes.toscrape.com/' quotes.md
scrapling extract get 'https://quotes.toscrape.com/' quotes.txt --css-selector '.quote' --impersonate 'chrome'
scrapling extract fetch 'https://quotes.toscrape.com/js/' quotes.md --css-selector '.quote' --wait-selector '.quote' --no-headless
scrapling extract fetch 'https://nopecha.com/demo/cloudflare' captchas.html --css-selector '#padded\_content a' --solve-cloudflare

Note

There are many additional features, but we want to keep this page concise, including the MCP server and the interactive Web Scraping Shell. Check out the full documentation here

Performance Benchmarks
----------------------

Scrapling isn't just powerful-it's also blazing fast. The following benchmarks compare Scrapling's parser with the latest versions of other popular libraries.

### Text Extraction Speed Test (5000 nested elements)

#

Library

Time (ms)

vs Scrapling

1

Scrapling

1.99

1.0x

2

Parsel/Scrapy

2.06

1.035

3

Raw Lxml

2.56

1.286

4

PyQuery

23.98

~12x

5

Selectolax

197.02

~99x

6

MechanicalSoup

1545.15

~776.5x

7

BS4 with Lxml

1562.1

~785.0x

8

BS4 with html5lib

3412.73

~1714.9x

### Element Similarity & Text Search Performance

Scrapling's adaptive element finding capabilities significantly outperform alternatives:

Library

Time (ms)

vs Scrapling

Scrapling

2.3

1.0x

AutoScraper

12.58

5.47x

> All benchmarks represent averages of 100+ runs. See benchmarks.py for methodology.

Installation
------------

Scrapling requires Python 3.10 or higher:

pip install scrapling

Important

This installation only includes the parser engine and its dependencies, without any fetchers or commandline dependencies. So importing anything from `scrapling.fetchers` or `scrapling.spiders`, like in the examples above, will raise `ModuleNotFoundError` with this installation alone. If you are going to use any of the fetchers or spiders, install the fetchers' dependencies first as shown below.

### Optional Dependencies

1.  If you are going to use any of the extra features below, the fetchers, or their classes, you will need to install fetchers' dependencies and their browser dependencies as follows:
    
    pip install "scrapling\[fetchers\]"
    
    scrapling install           # normal install
    scrapling install  --force  # force reinstall
    
    This downloads all browsers, along with their system dependencies and fingerprint manipulation dependencies.
    
    Or you can install them from the code instead of running a command like this:
    
    from scrapling.cli import install
    
    install(\[\], standalone\_mode\=False)          \# normal install
    install(\["--force"\], standalone\_mode\=False) \# force reinstall
    
2.  Extra features:
    
    -   Install the MCP server feature:
        
        pip install "scrapling\[ai\]"
        
    -   Install dependencies for (building RAG systems):
        
        pip install "scrapling\[rag\]"
        
    -   Install shell features (Web Scraping shell and the `extract` command):
        
        pip install "scrapling\[shell\]"
        
    -   Install everything:
        
        pip install "scrapling\[all\]"
        
    
    Run `scrapling install` when you need browser fetchers. HTTP requests do not need a browser installation.
    

### Docker

You can also install a Docker image with all extras and browsers with the following command from DockerHub:

docker pull pyd4vinci/scrapling

Or download it from the GitHub registry:

docker pull ghcr.io/d4vinci/scrapling:latest

This image is automatically built and pushed using GitHub Actions and the repository's main branch.

Contributing
------------

We welcome contributions! Please read our contributing guidelines before getting started.

Disclaimer
----------

Caution

This library is provided for educational and research purposes only. By using this library, you agree to comply with local and international data scraping and privacy laws. The authors and contributors are not responsible for any misuse of this software. Always respect the terms of service of websites and robots.txt files.

🎓 Citations
------------

If you have used our library for research purposes please quote us with the following reference:

```
  @misc{scrapling,
    author = {Karim Shoair},
    title = {Scrapling},
    year = {2024},
    url = {https://github.com/D4Vinci/Scrapling},
    note = {A Python Web Scraping framework for everything from a single request to a full-scale crawl!}
  }
```

License
-------

This work is licensed under the BSD-3-Clause License.

Acknowledgments
---------------

This project includes code adapted from:

-   Parsel (BSD License)-Used for translator submodule

* * *

Designed & crafted with ❤️ by Karim Shoair.
