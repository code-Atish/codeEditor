import React from 'react';
import LogoStrip from './LogoStrip';

const HomeAbout = () => {
  return (<>
    <div className="max-w-[1180px] mb-20 m-auto">
      <div className="flex flex-col  gap-10 lg:gap-20 lg:flex-row items-center justify-between bg-white p-8">
        <div className="">
          <h1 className="text-2xl lg:text-4xl font-medium text-gray-900">
            Every company is a tech company.
          </h1>
          <h2 className="text-2xl lg:text-4xl font-medium green_gradient text-green-500 mt-2 mb-8 lg:mb-10">
            We’re here to help ‘em all.
          </h2>
          <p className=" text-lg text-gray-600 mt-4">
            More than 3,000 tech teams, representing all industries and from
            countries around the world, trust HackerRank to connect with developers
            and add cutting-edge skills to their teams.
          </p>
          <p className=" text-lg text-gray-600 mt-2">
            That includes 25% of the Fortune 100 — and that moonshot startup that
            just came out of stealth.
          </p>
        </div>
        <div className="mt-8 md:mt-0 bg-gray-50 p-8  w-full lg:max-w-sm">
          <div className="text-center">
            <img src="/path/to/vmware-logo.png" alt="VMware Logo" className="mx-auto mb-4"/>
            <p className="text-lg text-gray-700">
              “HackerRank has actually allowed us to look for diamonds in the rough
              that our old process didn’t give us the time or resources to look for.”
            </p>
            <div className="flex justify-center mt-4">
              <span className="h-2 w-2 bg-green-500 rounded-full mx-1"></span>
              <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
              <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
              <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
              <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LogoStrip/>
    </>
  );
};

export default HomeAbout;
