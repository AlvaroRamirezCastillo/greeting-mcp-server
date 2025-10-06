import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import z from "zod";
// Create server instance
const server = new McpServer({
    name: "greeting",
    version: "1.0.0",
});
server.tool("get_greeting", "Tool to get a greeting", {
    name: z.string().describe("person`s name")
}, async ({ name }) => {
    return {
        content: [
            {
                type: "text",
                text: `Welcome ${name}, this is my town.`,
            },
        ],
    };
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("greeting MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
