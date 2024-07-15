import React from 'react';
const HomeLinks = () => {
  return (
    <div className="max-w-[1180px] mb-20 m-auto">
      <div className="mt-24 flex flex-col lg:flex-row items-center justify-between bg-white p-8">
        <div className="flex-1 w-full py-6 lg:py-24 lg:pr-12 rounded-lg ">
          <h2 className="text-2xl lg:text-4xl font-medium text-gray-900">
            Practice coding challenges &
            <span className="green_gradient">prep for interviews</span>
          </h2>
          <p className="text-lg text-gray-700 mt-6 lg:mt-8">
            Start practicing your skills now and land the job <br/> of your dreams.
          </p>
          <button className="mt-8 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Join the community
          </button>
        </div>
        <div className="flex-1 w-full py-6 lg:py-24 lg:pl-12 lg:bg-green-50 rounded-lg ">
          <h2 className="text-2xl lg:text-4xl font-medium text-gray-900">
            Get started <span className="green_gradient">hiring with HackerRank</span>
          </h2>
          <p className="text-lg text-gray-700 mt-6 lg:mt-8">
            More than 3,000 tech teams, representing all industries and from
            countries around the world, trust HackerRank.
          </p>
          <button className="mt-8 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLinks;
