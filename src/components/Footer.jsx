import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nilogrib.13/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/nilogrib" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={24} />
              </a>
              <a href="https://github.com/Nilogrib" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nilogrib/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Nilogrib. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
