import { NextResponse } from 'next/server';
import { Message } from 'ai';
// import { StreamingTextResponse } from 'ai/streaming';
// import { experimental_StreamingReactResponse, experimental_LangChainStream } from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { Document } from '@langchain/core/documents';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { OpenAIEmbeddings } from '@langchain/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

// In-memory storage for demo purposes
let vectorStore: MemoryVectorStore | null = null;

// export async function POST(req: Request) {
//   const formData = await req.formData();
//   const files = formData.getAll('files');

//   if (files.length > 0) {
//     // Handle file upload
//     try {
//       const documents: Document[] = [];
      
//       for (const file of files) {
//         if (file instanceof File) {
//           const loader = new PDFLoader(file);
//           const docs = await loader.load();
//           documents.push(...docs);
//         }
//       }

//       // Initialize vector store with documents
//       vectorStore = await MemoryVectorStore.fromDocuments(
//         documents,
//         new OpenAIEmbeddings()
//       );

//       return NextResponse.json({ success: true });
//     } catch (error) {
//       console.error('Error processing files:', error);
//       return NextResponse.json({ error: 'Error processing files' }, { status: 500 });
//     }
//   } else {
//     // Handle chat message
//     try {
//       const { messages } = await req.json();
//       const { stream, handlers } = experimental_LangChainStream();

//       const llm = new ChatOpenAI({
//         modelName: 'gpt-4',
//         streaming: true,
//       });

//       // If we have a vector store, use it for context
//       let context = '';
//       if (vectorStore) {
//         const relevantDocs = await vectorStore.similaritySearch(
//           messages[messages.length - 1].content,
//           3
//         );
//         context = relevantDocs.map(doc => doc.pageContent).join('\n');
//       }

//       // Construct the prompt with context
//       const prompt = `
//         Context: ${context}
        
//         Based on the context above, please answer the following:
//         ${messages[messages.length - 1].content}
//       `;

//       llm.call(
//         [{ content: prompt, role: 'user' }],
//         {},
//         [handlers]
//       );

//       return new StreamingTextResponse(stream);
//     } catch (error) {
//       console.error('Error in chat:', error);
//       return NextResponse.json({ error: 'Error processing chat' }, { status: 500 });
//     }
//   }
// }
