import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 mb-52 mt-48">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-indigo-900 md:text-5xl lg:text-6xl relative group">
              <span className="relative z-10">Explore the World with Geonic Reader°</span>
              <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-indigo-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h1>
            <p className="mb-10 text-lg font-normal text-indigo-800 lg:text-xl sm:px-16 lg:px-0">
              Unlock fascinating geography facts from every corner of the globe. Dive into interactive cards and discover new insights with each click. Enhance your learning with our Bionic Reading method, designed to help you grasp and remember information faster and more efficiently.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link
                to="/get-started"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <Link
                to="/learn-more"
                className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-indigo-800 rounded-lg border border-indigo-800 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-indigo-400"
              >
                Learn more
              </Link>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <a
              href="#"
              className="relative group"
              aria-label="View Geonic Reader"
            >
              <img
                src="https://i.imgur.com/RIvc7aF.png"
                alt="Geonic Reader"
                className="w-full rounded-lg transition-transform duration-300 group-hover:underline"
              />
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-indigo-800 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
