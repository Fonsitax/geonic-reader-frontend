import React from 'react';

const HeroSection = () => {
  return (
    <section className='mb-44'>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo-900 md:text-5xl lg:text-6xl">
        Explore the World with Geonic Reader
        </h1>
        <p className="mb-8 text-lg font-normal text-indigo-800 lg:text-xl sm:px-16 lg:px-48">
        <p><strong>Unlo</strong>ck fascinating <strong>geo</strong>graphy facts from every <strong>cor</strong>ner of the globe. <strong>Di</strong>ve into interactive cards and <strong>disc</strong>over new <strong>ins</strong>ights with each click. <strong>Enh</strong>ance your learning with our <strong>Bion</strong>ic Reading method, <strong>desig</strong>ned to help you <strong>gras</strong>p and <strong>reme</strong>mber information <strong>faste</strong>r and more <strong>effic</strong>iently.</p>
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
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
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-indigo-700 rounded-lg border border-indigo-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
