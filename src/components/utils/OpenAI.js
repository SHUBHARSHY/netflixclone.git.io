import OpenAI from 'openai';
import { GPT_kEY } from './constant';

const openai = new OpenAI({
  apiKey: GPT_kEY, // This is the default and can be omitted
  dangerouslyAllowBrowser:true
});

export default openai


// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();