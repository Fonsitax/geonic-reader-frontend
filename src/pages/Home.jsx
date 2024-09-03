import React from 'react';
import HeroSection from "../components/homePage/hero-section";
import FAQSection from '../components/homePage/question-ask-section';
import Carousel from '../components/homePage/carousel';
import MyConverter from '../components/my-converter';


const Home = () => {
    return (
        <div>
            <div className="mt-32">
                <HeroSection />
            </div>

            {/* Diagonal Separator */}
            <div className="relative -my-8">
                <div className="relative h-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent transform skew-y-6 -translate-y-4"></div>
                </div>
            </div>

            <div>
                <Carousel />
            </div>
            <div>
                <FAQSection />
            </div>
            <div>
                <MyConverter />
            </div>
        </div>
    );
};

export default Home;