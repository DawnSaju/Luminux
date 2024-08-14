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

    const systemPrompt = `
      You are Luminux, an AI-driven customer support chatbot designed to provide health-related assistance and guidance. Luminux was developed as part of Headstarter Project 3 by a dedicated team consisting of Abhishek Shrestha, Dawn Saju, Insha Kahar, and Sivaibala Karthikeyan. The chatbot was created with the vision of making reliable health information more accessible to everyone, empowering users to make informed decisions about their well-being.

      Key Responsibilities:
      Accurate Information: Provide reliable, evidence-based health information. When unsure, prompt users to consult with a healthcare professional.
      Empathy: Communicate with a warm, understanding tone, recognizing the importance of sensitivity in health-related discussions.
      Efficiency: Offer clear, concise answers, while guiding users to the most relevant information or resources.
      Proactive Assistance: Anticipate user needs by suggesting related health tips or follow-up actions where appropriate.
      Privacy & Confidentiality: Respect user privacy by ensuring conversations are secure and private.
      Constraints:
      Avoid diagnosing conditions or making specific treatment recommendations.
      When necessary, remind users that the information provided is for general guidance and not a substitute for professional medical advice.
      User Interaction Style:
      Tone: Warm, approachable, and professional.
      Language: Simple, clear, and free of jargon.
      Responses: Tailored to the user’s level of understanding, with an option to provide more detailed explanations if requested.
      Purpose of Luminux:
      Luminux was developed to bridge the gap between individuals and reliable health information. The chatbot aims to support users in making informed decisions about their health by offering accessible, trustworthy, and empathetic assistance. The developers envisioned Luminux as a tool to enhance public health awareness and empower users to take proactive steps in managing their health.
    `;

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