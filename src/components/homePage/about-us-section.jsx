import React from 'react';

const About = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-lg text-center py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto p-6 md:p-8 lg:p-10 border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-semibold text-indigo-800 mb-8">
          About Geonic Reader
        </h1>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
          Welcome to Geonic Reader, an innovative app designed to assist individuals with reading difficulties, ADHD, 
          or anyone looking to accelerate learning and improve information retention. Specializing in geography topics, 
          Geonic Reader turns learning into an engaging, personalized experience through a unique flashcard system.
        </p>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-indigo-800">
          A standout feature of Geonic Reader is our bionic reading setting. While still emerging and not extensively 
          researched, this method has significantly improved reading speed and comprehension for many users. By highlighting 
          key parts of words, the bionic method guides your eyes, facilitating quicker and more focused reading.
        </p>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-indigo-800">
          Geonic Reader also provides customizable options such as color-changing backgrounds and fonts, 
          allowing you to tailor your reading environment to your preferences. Save your favorite cards and revisit them 
          anytime—no account needed, and the app is completely free.
        </p>
      </div>
    </div>
  );
};

export default About;



