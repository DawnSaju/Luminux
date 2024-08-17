"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Github } from 'lucide-react';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  picture?: string | null;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      if (session?.user) {
        setUser(session.user);
      }
    } else if (status === 'unauthenticated') {
      signIn();
    }
  }, [status, session]);

  const predefined = [
    { text: 'How can I improve my immune system?', color: 'text-gray-400' },
    { text: 'What are the benefits of yoga?', color: 'text-gray-400' },
    { text: 'How can I lose weight?', color: 'text-gray-400' },
    { text: 'What are the benefits of eating fruits?', color: 'text-gray-400' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage: Message = { role: 'user', content: inputValue };
      setMessages((messages) => [
        ...messages,
        userMessage,
        { role: 'assistant', content: '' },
      ]);
      setInputValue('');

      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: userMessage.content, user: user }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = '';

      while (true) {
        const { done, value } = await reader?.read()!;
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        result += chunk;

        setMessages((messages) => {
          const lastMessageIndex = messages.length - 1;
          const lastMessage = messages[lastMessageIndex];
          const otherMessages = messages.slice(0, lastMessageIndex);

          return [
            ...otherMessages,
            { ...lastMessage, content: result },
          ];
        });
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white">
      <header className="flex justify-between items-center p-4 bg-[#1a1a1a]">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-full">
            {user ? (
              <img src={user.image ?? user.picture ?? "https://avatar.iran.liara.run/username?username=Unknown"} alt="User" />
            ) : (
              <img src={`https://avatar.iran.liara.run/username?username=Unknown`} alt="Unknown User" />
            )}
          </div>
          {user ? (
            <button className="font-semibold">{user.name}</button>
          ) : (
            <button className="font-semibold">""</button>      
          )}
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <button onClick={() => signOut({ callbackUrl: '/', redirect: true })} className="flex items-center space-x-1 text-gray-300 hover:text-white">Sign out</button>
          ) : (
            <button onClick={() => signIn('luminux', { callbackUrl: '/chat' })} className="flex items-center space-x-1 text-gray-300 hover:text-white">Sign in</button>
          )}
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-end items-center p-4 overflow-y-auto">
        <div className="w-full max-w-2xl space-y-4">
          {messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-600 ml-auto' : 'bg-[#1a1a1a]'} max-w-[80%]`}>
                  <Markdown>
                    {message.content}
                  </Markdown>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {predefined.map((query, index) => (
                <div key={index} className={`bg-[#1a1a1a] p-3 rounded-lg dark:hover:bg-gray-500/20 ${query.color}`}>
                  <Button className={`bg-transparent ${query.color} dark:hover:bg-transparent dark:hover:text-white`}>
                    {query.text}
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="bg-[#1a1a1a] p-2 rounded-lg flex items-center">
            <button className="p-2 text-gray-400 hover:text-white">
              <span className="text-2xl">+</span>
            </button>
            <input
              type="text"
              placeholder="Send a message."
              className="flex-grow bg-transparent outline-none px-2 text-white"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button className="p-2 text-gray-400 hover:text-white" onClick={handleSendMessage}>
              <Send size={20} />
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center p-4 text-gray-400 text-sm">
        Luminux Chatbot
      </footer>
    </div>
  );
};

export default Chat;
