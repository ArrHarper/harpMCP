import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "node:fs/promises";
import path from "node:path";

// Create server instance
const server = new McpServer({
    name: "harpMCP",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});

// Add a prompt to provide the Aurora API system instructions
server.prompt(
    "auroraApi",
    { userQuestion: z.string() },
    async ({ userQuestion }) => {
        try {
            // Read the system prompt file
            const systemPromptPath = path.join(process.cwd(), 'src', 'prompts', 'AuroraApiSystemPrompt.md');
            const systemPrompt = await fs.readFile(systemPromptPath, 'utf-8');

            return {
                messages: [
                    {
                        role: "user",
                        content: {
                            type: "text",
                            text: `${systemPrompt}${userQuestion}`,
                        },
                    },
                ],
            };
        } catch (error) {
            const err = error as Error;
            console.error(`Error reading system prompt: ${err.message}`);
            return {
                messages: [
                    {
                        role: "user",
                        content: {
                            type: "text",
                            text: `I'm having trouble accessing the Aurora API documentation. Could you please help me with: ${userQuestion}`,
                        },
                    },
                ],
            };
        }
    }
);

server.resource(
    "aurora-docs",
    new ResourceTemplate("aurora://docs/{docFile}", { list: undefined }),
    async (uri, { docFile }) => {
        // Initialize effectiveDocFile immediately to handle potential array and ensure it's assigned.
        const effectiveDocFile = Array.isArray(docFile) ? docFile.join('/') : docFile;
        try {
            const filePath = path.join(process.cwd(), 'src', 'resources', effectiveDocFile);
            const content = await fs.readFile(filePath, 'utf-8');

            return {
                contents: [{
                    uri: uri.href,
                    mimeType: "text/markdown",
                    text: content
                }]
            };
        } catch (error) {
            const err = error as Error;
            // effectiveDocFile is guaranteed to be assigned here.
            console.error(`Error reading documentation file: ${err.message}`);
            return {
                contents: [{
                    uri: uri.href,
                    mimeType: "text/plain",
                    text: `Error: Unable to fetch documentation file ${effectiveDocFile}: ${err.message}`
                }]
            };
        }
    }
);

// Add a resource to list all available documentation files
server.resource(
    "aurora-docs-list",
    "aurora://docs",
    async (uri) => {
        try {
            const docsDir = path.join(process.cwd(), 'src', 'resources');
            const files = await fs.readdir(docsDir);
            const filesList = files.map(file => `- ${file}`).join('\n');

            return {
                contents: [{
                    uri: uri.href,
                    mimeType: "text/markdown",
                    text: `# Available Aurora Documentation Files\n\n${filesList}`
                }]
            };
        } catch (error) {
            const err = error as Error;
            console.error(`Error reading documentation directory: ${err.message}`);
            return {
                contents: [{
                    uri: uri.href,
                    mimeType: "text/plain",
                    text: `Error: Unable to list documentation files: ${err.message}`
                }]
            };
        }
    }
);

// const WistiaDocsParamsSchema = z.object({
//     article_key: z.string(),
// });

// server.resource(
//     "wistia-docs",
//     new ResourceTemplate("wistia://docs/{article_key}", { list: undefined }),
//     {},
//     async (uri, { article_key }) => {
//         try {

//             const response = await fetch(`https://docs.wistia.com/docs/${article_key}`);

//             if (!response.ok) {
//                 throw new Error(`Failed to fetch documentation: ${response.statusText}`);
//             }

//             const content = await response.text();

//             return {
//                 contents: [{
//                     uri: uri.href,
//                     mimeType: "text/html",
//                     text: content
//                 }]
//             };
//         } catch (error) {
//             const err = error as Error;
//             console.error(`Error fetching Wistia documentation: ${err.message}`);
//             return {
//                 contents: [{
//                     uri: uri.href,
//                     mimeType: "text/plain",
//                     text: `Error: Unable to fetch documentation for ${article_key}: ${err.message}`
//                 }]
//             };
//         }
//     }
// );

// // Tool to fetch Wistia doc by key
// server.tool(
//     "fetchWistiaDoc",
//     { article_key: z.string() },
//     async ({ article_key }) => {
//         const resourceUri = `wistia://docs/${article_key}`;
//         try {
//             const response = await fetch(`https://docs.wistia.com/docs/${article_key}`);
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch documentation: ${response.statusText}`);
//             }
//             const contentText = await response.text();
//             return {
//                 content: [
//                     {
//                         type: "resource",
//                         resource: {
//                             uri: resourceUri,
//                             mimeType: "text/html",
//                             text: contentText,
//                         },
//                     },
//                 ],
//             };
//         } catch (error) {
//             const err = error as Error;
//             console.error(`Error fetching Wistia documentation in tool: ${err.message}`);
//             return {
//                 content: [{
//                     type: "text",
//                     text: `Error: Unable to fetch documentation for ${article_key}: ${err.message}`
//                 }],
//                 isError: true
//             };
//         }
//     }
// );

// // Prompt to provide UI for fetchWistiaDoc tool
// server.prompt(
//     "fetchWistiaDoc", // Name matches the tool for potential client linking
//     { article_key: z.string() },
//     ({ article_key }) => {
//         return {
//             // Generate the tool call message when the prompt is used
//             messages: [
//                 {
//                     role: "user",
//                     content: {
//                         type: "text",
//                         text: `@harpMCP docs ${article_key}`,
//                     },
//                 },
//             ],
//         };
//     }
// );

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);