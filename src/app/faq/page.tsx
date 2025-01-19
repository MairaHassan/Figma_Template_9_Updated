"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqData = [
  {
    question: "How do we serve food?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Header />
      <div className="min-h-screen bg-gray-100">
        <header
          className="relative w-full bg-cover bg-center text-center text-white"
          style={{
            backgroundImage: "url('/images/bg_cover.png')",
            height: "400px", // Adjust height based on your image
          }}
        >
          {/* Semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Centered content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-7xl font-extrabold mb-4">FAQ Page</h1>{" "}
            {/* Large title */}
            <p className="text-lg">
              <span className="text-gray-300">Home</span> &gt;{" "}
              <span className="text-yellow-500">faq</span>
            </p>
          </div>
        </header>
      </div>

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Questions Look Here
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p><br/>

        <div className="grid gap-6 sm:grid-cols-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium text-black ">{faq.question}</h3>
                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
