import React from 'react';
import HeroSection from "../components/homePage/hero-section";
import FAQSection from '../components/homePage/question-ask-section';
import About from "../components/homePage/about-us-section";


const Home = () => {


    return (
        <div>

            
                <div>
                    <HeroSection />
                </div>    
            
               
                <div>
                    <FAQSection />
                </div>
        </div>
    );

};

export default Home;
