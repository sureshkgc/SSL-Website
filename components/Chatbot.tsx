
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const initializeChat = () => {
        try {
            if (!process.env.API_KEY) {
                // This is a placeholder check. The key is expected to be in the environment.
                throw new Error("API_KEY is not configured.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const systemInstruction = `You are a friendly and helpful AI assistant for Stratowave Solutions, a company specializing in telecom, aviation, and digital infrastructure. Your goal is to answer user questions about the company's services and capabilities based on the information available on their website. Keep your answers concise, professional, and helpful. Do not invent services or capabilities. If you don't know the answer, politely say so. Format your answers with markdown where appropriate.`;
            
            chatRef.current = ai.chats.create({
                model: 'gemini-3-flash-preview',
                config: {
                    systemInstruction,
                },
            });
            setError(null);
        } catch (e: any) {
            console.error("Failed to initialize Gemini:", e);
            setError("Failed to initialize AI Assistant. Please ensure API key is set up correctly.");
        }
    };
    
    useEffect(() => {
        if (isOpen && !chatRef.current) {
            initializeChat();
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading || !chatRef.current) return;

        const userMessage: Message = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);
        setError(null);

        try {
            const stream = await chatRef.current.sendMessageStream({ message: inputValue });
            
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }

        } catch (e: any) {
            console.error("Error sending message:", e);
            setError("Sorry, something went wrong. Please try again.");
            setMessages(prev => [...prev.slice(0, -1)]); // remove empty model message
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-br from-secondary to-pink-500 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:shadow-glow-secondary transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary z-50"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-96 h-[60vh] bg-surface rounded-xl shadow-2xl flex flex-col z-50 border border-slate-200">
                    <header className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 border-b border-slate-200 rounded-t-xl">
                        <h3 className="font-semibold text-text text-lg">AI Assistant</h3>
                        <p className="text-lg text-muted">Powered by Gemini</p>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto bg-bg/50">
                        <div className="space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-lg px-4 py-2 shadow-md ${msg.role === 'user' ? 'bg-gradient-to-r from-primary to-blue-800 text-white' : 'bg-slate-100 text-text border border-slate-200'}`}>
                                        <p className="text-lg" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-100 text-text rounded-lg px-4 py-2 border border-slate-200 shadow-md">
                                        <span className="animate-pulse text-lg">...</span>
                                    </div>
                                </div>
                            )}
                            {error && <p className="text-red-500 text-lg">{error}</p>}
                             <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200 flex items-center space-x-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about Stratowave..."
                            className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-text text-lg"
                            disabled={isLoading}
                        />
                        <button type="submit" className="bg-gradient-to-r from-primary to-blue-800 text-white p-2 rounded-md hover:shadow-glow-primary transition-all duration-300 ease-in-out disabled:bg-slate-300 disabled:shadow-none" disabled={isLoading || !inputValue.trim()}>
                            <SendIcon />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;