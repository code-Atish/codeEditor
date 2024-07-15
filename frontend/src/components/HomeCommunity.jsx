import React from 'react'

export default function HomeCommunity() {
  return (
    <div className='max-w-[1180px] px-4  m-auto'>
    <div className="flex flex-col items-center justify-center">
      <div className="relative bg-gray-900 text-white px-[24px] sm:px-[48px] md:px-[96px] py-[24px] rounded-lg flex flex-col md:flex-row items-center md:items-start ">
        <div className='hidden md:block absolute h-full w-[1px] bg-gray-600 top-0 left-16'></div>

        <div className="flex-1 mb-8 pt-5 pr-10 md:mb-0">
          <div className="relative text-sm text-gray-400 mb-2">
              <span className='pl-2'>:: Coding practice ::</span>
              <div className='absolute hidden md:flex gap-1 top-0 left-0  py-2 justify-center items-center bg-gray-900 translate-x-[-40px] -translate-y-[5px]'>
                    <div className='h-[17px] w-[17px] rounded-full border border-gray-400'></div>
                    <div className='h-[1px] w-3 bg-gray-400'></div>
              </div>    
          </div>
          <h2 className="text-2xl font-bold my-7">Explore and expand your skills.</h2>
          <p className="text-gray-400 mb-8">
            Every idea has a first line of code. Prep for jobs and
            sharpen your skills alongside a global community of
            developers. Access the content you need to develop new
            skills – and land the job you’ve dreamed of.
          </p>
          
          <button className="group text-white font-medium px-4 py-2 rounded border">
            Sign up and  practice <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="community.jpg"
            alt="Candidate Profile"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
