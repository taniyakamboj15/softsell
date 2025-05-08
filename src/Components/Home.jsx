import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="pt-24 min-h-screen bg-white flex flex-col justify-center items-center text-center px-4">
     
      <motion.h1
        className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-[500] text-gray-900 leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Pacifico', cursive",
          position: 'relative',
        }}
      >
        Your software. Our speed.<br />
        <span className="relative inline-block">
        resell smarter with{' '}
          <span className="bg-red-300 px-2 rotate-[-2deg] inline-block rounded-md text-white font-bold">
          unbeatable deals
          </span>
          💼
        </span>
      </motion.h1>

     
      <motion.p
        className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
       From <strong>deals</strong> to deployments, from <strong>plans</strong> to payments…<br />
our all-in-one platform simplifies software reselling like never before.

      </motion.p>

      <motion.div
        className="mt-10 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#get-started"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
        >
          Sell My Licenses
        </a>
    
      </motion.div>
    </section>
  );
};

export default Home;
