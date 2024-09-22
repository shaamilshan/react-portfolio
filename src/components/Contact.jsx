import React from 'react';
import { GrMapLocation } from "react-icons/gr";
import { IoMailUnreadOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='contact' className='mx-4 md:mx-16 flex flex-col mb-16'>
      <h3 className='text-xl font-semibold'>CONTACT</h3>
      <h1 className='font-bold text-2xl my-6'>Don't be shy! Hit me up! 👇</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        
        {/* Location Section */}
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-full border border-black flex items-center justify-center'>
            <GrMapLocation className='text-xl' />
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold'>Location</h4>
            <p>Calicut, Kerala</p>
          </div>
        </div>
        
        {/* Email Section */}
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-full border border-black flex items-center justify-center'>
            <IoMailUnreadOutline className='text-xl' />
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold'>Mail</h4>
            <p>
              <a href="mailto:shmlvk123@gmail.com" className='text-black-500 hover:text-blue-400'>
                shmlvk123@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
