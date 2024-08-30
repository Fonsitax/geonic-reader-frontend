import React from 'react';

const FAQSection = () => {
  return (
    <div className="bg-gray-900 text-gray-100 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto mb-10 mt-10">
        <h2 className="text-4xl font-extrabold text-blue-300 mb-8 text-center lg:text-5xl">
          Questions & Answers
        </h2>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-10">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">1. Who is the app for?</h3>
          <p className="text-gray-300 text-lg">
            Our app is designed for anyone eager to learn and memorize geography more efficiently, including those with ADHD or dyslexia. It offers tailored features to enhance learning and retention for users with diverse needs.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-10">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">2. Is the app free?</h3>
          <p className="text-gray-300 text-lg">
            Yes! The app is completely free to use, and no account is required. You can save your flashcards and return to them anytime to continue your studies at your own pace.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">3. What is bionic reading?</h3>
          <p className="text-gray-300 text-lg">
            Bionic reading is a technique where key parts of the text are bolded to help improve reading speed and comprehension. This method highlights important information, making it easier to focus and absorb content quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

