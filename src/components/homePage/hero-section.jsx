import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import FAQSection from './question-ask-section';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-56">
        <div
          className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:space-x-8"
          data-aos="fade-up"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-right">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-indigo-900 md:text-5xl lg:text-6xl relative group">
              <span className="relative z-10">Learn faster with Geonic Reader°</span>
              <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-indigo-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h1>
            <p className="mb-10 text-lg font-normal text-indigo-800 lg:text-xl lg:px-4">
              <strong>Un</strong>lock <strong>fas</strong>cinating <strong>geo</strong>graphy <strong>fac</strong>ts from <strong>ev</strong>ery <strong>cor</strong>ner of the <strong>glo</strong>be. <strong>Di</strong>ve into <strong>in</strong>teractive <strong>car</strong>ds and <strong>dis</strong>cover <strong>new</strong> insights with <strong>ea</strong>ch <strong>cli</strong>ck. <strong>En</strong>hance your <strong>lea</strong>rning with our <strong>Bio</strong>nic <strong>Rea</strong>ding <strong>met</strong>hod, <strong>des</strong>igned to <strong>hel</strong>p you <strong>gra</strong>sp and <strong>rem</strong>ember <strong>inf</strong>ormation <strong>fas</strong>ter and <strong>mor</strong>e <strong>eff</strong>iciently.
            </p>
            <div
              className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-center lg:px-4"
              data-aos="fade-up"
            >
              <Link
                to="/readings"
                className="inline-flex justify-center items-center py-3 px-12 text-base font-medium text-center text-white rounded-lg bg-indigo-800 hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
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
              <ScrollLink
                to="FAQ"
                smooth={true}
                duration={200}
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-indigo-800 rounded-lg border border-indigo-800 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-indigo-400"
              >
                Learn more
              </ScrollLink>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="lg:w-1/2 flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            <img
              src="https://i.imgur.com/qflJTj5.png"
              alt="Geonic Reader"
              className="rounded-full w-full max-w-xs lg:max-w-lg transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
