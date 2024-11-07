import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Utility function to convert text to bionic reading format
  const convertToBionic = (text) => {
    return text.split(' ').map((word, index) => {
      const splitIndex = Math.ceil(word.length / 2); // Adjust bold proportion
      const firstPart = word.slice(0, splitIndex);
      const secondPart = word.slice(splitIndex);
      return (
        <React.Fragment key={index}>
          <strong>{firstPart}</strong>
          {secondPart}{' '}
        </React.Fragment>
      );
    });
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="bg-indigo-900 text-indigo-100 min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pb-10"
    >
      {/* Section Header */}
      <h2 className="text-4xl font-extrabold text-indigo-100 mt-10 text-center lg:text-5xl">
        <span className="relative before:content-[''] before:block before:absolute before:left-0 before:w-full before:h-1 before:bg-indigo-100 before:transition-all before:duration-300 before:bottom-[-0.5rem] hover:before:scale-x-100 before:scale-x-0 before:origin-left">
          {convertToBionic('About Geonic Reader°')}
        </span>
      </h2>

      {/* FAQ Accordion */}
      <div className="w-full max-w-4xl space-y-6 mt-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border ${
              openIndex === index ? 'border-indigo-500' : 'border-indigo-700'
            } rounded-lg shadow-md transition-all duration-300`}
          >
            {/* Question */}
            <h2 id={`accordion-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-semibold ${
                  openIndex === index ? 'bg-indigo-800' : 'hover:bg-indigo-800'
                } rounded-lg text-left text-indigo-100 focus:ring-4 focus:ring-indigo-500 transition-all`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-body-${index}`}
              >
                <span>{convertToBionic(item.question)}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 12"
                  aria-hidden="true"
                >
                  <path
                    d="M1 11L10 2l9 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h2>

            {/* Answer */}
            <div
              id={`accordion-body-${index}`}
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
              aria-labelledby={`accordion-heading-${index}`}
            >
              <div className="p-5 text-indigo-200 bg-indigo-800 rounded-b-lg ">
                <p className="text-base leading-relaxed">{convertToBionic(item.answer)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'Why geography?',
    answer:
      'Geography is more than just names and locations; it’s about understanding the world around us. Memorizing details like dates, names, and places can be challenging, but our bionic reading mode makes learning more effective and engaging. It’s designed to help you retain information and make geographical exploration more enjoyable and impactful.',
  },
  {
    question: 'Who is the platform for?',
    answer:
      'Our app is designed for anyone eager to learn and memorize geography more efficiently, including those with ADHD or dyslexia. It offers tailored features to enhance learning and retention for users with diverse needs.',
  },
  {
    question: 'Is the platform free?',
    answer:
      'Yes! The app is completely free to use, and no account is required. You can save your flashcards and return to them anytime to continue your studies at your own pace.',
  },
  {
    question: 'How does it work?',
    answer:
      'Dive in and start exploring! Browse or search for fascinating cards by country in the "Cards" section. Save your favorite discoveries to your personal collection and delve deeper into topics that spark your curiosity. It’s all designed to make your learning adventure as enjoyable and tailored as possible!',
  },
  {
    question: 'What is cool about Geonic Reader°?',
    answer:
      'Discover a world of captivating geographical facts and insights right at your fingertips! Our app offers a treasure trove of free content, along with a cutting-edge bionic text converter for your own texts. Customize your reading experience with vibrant text colors, adjustable sizes, and our unique bionic reading mode for a truly personalized journey.',
  },
  {
    question: 'What is bionic reading?',
    answer:
      'Bionic reading is a technique where key parts of the text are bolded to help improve reading speed and comprehension. This method highlights important information, making it easier to focus and absorb content quickly.',
  },
  {
    question: 'What if I can’t find information about the country I’m interested in?',
    answer:
      'We want to help you uncover every corner of the globe! If you’re missing information on a specific country or topic, let us know. Drop us a message at y.muansawad@gmail.com with your suggestions, and we’ll do our best to add it for you. Your feedback helps us grow and improve!',
  },
];

export default FAQSection;
