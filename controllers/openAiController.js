// const openai = require('../utils/openAi');

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

exports.movieSuggestion = async (req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "Say this is a test" }],
            model: "gpt-3.5-turbo",
        });

        console.log(chatCompletion);
         
        return res.status(200).send({message: "Chat completion fetched successfully", data: chatCompletion.choices});
    } catch (error) {
        console.log(error);
    }
}