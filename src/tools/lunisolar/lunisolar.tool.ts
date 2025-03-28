import lunisolar from 'lunisolar';
import { theGods } from '@lunisolar/plugin-thegods';
import { z, ZodOptional, ZodString } from 'zod';
import dayjs from 'dayjs';

import { buildCallToolResult, buildTextContent, ToolDefinition } from '../../helper.js';

lunisolar.extend(theGods)

function getLunarInfo(date: string) {
  const lunar = lunisolar(date);
  let txt = `查询时间：${date}\n`;
  txt += `农历：${lunar.format('lY年lM月lD日')}\n`;
  txt += `干支纪年：${lunar.format('cY年cM月cD日')}\n`;
  txt += `八字：${lunar.char8.toString()}\n`;
  txt += `生肖：${lunar.format('cZ')}\n`;
  txt += `季节：${lunar.getSeason()}\n`;
  if (lunar.solarTerm) {
    txt += `节气：${lunar.solarTerm?.toString()}\n`;
  }
  const { good, bad } = lunar.theGods.getActs();
  txt += `宜：${good.join('、')}\n`;
  txt += `忌：${bad.join('、')}\n`;
  return txt;
}

const lunarTool: ToolDefinition<{ date: ZodOptional<ZodString> }> = {
  name: 'lunisolar',
  description: '农历/黄历/万年历查询',
  paramsSchema: z.object({
    date: z.string().describe('可选的日期时间，格式为 YYYY-MM-DD HH:mm:ss，如果只传日期则时间默认为 00:00:00').optional(),
  }),
  callback: async ({ date }) => {
    const info = getLunarInfo(dayjs(date).format('YYYY-MM-DD HH:mm:ss'));
    return buildCallToolResult([buildTextContent(info)]);
  }
}

export {
  lunarTool
}