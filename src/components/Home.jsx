import React from "react";
import pic from "../../public/photo.jpg";
import {
  FaSquareInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { Typed } from 'react-typed';

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 order-2 md:order-1 mt-12 md:mt-0 space-y-6 md:space-y-8">
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-justify">
              I am a skilled web developer and competitive programmer with strong proficiency in Data Structures and Algorithms (DSA). My expertise includes building robust web applications and solving complex programming challenges. Passionate about coding and continuously improving my skills, I thrive in fast-paced, problem-solving environments.
            </p>
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5 justify-center">
                  <li>
                    <a href="https://www.instagram.com/nilogrib.13/" target="_blank" rel="noopener noreferrer">
                      <FaSquareInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nilogrib/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/nilogrib" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Nilogrib" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5 justify-center">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center mb-12 md:mb-0">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[500px] w-[300px] h-[300px]"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
