import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CTO",
    company: "TechX",
    review: "SoftSell helped us turn old software into revenue quickly!",
  },
  {
    name: "Jane Smith",
    role: "IT Manager",
    company: "CloudNet",
    review: "Fast, secure, and simple. Highly recommended!",
  },
];

const Testimonials = () => (
  <motion.section
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
    className='my-20 px-6 md:px-16 lg:px-32 transition-colors duration-300'
  >
    <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white'>
      💬 What Our Clients Say
    </h2>
    <div className='grid md:grid-cols-2 gap-10'>
      {testimonials.map((t, idx) => (
        <Tilt
          key={idx}
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.03}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
        >
          <p className='text-gray-600 dark:text-gray-300 text-lg italic leading-relaxed'>
            “{t.review}”
          </p>
          <div className='mt-6 text-gray-900 dark:text-white font-semibold'>
            — {t.name}, {t.role},{" "}
            <span className='text-blue-600 dark:text-blue-400'>
              {t.company}
            </span>
          </div>
        </Tilt>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
