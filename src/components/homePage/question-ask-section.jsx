import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-indigo-900 text-indigo-100 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto mb-14 mt-10">
        <h2 className="text-4xl font-extrabold text-indigo-300 mb-8 text-center lg:text-5xl relative">
          <span className="relative before:content-[''] before:block before:absolute before:left-0 before:w-full before:h-1 before:bg-indigo-300 before:transition-all before:duration-300 before:bottom-[-0.5rem] hover:before:scale-x-100 before:scale-x-0 before:origin-left">
            Questions & Answers
          </span>
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-indigo-700 rounded-lg">
              <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-indigo-300 border-b-0 border-indigo-700 rounded-t-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 dark:border-indigo-800 dark:text-indigo-400 hover:bg-indigo-800 hover:text-indigo-100 gap-3"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby={`accordion-collapse-heading-${index}`}
              >
                <div className="p-5 border border-t-0 border-indigo-700 dark:border-indigo-800 dark:bg-indigo-900">
                  <p className="text-indigo-200 text-lg">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'Who is the app for?',
    answer:
      'Our app is designed for anyone eager to learn and memorize geography more efficiently, including those with ADHD or dyslexia. It offers tailored features to enhance learning and retention for users with diverse needs.',
  },
  {
    question: 'Is the app free?',
    answer:
      'Yes! The app is completely free to use, and no account is required. You can save your flashcards and return to them anytime to continue your studies at your own pace.',
  },
  {
    question: 'What is bionic reading?',
    answer:
      'Bionic reading is a technique where key parts of the text are bolded to help improve reading speed and comprehension. This method highlights important information, making it easier to focus and absorb content quickly.',
  },
  {
    question: 'What is bionic reading?',
    answer:
      'Bionic reading is a technique where key parts of the text are bolded to help improve reading speed and comprehension. This method highlights important information, making it easier to focus and absorb content quickly.',
  },
  {
    question: 'What is bionic reading?',
    answer:
      'Bionic reading is a technique where key parts of the text are bolded to help improve reading speed and comprehension. This method highlights important information, making it easier to focus and absorb content quickly.',
  },
];

export default FAQSection;
