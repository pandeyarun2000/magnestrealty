"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Dialog, DialogContent, TextField, IconButton, CircularProgress } from "@mui/material";
import { Send, Refresh } from "@mui/icons-material";
import ReactMarkdown from 'react-markdown';
import "./ChatWindow.css";
import Image from 'next/image';

const API_URL = "https://martyapp-237237611403.us-central1.run.app";

interface ChatWindowProps {
  open: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant' | 'typing';
  content: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ open, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    // Add typing indicator
    setMessages([...updatedMessages, { role: 'typing', content: "" }]);

    try {
      const response = await axios.post(`${API_URL}/ask`, {
        question: input,
        conversation_history: updatedMessages,
      });
      const assistantMessage: Message = { role: 'assistant', content: response.data.answer };
      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = { role: 'assistant', content: "An error occurred. Please try again." };
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInput("");
  };

  const TypingIndicator = () => (
    <div className="typing-indicator">
      <div className="typing-dot"></div>
      <div className="typing-dot"></div>
      <div className="typing-dot"></div>
    </div>
  );

  const Disclaimer = () => (
    <div className="disclaimer">
      <h3>Disclaimer</h3>
      <p>Hi, I'm Marty, your virtual RTA assistant here on the Magnest Platform! I'm here to help you navigate the Residential Tenancy Act with ease.</p>
      <p>Got questions? I've got answers—but here's the deal: the more details and context you share, the better and more accurate guidance I can provide. So, don't hold back—give me all the juicy details, and let's solve your RTA puzzles together!</p>
      <button onClick={() => setShowDisclaimer(false)}>I understand</button>
    </div>
  );

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" className="iphone-container">
      <DialogContent style={{ padding: 0 }}>
      {showDisclaimer ? (
        <Disclaimer />
      ) : (
        <div className="rta-bot-container">
          <div className="chat-header">
            <Image 
              src="/assets/marty.jpg" 
              alt="Marty" 
              className="marty-image" 
              width={40} 
              height={40} 
            />
            <div className="header-text">Marty, the RTA Assistant</div>
            <IconButton onClick={resetChat} className="reset-button">
              <Refresh />
            </IconButton>
          </div>
          <div className="chat-window" ref={chatContainerRef}>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  {message.role === "typing" ? (
                    <TypingIndicator />
                  ) : (
                    <>
                      <strong>{message.role === "user" ? "You" : "Marty"}:</strong> 
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="chat-input">
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !loading && sendMessage()}
              placeholder="Ask me anything about the Residential Tenancy Act, and I'll guide you!"
              fullWidth
              variant="outlined"
              disabled={loading}
              className="input-field"
              multiline
              rows={2}
              InputProps={{
                style: {
                  color: 'hsl(var(--primary-foreground))',
                },
                classes: {
                  notchedOutline: 'input-outline',
                },
              }}
            />
            <IconButton onClick={sendMessage} disabled={!input.trim() || loading} className="send-button">
              {loading ? <CircularProgress size={24} /> : <Send />}
            </IconButton>
          </div>
        </div>
         )}
      </DialogContent>
    </Dialog>
  );
};

export default ChatWindow;