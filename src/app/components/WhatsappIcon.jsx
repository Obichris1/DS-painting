import React from "react";

const TextMessageIcon = () => {
  return (
    <a
      href="sms:+1(647)-571-9868?body=Hello, I would like to make enquiries"
      className="fixed bottom-4 right-4 flex items-center bg-blue-500 rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h8M8 14h5m9-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="ml-2 text-white text-sm font-medium">
        Text Us
      </span>
    </a>
  );
};

export default TextMessageIcon;
