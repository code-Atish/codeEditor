import React from 'react';

const HomeHiring = () => {
  return (<>
  <div className='max-w-[1180px] mx-auto'>
    <div className="mx-auto text-center p-8 pt-20">
      <h1 className="text-2xl  md:text-5xl mb:1 md:mb-2">
        It's not a pipeline problem.
      </h1>
      <h2 className="text-2xl md:text-5xl text-green-600 mt-1 mb-5 md:mt-5 md:mb-5">
        It's a spotlight problem.
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Tech hiring needs a reset. From prepping for jobs and practicing coding to running a
        world-class technical interview, give developers the tools they need to showcase their
        skills, passion, and potential.
      </p>
      <div className="flex justify-center gap-14 md:gap-28 items-center text-sm md:text-lg font-semibold mt-8">
        <a href="#prep" className="text-gray-800 hover:underline">Prep</a>
       <a href="#screen" className="text-gray-800 hover:underline">Screen</a>
       <a href="#interview" className="text-gray-800 hover:underline">Interview</a>
      </div>
    </div>
    </div>
   </>
  );
};

export default HomeHiring;