// src/InterviewContent.js
import React from 'react';

const HomeInterview = () => {
  return (
    <div className='max-w-[1180px] m-auto'>
        <div className="flex flex-col items-center pt-20 md:pt-0 pb-20 justify-center bg-white text-center">
        <div className='relative hidden md:block  h-48 w-full'>
            <div className="absolute w-1/3 h-20 left-[64px] top-0 border-l-[1px] border-b-[1px] rounded-bl-[40px] border-gray-300"></div>
            <div className="absolute w-1/3 h-24 left-[16%] bottom-[17px] border-r-[1px] border-t-[1px] rounded-tr-[40px] border-gray-300"></div>
        </div>
        <div className="relative flex flex-col items-center">
            <div className='absolute hidden md:block bottom-10 p-2 m-[8px] ml-[13px] left-1/2 -translate-x-full bg-white sm:ml-[11px] md:ml-[10px] lg:ml-[8px] xl:ml-[7px] 2xl:ml-[8px]'>
                <div className='h-[17px] w-[17px] rounded-full border border-gray-400'></div>
            </div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">
                :: Technical interviews ::
            </p>
        </div>
        <h1 className="text-3xl my-8 lg:text-5xl  text-gray-800">
            Interview like it’s <span className="text-green-500 bg-clip-text text-transparent  bg-gradient-to-r from-[#32C766] to-[#068932]">2024</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">    
            Ditch out of reach and out of touch interview questions about golf balls and 747s —
            and turn off your clunky screen share for good. Code, create, and collaborate with an
            IDE built to showcase real-world skills in a real-world environment.
        </p>
        <button className="mt-8 px-8 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">
            Learn more
        </button>
        </div>
        <div className='my-10 px-2'>
            <img src="interview-2.png" className="w-full max-w-screen-lg mx-auto" alt="Interview"  />
        </div>
    </div>
  );
};

export default HomeInterview
