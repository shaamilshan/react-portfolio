import React from 'react';
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin, TbBrandBootstrap } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import meImg from '../assets/meImg.jpg';

const Hero = () => {
  return (
    <div id='home' className='min-h-screen mx-4 md:mx-16 flex flex-col justify-center pt-20'> {/* Adjusted padding */}
      <div className='flex flex-col md:flex-row justify-center items-center'>
        
        {/* Text Section */}
        <div className='w-full md:w-1/2 flex flex-col gap-7 text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl font-bold'>Front-End React Developer 👋👨🏻‍💻</h2>
          <p className='text-base md:text-lg'>Hi, I'm Shamil VK. A passionate Web Developer based in Calicut, Kerala.</p>
          
          {/* Social Links */}
          <div className='flex justify-center md:justify-start items-center gap-4'>
            <a href="https://github.com/shaamilshan" target='_blank' rel='noopener noreferrer'>
              <FiGithub className='w-[32px] h-[32px] hover:text-[#0080FF] transition-all duration-300'/>
            </a>
            <a href="https://www.linkedin.com/in/shaamilshan/" target='_blank' rel='noopener noreferrer'>
              <TbBrandLinkedin className='w-[32px] h-[32px] hover:text-[#0080FF] transition-all duration-300'/>
            </a>
          </div>
          
          {/* Tech Stack Section */}
          <div className='mt-7'>
            <h4 className='text-2xl font-semibold mb-4'>Tech Stack</h4>
            <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
              {/* Icons */}
              <FaHtml5 className='w-[40px] h-[40px] text-red-600 hover:text-[#0080FF] transition-all duration-300' />
              <FaCss3Alt className='w-[40px] h-[40px] text-blue-600 hover:text-[#0080FF] transition-all duration-300' />
              <FaJsSquare className='w-[40px] h-[40px] text-yellow-500 hover:text-[#0080FF] transition-all duration-300' />
              <FaReact className='w-[40px] h-[40px] text-blue-500 hover:text-[#0080FF] transition-all duration-300' />
              <SiTailwindcss className='w-[40px] h-[40px] text-blue-400 hover:text-[#0080FF] transition-all duration-300' />
              <TbBrandBootstrap className='w-[40px] h-[40px] text-purple-600 hover:text-[#0080FF] transition-all duration-300' />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 mt-8 md:mt-0 flex justify-center'>
          <img src={meImg} alt="my image" className='rounded-xl object-cover max-w-full h-auto md:max-w-[80%]' />
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
