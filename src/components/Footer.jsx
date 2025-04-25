import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <hr className='border-gray-200' />
      <footer className='py-12 bg-gray-100'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 text-2xl mb-6">
            <a href="https://www.facebook.com/syedhifzain.bukhari" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-gray-600 hover:text-blue-600 cursor-pointer transition duration-300" />
            </a>
            <a href="https://www.facebook.com/syedhifzain.bukhari" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-gray-600 hover:text-sky-500 cursor-pointer transition duration-300" />
            </a>
            <a href="https://www.instagram.com/syed_hifzain" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/syed-hifzain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-gray-600 hover:text-blue-700 cursor-pointer transition duration-300" />
            </a>
          </div>

          {/* Contact Info / Tagline */}
          <div className="text-center text-sm text-gray-600 mb-4">
            <p>Designed & built by Hifzain — Web Developer & Freelancer</p>
          </div>

          {/* Copyright */}
          <div className='text-center text-xs text-gray-500'>
            <p>&copy; {new Date().getFullYear()} Hifzain. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </>
  )
}
