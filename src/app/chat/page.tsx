'use client'

import { useChat } from 'ai/react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'
import { Protect } from '@clerk/nextjs'

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat()
    const [selectedTopic, setSelectedTopic] = useState('')

    const topics = ['Administrative', 'Medical', 'Tickets', 'Tax Services']

    const handleTopicSelect = (topic: string) => {
        setSelectedTopic(topic);
      
        const topicMessage = `I need help with ${topic} services.`;
      
        // Add the message directly to the message history
        handleSubmit(new Event('submit') as any, {
          body: {
            messages: [...messages, { role: 'user', content: topicMessage }]
          },
        });
      };    

    // console.log('selectedTopic===', selectedTopic)
    return (
      <Protect
        role='admin'
        fallback={<p>Only authorized users can access this content.</p>}
      >
        <Card className="w-full max-w-2xl mx-auto mt-8 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
      <CardHeader className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center text-purple-700 dark:text-purple-300">Ask Daniel</CardTitle>
        <CardDescription className="text-center text-gray-600 dark:text-gray-300">Your AI assistant for public services</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {messages.length === 0 && (
          <div className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-lg p-4 shadow-md">
            <p className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-200">What can I help you with today?</p>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <Button 
                  key={topic} 
                  onClick={() => handleTopicSelect(topic)} 
                  variant="outline"
                  className="bg-purple-200 text-purple-700 hover:bg-purple-300 dark:bg-purple-700 dark:text-purple-200 dark:hover:bg-purple-600"
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-4">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-3 max-w-[80%] ${
                m.role === 'user' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}>
                <p className="font-semibold mb-1">{m.role === 'user' ? 'You' : 'Daniel'}</p>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        {isLoading && (
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-lg p-4 shadow-md">
            <Loader2 className="animate-spin" />
            <p>Daniel is thinking...</p>
            <Button onClick={() => stop()} variant="outline" size="sm">
              Stop
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-b-lg">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="flex-grow bg-white dark:bg-gray-700"
          />
          <Button type="submit" disabled={isLoading} className="bg-purple-600 hover:bg-purple-700 text-white">
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
    </Protect>
    )
}