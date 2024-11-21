import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamTextResponse } from 'ai'

// Create a new OpenAI API instance client, that's edge friendly
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

//important! set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
    //extract the messages from the body of the request
    const { messages } = await req.json()

    //ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            { 
                role: 'system',
                content: "You are 'Ask Daniel', an AI assistant for US citizens, helping with administrative, medical, tickets, and tax services. Provide concise, accurate information to simplify access to public services."
            },
            ...messages, 
        ],
    })

    //convert the response to a text-stream
    const stream = new OpenAIStream(response)
    //respond with the stream
    return new StreamTextResponse(stream)
}