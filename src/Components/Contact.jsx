import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.company) newErrors.company = "Required";
    if (!formData.licenseType) newErrors.licenseType = "Select one";
    if (!formData.message) newErrors.message = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
    }
  };

  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className='my-24 px-6 md:px-16 lg:px-32 transition-colors duration-300'
    >
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white'>
        📩 Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl dark:shadow-md grid gap-6'
      >
        {[
          { type: "text", name: "name", placeholder: "Your Name" },
          { type: "email", name: "email", placeholder: "Email Address" },
          { type: "text", name: "company", placeholder: "Company Name" },
        ].map(({ type, name, placeholder }) => (
          <div key={name}>
            <input
              type={type}
              placeholder={placeholder}
              className='w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600'
              value={formData[name]}
              onChange={(e) =>
                setFormData({ ...formData, [name]: e.target.value })
              }
            />
            {errors[name] && (
              <span className='text-red-500 text-sm'>{errors[name]}</span>
            )}
          </div>
        ))}

        <div>
          <select
            className='w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600'
            value={formData.licenseType}
            onChange={(e) =>
              setFormData({ ...formData, licenseType: e.target.value })
            }
          >
            <option value=''>Select License Type</option>
            <option value='Windows'>Windows</option>
            <option value='Adobe'>Adobe</option>
            <option value='Office365'>Office 365</option>
          </select>
          {errors.licenseType && (
            <span className='text-red-500 text-sm'>{errors.licenseType}</span>
          )}
        </div>

        <div>
          <textarea
            placeholder='Your Message'
            rows='5'
            className='w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600'
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {errors.message && (
            <span className='text-red-500 text-sm'>{errors.message}</span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type='submit'
          className='w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition duration-300 shadow-md dark:bg-blue-500 dark:hover:bg-blue-600'
        >
          ✉️ Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
