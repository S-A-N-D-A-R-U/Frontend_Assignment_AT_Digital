import React from "react";
import logoImage from "../assets/Logo.svg"

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-10 px-6">
      <div className="flex flex-col gap-12 lg:g-0 lg:flex-row justify-between w-full lg:max-w-7xl mx-auto">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            {/* Placeholder for logo */}
            <span className="text-2xl font-bold">
              <img src={logoImage} />
            </span>
          </div>
          <p className="text-sm">
            Your goal is our target. Not anything in between. We use <br />{" "}
            online marketing platforms and tools to achieve single <br />
            objective - your business results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40">
          {/* Our Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Technologies</h3>
            <ul className="space-y-2">
              <li className="hover:underline hover:text-blue-300 cursor-pointer">
                ReactJS
              </li>
              <li className="hover:underline hover:text-blue-300 cursor-pointer">
                Gatsby
              </li>
              <li className="hover:underline hover:text-blue-300 cursor-pointer">
                NextJS
              </li>
              <li className="hover:underline hover:text-blue-300 cursor-pointer">
                NodeJS
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:underline hover:text-blue-300 cursor-pointer">
                Social Media Marketing
              </li>
              <li className="hover:underline hover:text-blue-300 cursor-pointer">
                <span>
                  Web & Mobile App <br />
                  Development
                </span>
              </li>
              <li className="hover:underline hover:text-blue-300 cursor-pointer">
                Data & Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t  border-white mt-8 pt-4 w-full lg:w-1/2 mx-auto"></div>
      <div className="text-center">
        <a href="#" className="hover:underline mx-2">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:underline mx-2">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}