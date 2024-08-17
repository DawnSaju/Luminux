import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { getSession } from 'next-auth/react';

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    baseURL: process.env.API_BASE,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userMessage, user } = body;
    console.log(userMessage)
    
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const systemPrompt = process.env.KNOWLEDGE || "";

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of response) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              const text = encoder.encode(content);
              controller.enqueue(text);
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, { headers: { 'Content-Type': 'text/event-stream' } });
  } catch (error) {
    console.error('Error:', error);
    return new Response("Sorry we are facing some technical difficulties", { status: 500 });
  }
}
