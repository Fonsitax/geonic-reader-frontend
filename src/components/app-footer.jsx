import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; 


const AppFooter = () => {
    return (
        <footer className="bg-blue-200 w-full py-6 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-center text-gray-700 text-sm">
                        &copy; 2024 Geonic Reader App
                    </p>
                    <div className="flex space-x-4">
                        {/* Placeholder links */}
                        <Link to="#" className="text-blue-500 hover:underline">Home</Link>
                        <Link to="#" className="text-blue-500 hover:underline">About</Link>
                        <Link to="#" className="text-blue-500 hover:underline">Contact</Link>
                    </div>
                    <div className="flex space-x-4">
                        {/* Social media placeholder links */}
                        <a href="#" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;
