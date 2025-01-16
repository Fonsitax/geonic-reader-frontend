import React from "react";

const Alert = ({ message, onClose }) => {
  return (
    <div
      className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-[90%] bg-blue-50 border border-blue-300 text-blue-800 shadow-md rounded-lg p-4 flex items-start gap-3"
      role="alert"
    >
      {/* Icon */}
      <svg
        className="flex-shrink-0 w-6 h-6 mt-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 1 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>

      {/* Message */}
      <div className="flex-1 text-sm font-medium">{message}</div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1.5 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Close"
      >
        <svg
          className="w-5 h-5"
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
      </button>
    </div>
  );
};

export default Alert;
