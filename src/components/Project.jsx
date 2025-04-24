import React from 'react'
import { FaReact, FaPython, FaShoppingCart, FaLaptopCode } from "react-icons/fa";
import { SiPython } from "react-icons/si";
export default function Project() {
  const cardItems = [
    {
      id: 1,
      name: "E-commerce Website",
      icon: <FaShoppingCart className="text-6xl text-blue-600 mx-auto" />,
      description: "A full-featured online store built with Django, Stripe integration, and custom admin tools.",
      codeLink: "https://github.com/Hifzain/ecommerce-website"
    },
    {
      id: 2,
      name: "Portfolio Website",
      icon: <FaLaptopCode className="text-6xl text-purple-600 mx-auto" />,
      description: "A personal portfolio showcasing skills and projects, built with React and Tailwind CSS.",
      codeLink: "https://github.com/Hifzain/my-portfolio"
    },
    {
      id: 3,
      name: "AI Chatbot",
      icon: <SiPython className="text-5xl text-yellow-500 mx-auto" />,
      description: "An intelligent chatbot built with Rasa for handling user queries with natural language understanding.",
      codeLink: "https://github.com/Hifzain/background-color-change"
    },
    {
      id: 4,
      name: "Blog Platform",
      icon: <FaReact className="text-6xl text-cyan-500 mx-auto" />,
      description: "A responsive blog system with comments, admin dashboard, and user authentication.",
      codeLink: "https://github.com/Hifzain/background-color-change"
    },
  ];

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16' name="Projects">
        <h1 className='text-3xl font-bold mb-5'>Projects</h1>
        <span className='underline font-semibold text-lg text-gray-700'>Featured Projects</span>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
          {cardItems.map(({ id, name, icon, description, codeLink }) => (
            <div key={id} className="bg-white border-2 rounded-xl shadow-lg p-4 hover:scale-105 transform transition duration-300">
              {icon}
              <h2 className='text-xl font-semibold text-center mt-4'>{name}</h2>
              <p className='text-sm text-gray-600 mt-2 text-center'>{description}</p>
              <div className='flex justify-center mt-4 space-x-4'>
               
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold cursor-pointer'
                > <button className='cursor-pointer'>
                  View Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-gray-200' />
    </>
  );
}
