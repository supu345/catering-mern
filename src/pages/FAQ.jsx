import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. Items must be returned in their original condition and packaging.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking number and a link to track your package.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. International shipping fees and delivery times vary by location.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Orders can be modified or canceled within 2 hours of placing them. Please contact our support team for assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className=" py-[80px] dark:bg-black dark:text-white">
      <div className="container py-[80px]">
        <div className="container mx-auto py-10 px-4">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <h2 className="text-4xl font-bold text-center mb-8 font-bebas">
              Frequently Asked Questions
            </h2>
          </motion.p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium"
                  >
                    {faq.question}
                    <span
                      className={`transform transition-transform ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                </motion.p>
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  {activeIndex === index && (
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  )}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
