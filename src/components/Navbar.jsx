import React, { useState } from "react";
import { NAV_LINKS } from "../constants/navLinks";
import { X, Menu } from "lucide-react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-primary text-white py-5 px-8">
      <div className="container mx-auto flex justify-between items-center ">
        <img src={Logo} alt="Brand Logo" className="md:w-56  w-28 h-auto" />
        <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className=" hover:underline cursor-pointer">
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={` fixed top-0 right-0 w-full h-screen bg-white  text-black shadow-lg flex flex-col items-start p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className=" fixed top-7 right-7 self-end mb-4" onClick={() => setIsOpen(false)}>
          <X size={30} />
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className=" text-lg py-2 hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
