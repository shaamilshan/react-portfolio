import React from 'react';

const AboutMe = () => {
  return (
    <div id='about' className='my-20 py-10 px-4 md:px-16 flex flex-col lg:flex-row gap-8 justify-center items-center bg-[#a7afb753]'>
      {/* Text Section */}
      <div className='flex flex-col gap-4 text-left lg:w-1/2 justify-center'>
        <h3 className='text-xl font-semibold'>ABOUT ME</h3>
        <h2 className='text-2xl md:text-3xl font-bold'>Front-end Developer based in Calicut, Kerala 📍</h2>
        <p className='text-base md:text-lg'>Hey, my name is Shamil, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
        <p className='text-base md:text-lg'>My main stack currently is React.js in combination with Tailwind CSS.</p>
      </div>
    </div>
  );
}

export default AboutMe;
