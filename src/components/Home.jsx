import React from 'react'
import pics from "../assets/shs.png";
import { FaLinkedin, FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 mb-16' name="Home">
        <div className='flex flex-col-reverse md:flex-row items-center'>
          {/* Left Side - Introduction Text */}
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-4'>
            <span className='text-xl text-gray-700 '>Welcome to my portfolio</span>
            <div className='text-lg md:text-3xl font-semibold text-gray-800 flex items-center'>
              <h1 className='mr-2'>Hello, I'm a </h1>
              <ReactTyped
                strings={["Software Developer", "Python Programmer", "Coder"]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
                className='font-bold text-green-500'
              />
            </div>
            <br />
            <p className='text-m md:text-md text-justify text-gray-600'>
              I'm a passionate web developer with expertise in front-end and back-end technologies. I focus on delivering clean, responsive, and user-friendly solutions using technologies like Django, React, HTML, CSS, and JavaScript.
            </p>
            <br />

            {/* Social Media Icons */}
            <div className='space-y-2'>
              <h1 className='font-bold text-gray-700'>Connect with me:</h1>
              <ul className='flex space-x-5'>
                <li>
                  <a href="https://linkedin.com/in/syed-hifzain" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-2xl hover:text-blue-900 cursor-pointer transition duration-300' />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/syedhifzain.bukhari" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className='text-2xl cursor-pointer hover:text-blue-500 transition duration-300' />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hifzain" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-2xl cursor-pointer hover:text-black transition duration-300' />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/syed_hifzain" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='text-2xl hover:text-pink-500 cursor-pointer transition duration-300' />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className='md:w-1/2 mt-10 md:mt-0'>
            <img src={pics} className="w-62 h-62 md:h-[400px] md:w-[400px] rounded-full mx-auto" alt="Hifzain" />
          </div>
        </div>
      </div>
      <hr className='border-gray-200' />
    </>
  )
}
