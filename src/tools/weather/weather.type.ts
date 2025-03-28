export interface Resp<T> {
  reason: string;
  result: T;
  error_code: number; // 0为查询成功
}
export interface WidInfo {
  day: string;
  night: string;
}
export interface FutureWeather {
  date: string;
  temperature: string;
  weather: string;
  wid: WidInfo;
  direct: string;
}
export interface RealtimeWeather {
  temperature: string;
  humidity: string;
  info: string;
  wid: string;
  direct: string;
  power: string;
  aqi: string;
}
export interface WeatherResult {
  city: string;
  realtime: RealtimeWeather;
  future: FutureWeather[];
}



