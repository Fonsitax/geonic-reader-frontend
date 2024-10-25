import React, { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    const indicators = document.querySelectorAll('[data-carousel-slide-to]');
    const items = document.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;
    let autoSlideInterval;

    const showSlide = (index) => {
      items.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('bg-indigo-800', i === index);
        indicator.classList.toggle('bg-white', i !== index);
      });
      currentIndex = index;
    };

    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % items.length;
      showSlide(nextIndex);
    };

    const prevSlide = () => {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(prevIndex);
    };

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 3000);
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    prevButton.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
    nextButton.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(i);
        startAutoSlide();
      });
    });

    startAutoSlide();

    return () => {
      stopAutoSlide();
      prevButton.removeEventListener('click', () => {});
      nextButton.removeEventListener('click', () => {});
      indicators.forEach((indicator) => {
        indicator.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="relative bg-indigo-800 min-h-screen flex items-center justify-center">
      {/* Outer Border Wrapper */}
      <div className="border-4 border-indigo-300 rounded-xl p-2 shadow-lg max-w-screen-lg w-full">
        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden rounded-lg">
          {/* Carousel Items */}
          <div className="relative h-[40vh] md:h-[60vh] lg:h-[75vh]">
            {/* Slide 1 */}
            <div className="absolute inset-0 duration-700 ease-in-out" data-carousel-item>
              <img src="https://i.imgur.com/S8sPSNn.png" className="w-full h-full object-cover" alt="Slide 1" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Discover the World</h2>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="absolute inset-0 duration-700 ease-in-out hidden" data-carousel-item>
              <img src="https://i.imgur.com/a3Cpkw4.png" className="w-full h-full object-cover" alt="Slide 2" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Learn Easily</h2>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="absolute inset-0 duration-700 ease-in-out hidden" data-carousel-item>
              <img src="https://i.imgur.com/ALjpIgl.png" className="w-full h-full object-cover" alt="Slide 3" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Enhance Your Skills</h2>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className="w-4 h-4 rounded-full bg-indigo-800" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-4 h-4 rounded-full bg-white" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-4 h-4 rounded-full bg-white" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>

          {/* Controls */}
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
              <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
              <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
