import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you today?" }
  ]);

  const questions = [
    {
      text: "What types of fans do you offer?",
      response: "We offer ceiling fans (Skyro, Inara, Evaara) and pedestal fans.",
    },
    {
      text: "Where can I buy Anthem fans?",
      response: "You can buy from Amazon, Flipkart, or certified dealers near you.",
    },
    {
      text: "What is the warranty period?",
      response: "All our fans come with a 2-year warranty.",
    },
    {
      text: "How to contact support?",
      response: "Email us at support@anthemfans.com or call +91 9930101710.",
    },
  ];

  const handleQuestionClick = (q) => {
    setMessages([
      ...messages,
      { from: "user", text: q.text },
      { from: "bot", text: q.response },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-[#ba6a5a] hover:bg-[#e49385] text-white rounded-full p-4 shadow-xl"
          aria-label="Open Chatbot"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-80 bg-[#2f2f2f] rounded-2xl shadow-2xl border border-[#ba6a5a] overflow-hidden">
          {/* Header */}
          <div className="bg-[#ba6a5a] text-white px-4 py-3 flex justify-between items-center">
            <h4 className="font-semibold">Anthem Assistant</h4>
            <button onClick={() => setOpen(false)} className="text-white">
              <X />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-[#1c1c1c] text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.from === "user"
                    ? "text-right text-[#e49385]"
                    : "text-left text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Options */}
          <div className="p-4 border-t border-[#ba6a5a]/30 space-y-2 bg-[#2f2f2f]">
            {questions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(q)}
                className="w-full text-left px-3 py-2 bg-[#1c1c1c] rounded hover:bg-[#ba6a5a] text-gray-200 text-sm"
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
