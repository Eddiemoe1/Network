// FAQ.tsx
import React, { useState } from "react";

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "What is an AI self-healing network?",
      answer:
        "An AI self-healing network uses artificial intelligence to detect, diagnose, and resolve network issues autonomously, minimizing downtime and improving system reliability.",
    },
    {
      question: "How does the AI self-healing network work?",
      answer:
        "The network continuously monitors data from various sources and uses machine learning algorithms to detect anomalies. When an issue is identified, the system attempts to resolve it automatically or alerts the relevant personnel.",
    },
    {
      question: "What are the benefits of using a self-healing network?",
      answer:
        "The key benefits include reduced network downtime, quicker resolution of issues, improved system efficiency, and a reduction in the need for manual intervention.",
    },
    {
      question: "Are there any limitations to the self-healing capabilities?",
      answer:
        "Yes, while the AI is designed to handle common network issues, there are limitations. Complex or unforeseen issues may require human intervention, and there may be compatibility limitations with certain network configurations.",
    },
    {
      question: "How is my data protected in the self-healing network?",
      answer:
        "We prioritize data security and use robust encryption methods to ensure that all data handled by the AI system is protected. For more details, please refer to our Privacy Policy.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 text-white" style={{ backgroundColor: '#050238' }}>
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">Frequently Asked Questions</h1>
      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center p-4 bg-gray-800 rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold text-blue-400">{faq.question}</span>
              <span className="text-2xl font-bold text-blue-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 p-4 text-lg text-gray-200 leading-relaxed bg-gray-900 rounded-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
