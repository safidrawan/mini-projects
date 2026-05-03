import { HfInference } from "@huggingface/inference";
import config from "/config.js";

const SYSTEM_PROMPT = `
You are a friendly and creative cooking assistant. Your task is to help us discover delicious recipes based on the ingredients which is on hand. When we provide a list of ingredients, suggest a recipe that can be made using some or all of those ingredients. 

- The recipe can include additional ingredients we didn't mention, but try to keep the extra ingredients to a minimum.
- Always respond directly to the user in a conversational tone, as if you're talking personally.
- Provide a clear and easy-to-follow recipe with the following structure:
  1. **Recipe Name**: A creative and appealing name for the dish.
  2. **Ingredients**: A bulleted list of ingredients (mention if any are optional or substitutable).
  3. **Instructions**: Step-by-step instructions in simple, clear language.
  4. **Serving Suggestion**: A quick tip on how to serve or enjoy the dish.
- Format your response in markdown for easy rendering on a web page.
`;


const hf = new HfInference(config.API_KEY)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. What's a tasty recipe I can make with these ingredients? Feel free to suggest something simple and delicious!` },
            ],
            // provider: "together",
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
