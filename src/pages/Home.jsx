import React from 'react';
import HeroSection from "../components/homePage/hero-section";
import FAQSection from '../components/homePage/question-ask-section';
import Carousel from '../components/homePage/carousel';


const Home = () => {


    return (
        <div>

            
                <div>
                    <HeroSection />
                </div>    
                <div>
                    <Carousel />
                </div>
       
                <div>
                    <FAQSection />
                </div>
                
        </div>
    );

};

export default Home;
