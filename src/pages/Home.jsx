import React from 'react';
import HeroSection from "../components/homePage/hero-section";
import FAQSection from '../components/homePage/question-ask-section';
import MyConverter from '../components/my-converter';


const Home = () => {
    return (
        <div>
            <div>
                <HeroSection />
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