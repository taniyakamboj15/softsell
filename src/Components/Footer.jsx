import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 dark:bg-gray-900 dark:text-gray-300'>
      <div className='max-w-screen-xl mx-auto px-6'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-semibold'>SoftSell</h2>
            <p className='mt-2'>
              Helping businesses grow with digital solutions
            </p>
          </div>

          <div className='flex space-x-6'>
            <a
              href='/'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition duration-300'
            >
              Home
            </a>
            <a
              href='/about'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition duration-300'
            >
              About
            </a>
            <a
              href='/services'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition duration-300'
            >
              Services
            </a>
            <a
              href='/contact'
              className='hover:text-blue-500 dark:hover:text-blue-400 transition duration-300'
            >
              Contact
            </a>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
