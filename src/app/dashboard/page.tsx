'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function DashboardPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
      await fetch('/api/dashboard/upload', {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(m => (
          <div 
            key={m.id} 
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-lg p-4 ${
              m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      {/* File Drop Zone */}
      <div 
        className={`mx-4 mb-4 border-2 border-dashed rounded-lg p-4 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleFileDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drop PDF files here or click to upload
        </p>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-4">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask anything..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}