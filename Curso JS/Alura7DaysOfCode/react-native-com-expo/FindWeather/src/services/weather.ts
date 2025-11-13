import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;

export async function getWeather(city: string) {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "pt_br",
    },
  });
  return response.data;
}