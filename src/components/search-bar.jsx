import React from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = React.useState('');
    const [showPopover, setShowPopover] = React.useState(false);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearch(searchValue);
    };

    const handlePopoverToggle = (show) => {
        setShowPopover(show);
    };

    return (
        <div className="relative">
            <form className="max-w-4xl mx-auto mb-6" onSubmit={handleFormSubmit}>
                <div className="relative">
                    <label htmlFor="search-input" className="sr-only">Search</label>
                    <input
                        value={searchValue}
                        onChange={handleInputChange}
                        type="search"
                        id="search-input"
                        className="block w-full p-5 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-indigo-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for countries..."
                        required
                        aria-describedby="search-tip"
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 flex items-center px-4 py-2 bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 text-white font-medium rounded-r-lg text-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handlePopoverToggle(true)}
                        onBlur={() => handlePopoverToggle(false)}
                    >
                        Search
                    </button>
                </div>
            </form>
            {showPopover && (
                <div id="search-tip" className="max-w-4xl mx-auto mt-2 p-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white dark:border-gray-700">
                    <p><strong>Search Tip:</strong> Type the name of a country, click Search, or press Enter to search.</p>
                </div>
            )}
            <div className="border-t border-gray-300 dark:border-gray-700 my-6 mx-auto w-full max-w-4xl">
                <figure className="max-w-screen-md mx-auto text-center">
                    <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/>
                    </svg>
                    <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                        <p>“Exploring geography opens the world to us, revealing the interconnectedness of our global community and the beauty of diverse landscapes.”</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Gough"/>
                        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                            <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Geography Enthusiast</cite>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default SearchBar;
