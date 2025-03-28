import dayjs from "dayjs";
import { buildCallToolResult, buildTextContent, ToolDefinition } from "../../helper.js";

function getCurrentUTCDateTime(): string {
  const dMap = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };
  const now = dayjs();
  const txt = `现在时间: ${now.format('YYYY-MM-DD HH:mm:ss')}\n周${dMap[now.day()]}`;
  return txt;
}

const datetimeTool: ToolDefinition<{}> = {
  name: 'currentDateTime',
  description: '获取当前时间',
  callback: () => {
    const currentUTCDateTime = getCurrentUTCDateTime();
    return buildCallToolResult([buildTextContent(currentUTCDateTime)]);
  }
}

export {
  datetimeTool,
}