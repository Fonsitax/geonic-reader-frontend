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
      autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
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

    // Start auto-slide on mount
    startAutoSlide();

    // Cleanup event listeners and auto-slide interval on component unmount
    return () => {
      stopAutoSlide();
      prevButton.removeEventListener('click', () => {});
      nextButton.removeEventListener('click', () => {});
      indicators.forEach((indicator, i) => {
        indicator.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div id="default-carousel" className="relative mx-auto max-w-screen-xl py-12 mb-10" data-carousel="slide">
      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Carousel Items */}
        <div className="relative h-64 md:h-80 lg:h-96">
          {/* Item 1 */}
          <div className="absolute inset-0 duration-700 ease-in-out" data-carousel-item>
            <img src="https://i.imgur.com/S8sPSNn.png" className="w-full h-full object-cover" alt="Slide 1" />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-40 p-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Discover the World</h2>
            </div>
          </div>
          {/* Item 2 */}
          <div className="absolute inset-0 duration-700 ease-in-out hidden" data-carousel-item>
            <img src="https://i.imgur.com/a3Cpkw4.png" className="w-full h-full object-cover" alt="Slide 2" />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-40 p-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Learn Easily</h2>
            </div>
          </div>
          {/* Item 3 */}
          <div className="absolute inset-0 duration-700 ease-in-out hidden" data-carousel-item>
            <img src="https://i.imgur.com/ALjpIgl.png" className="w-full h-full object-cover" alt="Slide 3" />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-40 p-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Enhance Your Skills</h2>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full bg-indigo-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>

        {/* Slider Controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-gray-800 dark:text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-gray-800 dark:text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
