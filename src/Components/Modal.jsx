import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, steps }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center'
      onClick={onClose}
    >
      <div
        className='bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full'
        onClick={(e) => e.stopPropagation()} // Prevent clicking on modal to close
      >
        <h2 className='text-2xl text-center font-semibold text-gray-900 dark:text-white mb-6'>
          How To Sell Your Licenses
        </h2>

        <div className='space-y-6'>
          {steps.map((step, index) => (
            <div key={index} className='flex items-center'>
              <div className='text-4xl mr-4'>{step.icon}</div>
              <div>
                <h3 className='font-semibold text-xl text-gray-900 dark:text-white'>
                  {step.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {step.description}
                </p>
                {step.input && (
                  <input
                    type='file'
                    className='mt-2 border border-gray-300 p-2 rounded-md'
                  />
                )}
              </div>
            </div>
          ))}

          <div className='mt-8 text-center'>
            <button
              onClick={onClose}
              className='bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-md transition duration-300'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
