'use client'

import { useChat } from 'ai/react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    const [selectedTopic, setSelectedTopic] = useState('')

    const topics = ['Administrative', 'Medical', 'Tickets', 'Tax Services']

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ask Daniel</CardTitle>
                <CardDescription>Your AI assistant for public services</CardDescription>
            </CardHeader>
            <CardContent>
                    {messages.length === 0 && (
                <div className="mb-4">
                    <p className="mb-2">What can I help you with today?</p>
                    <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                        <Button key={topic} onClick={() => handleTopicSelect(topic)} variant="outline">
                        {topic}
                        </Button>
                    ))}
                    </div>
                </div>
                )}
                <div className="space-y-4">
                {messages.map(m => (
                    <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg p-3 ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {m.content}
                    </div>
                    </div>
                ))}
                </div>
            </CardContent>
            <CardFooter>
                <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    className="flex-grow"
                />
                <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}