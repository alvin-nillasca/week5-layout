import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-[264px] min-h-[calc(100vh-88px)] bg-[#FAFAF9] border-r border-gray-200 pt-[32px] pr-[16px] pb-[24px] pl-[16px] flex flex-col justify-between shrink-0">
      <nav className="flex flex-col gap-2">
        {/* 1. Home Icon + Home */}
        <Link
          href="/"
          className="flex items-center gap-3 text-slate-700 hover:bg-gray-200/60 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="w-5 h-5 text-slate-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21.00v-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6"
            />
          </svg>
          <span>Home</span>
        </Link>

        {/* 2. Info Icon + About */}
        <Link
          href="/about"
          className="flex items-center gap-3 text-slate-700 hover:bg-gray-200/60 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="w-5 h-5 text-slate-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <span>About</span>
        </Link>

        {/* 3. Mail Icon + Contact */}
        <Link
          href="/contact"
          className="flex items-center gap-3 text-slate-700 hover:bg-gray-200/60 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="w-5 h-5 text-slate-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <span>Contact</span>
        </Link>
      </nav>
    </aside>
  );
}