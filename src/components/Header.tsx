import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#e4e4e4] text-slate-900 px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Brand Logo & Name */}
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-800">
        {/* Stack Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-slate-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75 12 12.75l5.571-3M6.429 9.75 12 6.75l5.571 3M6.429 9.75 3.75 11.25l8.25 4.5 8.25-4.5-2.679-1.5M12 18.75l-8.25-4.5 8.25 4.5 8.25-4.5-8.25 4.5Z"
          />
        </svg>
        <span>LearnMeow</span>
      </Link>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">
        <button className="bg-[#3E534080] hover:opacity-90 text-white text-sm font-medium px-4 py-2 rounded-md transition-all">
          Register
        </button>
        <button className="bg-[#3E5340] hover:bg-[#324334] text-white text-sm font-medium px-4 py-2 rounded-md transition-all">
          Log in
        </button>
      </div>
    </header>
  );
}