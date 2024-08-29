import React, { useState } from "react";
import ReadingCard from "./reading-card.jsx";
import RatingBar from "./rating-bar.jsx";

function DrawerComponent({ reading }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div >
            {/* Button to show the drawer */}
            <button
                className=" hover:bg-indigo-100 text-gray-50 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
                type="button"
                onClick={toggleDrawer}
            >
                <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                          d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>

            </button>

            {/* Drawer component */}
            <div
                className={`fixed top-0 left-0 z-40 h-screen p-10 overflow-y-auto transition-transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } bg-white w-96 dark:bg-gray-800`}
                tabIndex="-1"
                aria-labelledby="drawer-left-label"
            >

                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-left-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <p className=" inline-flexflex items-center text-center mb-6 mt-14 text-lg text-gray-600 dark:text-gray-400">
                    Your Pick:
                    <a
                        href="#"
                        className="text-indigo-600 underline font-medium dark:text-indigo-500 hover:no-underline"
                    >
                    </a>
                </p>

                <div className="w-auto">
                    <ReadingCard
                        image={reading.image_url}
                        key={reading.id}
                        id={reading.id}                         // Pass the id to the ReadingCard
                        country={reading.country}
                        title={reading.title}
                        hideButtons={true}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-14">
                    <a
                        href="#"
                        className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
                    >
                        {/* arrow */}
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>


                <div className="flex justify-center items-center mb-10 mt-10"><RatingBar/></div>


            </div>
        </div>
    );
}

export default DrawerComponent;
