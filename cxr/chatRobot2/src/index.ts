import {Configuration, OpenAIApi} from 'openai';
import dotenv from 'dotenv';
dotenv.config()

const openAi = new OpenAIApi(new Configuration({
  basePath: '',
  apiKey: process.env.OPEN_API_KEY
}))