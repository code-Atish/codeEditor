// import React from 'react';

// const FeatureSection = ({ imageSrc, title, description }) => {
//   return (
//     <section className="flex flex-col md:flex-row items-center my-10 px-5 md:px-20">
//       <img src={imageSrc} alt={title} className="w-full md:w-1/2 object-cover" />
//       <div className="md:ml-10 mt-5 md:mt-0 text-center md:text-left">
//         <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
//         <p className="text-gray-600 mt-2">{description}</p>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageSlider from './Slider';

const features = [
    {
      imageSrc: 'binarytree-1.png',
      title: 'Leave the binary tree behind.',
      description: 'Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job.',
    },
    {
      imageSrc: 'code-1.png',
      title: 'Focus on what really matters: the code.',
      description: 'Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea.',
    },
    {
      imageSrc: 'contenders.png',
      title: 'Identify top contenders',
      description: 'Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere.',
    },
  ];

const HomeScreen = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value to control when the animation triggers
    triggerOnce: true, // Trigger the animation only once
  });
  return (
    <div className="bg-[#f7fcff]">
        <div className='max-w-[1180px] m-auto'>
            <div className="relative flex flex-col px-[24px] sm:px-[48px] md:px-[96px] pt-20 items-center justify-center">
              <div className='absolute hidden md:block h-full w-[1px] bg-gray-300 top-0 left-16'></div>
              <div className='text-start w-full'>
                <p className='text-gray-500 mb-5'>:: Coding tests ::</p>
                <h1 className="relative text-2xl lg:text-5xl w-max  text-green-500 bg-clip-text text-transparent  bg-gradient-to-r from-[#068932] to-[#32C766]">
                <div className='absolute hidden md:flex gap-1 top-0 left-0  py-2 justify-center items-center bg-[#f7fcff] translate-x-[-40px] translate-y-2'>
                          <div className='h-[17px] w-[17px] rounded-full border border-gray-400'></div>
                          <div className='h-[2px] w-3 bg-gray-300'></div>
                </div>
                  Join the movement.
                </h1>
                <h1 className="text-2xl lg:text-5xl w-max mt-1 mb-8 lg:mt-5 lg:mb-10">
                    Screen on skills.
                </h1>
              </div>
              <ImageSlider/>
            
            {features.map((item,index)=> {
              const { ref, inView } = useInView({
                threshold: 0.4, // Adjust this value to control when the animation triggers
                triggerOnce: true, // Trigger the animation only once
              });
                return (
                <div key={index} className="mb-20 py-[24px] rounded-lg flex flex-col lg:flex-row items-center lg:items-start ">
                    <div className="flex-1 flex-col mb-8 pr-10 lg:my-auto">
                        <h2 className="relative text-3xl font-semibold my-7 tracking-wide lg:text-4xl lg:mb-7">
                          {item.title}
                          <div className='absolute hidden md:flex gap-1 top-0 left-0  py-2 justify-center items-center bg-[#f7fcff] translate-x-[-40px] translate-y-[5px]'>
                              <div className='h-[17px] w-[17px] rounded-full border border-gray-400'></div>
                              <div className='h-[2px] w-3 bg-gray-300'></div>
                          </div>
                          </h2>
                        <p className="text-lg text-gray-600">
                          {item.description}
                        </p>
                        
                        <button className="group inline-block font-semibold py-2 ">
                            Start free Trial <span className="inline-block h-full my-auto translate-y-0.5 transition-transform duration-300 group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></span>
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 60 }}
                      transition={{ duration: 0.3 }}
                      >
                    <img
                        src={item.imageSrc}
                        alt="Candidate Profile"
                        className="rounded-lg shadow-md max-w-full h-auto"
                    />
                    </motion.div>
                    </div>
                </div>)})}
            </div>
            
        </div>
    </div>
  );
};

export default HomeScreen;
