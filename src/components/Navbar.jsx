import React, { useState } from "react";
import pic from "../assets/shs.png";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll"; // Corrected the import to use Link with uppercase 'L'

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Projects" },
  ];

  return (
    <>
      <div className="px-10 py-4 bg-white shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
          <h1 className="text-xl font-bold">
            Hifzain <span className="text-blue-500">Bukhari</span>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map(({ id, text }) => (
            <li className="text-xl hover:text-blue-500 cursor-pointer" key={id}>
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer"
        >
          {menu ? <IoMdClose size={24} /> : <HiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="md:hidden bg-white h-screen w-full">
          <ul className="flex flex-col items-center justify-center font-medium space-y-4 pt-20">
            {navItems.map(({ id, text }) => (
              <a key={id} href={`#${text}`} onClick={() => setMenu(false)}>
                <li className="text-xl hover:text-blue-500 cursor-pointer">
                <Link
                onClick={() => setMenu(!menu)}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
