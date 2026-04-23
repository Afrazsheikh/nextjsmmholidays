"use client";

import React, { useState } from "react";

interface Props {
  onClose: () => void;
}

const MMASKModal: React.FC<Props> = ({ onClose }) => {
  const [messages, setMessages] = useState<any[]>([
    {
      role: "bot",
      text: "Hi 👋 I'm MMASK. How can I help you plan your Thailand trip?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // 🔥 Replace this later with API call
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Got it! Let me help you with that ✈️" },
      ]);
    }, 600);
  };

  return (
    <div className="mmask-modal-overlay">
      <div className="mmask-modal">
        {/* HEADER */}
        <div className="mmask-header">
          <span>🤖 MMASK Assistant</span>
          <button onClick={onClose}>✖</button>
        </div>

        {/* CHAT BODY */}
        <div className="mmask-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.role}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="mmask-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about trips, budget, itinerary..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default MMASKModal;
