import React from 'react';
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-[#2D2E32] flex justify-between items-center p-4 md:p-10'>
      <div>
        <h2 className='text-white font-bold text-sm md:text-base'>Copyright © 2024. All rights reserved</h2>
      </div>
      <div className='flex justify-center md:justify-start items-center gap-4'>
            <a href="https://github.com/shaamilshan" target='_blank' rel='noopener noreferrer'>
              <FiGithub className='w-[32px] h-[32px] text-white hover:text-[#0080FF] transition-all duration-300'/>
            </a>
            <a href="https://www.linkedin.com/in/shaamilshan/" target='_blank' rel='noopener noreferrer'>
              <TbBrandLinkedin className='w-[32px] h-[32px] text-white hover:text-[#0080FF] transition-all duration-300'/>
            </a>
          </div>
    </div>
  );
}

export default Footer;
