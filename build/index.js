import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fetch from "node-fetch";
// Create server instance
const server = new McpServer({
    name: "harpMCP",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
const WistiaDocsParamsSchema = z.object({
    article_key: z.string(),
});
server.resource("wistia-docs", new ResourceTemplate("wistia://docs/{article_key}", { list: undefined }), {}, async (uri, { article_key }) => {
    try {
        const response = await fetch(`https://docs.wistia.com/docs/${article_key}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch documentation: ${response.statusText}`);
        }
        const content = await response.text();
        return {
            contents: [{
                    uri: uri.href,
                    mimeType: "text/html",
                    text: content
                }]
        };
    }
    catch (error) {
        const err = error;
        console.error(`Error fetching Wistia documentation: ${err.message}`);
        return {
            contents: [{
                    uri: uri.href,
                    mimeType: "text/plain",
                    text: `Error: Unable to fetch documentation for ${article_key}: ${err.message}`
                }]
        };
    }
});
// Tool to fetch Wistia doc by key
server.tool("fetchWistiaDoc", { article_key: z.string() }, async ({ article_key }) => {
    const resourceUri = `wistia://docs/${article_key}`;
    try {
        const response = await fetch(`https://docs.wistia.com/docs/${article_key}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch documentation: ${response.statusText}`);
        }
        const contentText = await response.text();
        return {
            content: [
                {
                    type: "resource",
                    resource: {
                        uri: resourceUri,
                        mimeType: "text/html",
                        text: contentText,
                    },
                },
            ],
        };
    }
    catch (error) {
        const err = error;
        console.error(`Error fetching Wistia documentation in tool: ${err.message}`);
        return {
            content: [{
                    type: "text",
                    text: `Error: Unable to fetch documentation for ${article_key}: ${err.message}`
                }],
            isError: true
        };
    }
});
// Prompt to provide UI for fetchWistiaDoc tool
server.prompt("fetchWistiaDoc", // Name matches the tool for potential client linking
{ article_key: z.string() }, ({ article_key }) => {
    return {
        // Generate the tool call message when the prompt is used
        messages: [
            {
                role: "user",
                content: {
                    type: "text",
                    text: `@harpMCP fetchWistiaDoc article_key=${article_key}`,
                },
            },
        ],
    };
});
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
