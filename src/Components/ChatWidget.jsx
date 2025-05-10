import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import mockResponses from "../constants/consntant";
import openai from "../utils/openai";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user" },
    ]);
    setUserInput("");
    setLoading(true);

    const response = await getResponseFromAI(userInput);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response, sender: "bot" },
    ]);
    setLoading(false);
  };

  const getResponseFromAI = async (input) => {
    // Normalize input to lowercase and remove any extra spaces
    const normalizedInput = input.trim().toLowerCase();
    const message = `Act as a customer support agent. And give answer in short for ${normalizedInput}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: message }],
    });
    const response = completion.choices[0].message.content;
    return response;

    // if (mockResponses[normalizedInput]) {
    //   return new Promise((resolve) => resolve(mockResponses[normalizedInput]));
    // }
    // return new Promise((resolve) => resolve("This is a placeholder response."));
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <motion.div
        className='fixed bottom-5 right-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50 hover:scale-110 transition-transform duration-200'
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <FiMessageCircle size={30} />
      </motion.div>

      {/* Chat Box */}
      {isOpen && (
        <div className='fixed bottom-20 sm:bottom-16 right-4 sm:right-5 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-xl w-[90%] max-w-md z-50 border-2 border-purple-500'>
          <div className='flex justify-between items-center mb-4'>
            <div className='text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white'>
              AI Chat
            </div>
            <button
              className='text-xl text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className='space-y-4 h-[60vh] overflow-y-auto p-2'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 sm:p-4 rounded-lg shadow-md max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className='flex mt-4 flex-col sm:flex-row gap-2 sm:gap-0'>
            <input
              type='text'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white'
              placeholder='Ask something...'
            />
            <motion.button
              className='sm:ml-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-purple-700 text-white p-3 rounded-lg w-full sm:w-auto'
              onClick={handleSendMessage}
              disabled={loading}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {loading ? "..." : "Send"}
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
