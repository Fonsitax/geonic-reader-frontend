import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const convertToBionic = (text) => {
  return text.split(" ").map((word, index) => {
    const splitIndex = Math.ceil(word.length / 2);
    const firstPart = word.slice(0, splitIndex);
    const secondPart = word.slice(splitIndex);
    return (
      <React.Fragment key={index}>
        <strong>{firstPart}</strong>
        {secondPart}{" "}
      </React.Fragment>
    );
  });
};

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-indigo-100 via-blue-50 to-indigo-200 min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row items-center w-full h-full">
        <div
          className="lg:w-1/2 flex flex-col justify-center px-12 space-y-6 pt-44"
          data-aos="fade-right"
        >
          <div className="relative group">
            <h1 className="text-2xl md:text-5xl lg:text-6xl tracking-tight relative pb-5">
              <span className="text-indigo-800 group-hover:text-indigo-300">
                {convertToBionic("Unlock the World,")} <br />
                {convertToBionic("One Word at a Time.")} <br />
              </span>
              {/* Stylish Underline Effect */}
              <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-blue-700 via-indigo-300 to-indigo-200 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h1>
          </div>
          <p className="text-lg font-medium text-indigo-900 lg:text-xl leading-relaxed">
            {convertToBionic(
              " 🗺️ Learn faster, memorize better. Unlock fascinating geography facts across the globe "
            )}
          </p>
          <p className="text-lg font-medium text-indigo-900 lg:text-xl leading-relaxed">
            {convertToBionic(
              " 🗺️ Dive into interactive cards with Bionic reading and more"
            )}
          </p>
          <p className="text-lg font-medium text-indigo-900 lg:text-xl leading-relaxed">
            {convertToBionic("🗺️ Free of charge and no account required ")}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/readings"
              className="inline-flex items-center py-3 px-8 text-sm md:text-base font-medium text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-400 transition-all"
            >
              Get started
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
                aria-hidden="true"
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
              className="cursor-pointer inline-flex items-center py-3 px-8 text-sm md:text-base font-medium text-indigo-800 border-2 border-indigo-800 hover:bg-indigo-800 hover:text-white hover:border-indigo-300 focus:ring-4 focus:ring-blue-400 transition-all transform hover:scale-105"
            >
              Learn more
            </ScrollLink>
          </div>
        </div>

        {/* Right Column: Image Content */}
        <div
          className="lg:w-1/2 flex justify-center items-center"
          data-aos="fade-left"
        >
          <img src="/HeroImageGeonicrework1601.png" alt="Hero image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
