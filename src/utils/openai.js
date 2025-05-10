import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  baseURL: import.meta.env.VITE_API_URL,
  dangerouslyAllowBrowser: true,
});

export default openai;
