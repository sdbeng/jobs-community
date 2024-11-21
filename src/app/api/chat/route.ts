import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json()

  // Ask OpenAI for a streaming chat completion given the prompt
  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are Daniel, a helpful AI assistant for public services. You are helping a user with their request.',
    messages,
  })

  return result.toDataStreamResponse();
}