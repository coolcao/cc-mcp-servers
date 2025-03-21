import { buildCallToolResult, buildTextContent, ToolDefinition } from "../../helper.js";

function getCurrentUTCDateTime(): string {
  return new Date().toISOString();
}

const datetimeTool: ToolDefinition<{}> = {
  name: 'currentDateTime',
  description: '获取当前的 UTC 日期时间。',
  callback: () => {
    const currentUTCDateTime = getCurrentUTCDateTime();
    return buildCallToolResult([buildTextContent(currentUTCDateTime)]);
  }
}

export {
  datetimeTool,
}