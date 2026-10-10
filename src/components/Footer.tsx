import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[65px] bg-[#e4e4e4] border-t border-gray-200 py-[24px] px-[32px] flex items-center justify-center text-xs text-gray-500">
      <div className="flex items-center gap-1.5">
        {/* Copyright Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75a2.25 2.25 0 0 0-3.5 0v4.5a2.25 2.25 0 0 0 3.5 0"
          />
        </svg>
        <span>2026 LearnMeow. All rights reserved.</span>
      </div>
    </footer>
  );
}