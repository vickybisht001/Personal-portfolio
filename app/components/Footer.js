import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#003580] text-white py-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 sm:px-6">
        <p className="text-center text-sm">
          © {year} <span className="font-semibold">Jitendra Bisht</span>. All rights reserved.
        </p>

        <div className="flex space-x-4 text-white text-lg">
          <a
            href="https://github.com/vickybisht001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jitendra-bisht-85ba15239/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jitendrabisht412@gmail.com"
            aria-label="Email"
            className="hover:text-gray-300 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
