"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa"

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume_Kirubaraj_Manimathavan.pdf';
    link.click();
  };

  const handleGithubRedirect = () => {
    window.open('https://github.com/kirubarajm', '_blank');
  };

  const handleLinkedinRedirect = () => {
    window.open('https://www.linkedin.com/in/kirubarajm/', '_blank');
  };

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
            priority={true}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Kirubaraj</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            A {" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              Software Engineer{" "}
            </span>
            and {" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              Entrepreneur
            </span>
            . <br />
            I build AI Agents and Full Stack Applications <br /> 
            for Mobile and Web
          </p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button 
              onClick={handleDownload}
              className="flex items-center justify-center w-40 text-sm md:text-base text-neutral-100 dark:text-gray-600 font-semibold px-4 py-2 md:px-6 md:py-3 bg-gray-600 dark:bg-neutral-100 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaDownload className="mr-2" /> Resume
            </button>
            <button 
              onClick={handleGithubRedirect}
              className="flex items-center justify-center w-40 text-sm md:text-base text-neutral-100 dark:text-black font-semibold px-4 py-2 md:px-6 md:py-3 bg-black dark:bg-neutral-100 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-800">
              <FaGithub className="mr-2" /> Github
            </button>
            <button 
              onClick={handleLinkedinRedirect}
              className="flex items-center justify-center w-40 text-sm md:text-base text-neutral-100 dark:text-blue-600 font-semibold px-4 py-2 md:px-6 md:py-3 bg-blue-600 dark:bg-neutral-100 rounded shadow hover:bg-gray-200 dark:hover:bg-blue-700">
              <FaLinkedin className="mr-2" /> LinkedIn
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={40} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection