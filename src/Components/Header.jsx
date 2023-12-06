import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* LOGO */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl text-white flex flex-wrap">
            <span className="text-slate-200">Mini</span>
            <span className="text-slate-400">Estate</span>
          </h1>
        </Link>
        {/* FORM */}
        <form className="bg-slate-100 p-[6px] rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search Property"
            className="bg-transparent focus:outline-none mx-auto w-24 sm:w-64"
          />
          <FaSearch className="text-slate-400" />
        </form>

        {/* MENU */}
        <ul className="flex gap-4 text-white">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About Us</li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
