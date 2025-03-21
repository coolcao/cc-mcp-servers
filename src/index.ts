import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { weatherTool } from './tools/weather/weather.tool.js';
import { registerTool } from "./helper.js";
import { datetimeTool } from "./tools/datetime/datetime.tool.js";
import { lunarTool } from "./tools/lunisolar/lunisolar.tool.js";

const server = new McpServer({
  name: 'cc-mcp-servers',
  version: '1.0.0',
});

registerTool(server, weatherTool);
registerTool(server, datetimeTool);
registerTool(server, lunarTool);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Server running on stdio");
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});