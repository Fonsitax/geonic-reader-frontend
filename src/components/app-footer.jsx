import React from "react";
import { Link } from "react-router-dom";

const AppFooter = () => {
    return (
        <footer className="bg-blue-200 w-full py-6 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-center text-gray-700 text-sm">
                        &copy; 2024 Geonic Reader App
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;

