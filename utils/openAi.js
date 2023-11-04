const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

module.exports = {
    openai
};