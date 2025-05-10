import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div>
      {" "}
      <motion.section
        className='mt-16 w-full text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className='text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-8'>
          How It Works
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Step 1: Upload License */}
          <div className='flex flex-col items-center'>
            <div className='text-4xl mb-4'>
              <span role='img' aria-label='upload'>
                📤
              </span>
            </div>
            <h3 className='font-semibold text-xl text-gray-900 dark:text-white'>
              1. Upload License
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Simply upload your unused software license and tell us what it is.
            </p>
          </div>

          {/* Step 2: Get Valuation */}
          <div className='flex flex-col items-center'>
            <div className='text-4xl mb-4'>
              <span role='img' aria-label='valuation'>
                💰
              </span>
            </div>
            <h3 className='font-semibold text-xl text-gray-900 dark:text-white'>
              2. Get Valuation
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Receive an instant, accurate valuation for your license.
            </p>
          </div>

          {/* Step 3: Get Paid */}
          <div className='flex flex-col items-center'>
            <div className='text-4xl mb-4'>
              <span role='img' aria-label='payment'>
                💸
              </span>
            </div>
            <h3 className='font-semibold text-xl text-gray-900 dark:text-white'>
              3. Get Paid
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Once accepted, get paid promptly and securely.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItWorks;
