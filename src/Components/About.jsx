import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const icons = ["⚡", "🔒", "✅", "🚀"];
const whyUsData = [
  {
    icon: icons[0],
    title: "Fast Payouts",
    desc: "Get paid within 24 hours of selling your license.",
  },
  {
    icon: icons[1],
    title: "Secure Transfers",
    desc: "100% safe and verified license transfers.",
  },
  {
    icon: icons[2],
    title: "Trusted by 100+ Companies",
    desc: "Our platform is used by top SaaS firms.",
  },
  {
    icon: icons[3],
    title: "Best Market Value",
    desc: "We offer top-dollar quotes for unused licenses.",
  },
];

const About = () => (
  <motion.section
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
    className='my-20 px-6 md:px-16 lg:px-32 transition-colors duration-300'
  >
    <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white'>
      💡 Why Choose SoftSell
    </h2>
    <div className='grid md:grid-cols-2 gap-10'>
      {whyUsData.map((item, index) => (
        <Tilt
          key={index}
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className='bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl dark:shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 flex items-start gap-6 transition-all duration-300'
        >
          <div className='text-5xl'>{item.icon}</div>
          <div>
            <h3 className='text-xl font-semibold mb-1 text-gray-900 dark:text-white'>
              {item.title}
            </h3>
            <p className='text-gray-600 dark:text-gray-300 text-sm'>
              {item.desc}
            </p>
          </div>
        </Tilt>
      ))}
    </div>
  </motion.section>
);

export default About;
