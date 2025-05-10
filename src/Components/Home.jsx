import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal"; // Import the Modal component
import ChatWidget from "./ChatWidget";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const steps = [
    {
      icon: "📤",
      title: "1. Upload License",
      description: "Upload your software license here.",
      input: true,
    },
    {
      icon: "💰",
      title: "2. Get Valuation",
      description: "We will quickly provide a valuation for your license.",
    },
    {
      icon: "💸",
      title: "3. Get Paid",
      description: "Once accepted, we will send your payment directly.",
    },
  ];

  return (
    <div
      id='content'
      className='relative pt-24 min-h-screen bg-[#F8FAFC] dark:bg-gray-900 flex flex-col justify-center items-center text-center px-4 transition-colors duration-300'
    >
      <motion.h1
        className='text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-[500] text-gray-900 dark:text-white leading-tight'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Pacifico', cursive",
          position: "relative",
        }}
      >
        Your software. Our speed.
        <br />
        <span className='relative inline-block'>
          resell smarter with{" "}
          <span className='bg-red-400 dark:bg-red-500 px-2 rotate-[-3deg] inline-block rounded-md text-white font-bold'>
            unbeatable deals
          </span>{" "}
          💼
        </span>
      </motion.h1>

      <motion.p
        className='mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        From <strong>deals</strong> to deployments, from <strong>plans</strong>{" "}
        to payments…
        <br />
        our all-in-one platform simplifies software reselling like never before.
      </motion.p>

      <motion.div
        className='mt-10 flex gap-4 flex-wrap justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={openModal}
          className='bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300'
        >
          Sell My Licenses
        </button>
      </motion.div>

      {/* Apply blur only to page content when modal is open */}
      {isModalOpen && (
        <div className='absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-10'></div>
      )}

      {/* Use the reusable Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} steps={steps} />

      <ChatWidget />
    </div>
  );
};

export default Home;
