import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as fs from 'fs/promises';
import * as path from 'path';
// Create server instance
const server = new McpServer({
    name: "harpMCP",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
server.resource("operational-framework", "values://harp", async (uri) => {
    const configPath = path.join(process.cwd(), 'resources', 'operational-framework.md');
    const content = await fs.readFile(configPath, 'utf-8');
    return {
        contents: [{
                uri: uri.href,
                mimeType: "text/markdown",
                text: content
            }]
    };
});
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
