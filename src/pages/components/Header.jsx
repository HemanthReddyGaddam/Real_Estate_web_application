import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-blue-200 shadow-md">
      <div className="flex justify-between items-center mx-auto p-2">
        <Link to="/">
          <h1 className="font-bold text-md sm:text-xl flex flex-wrap">
            <span className="text-green-600">Real</span>
            <span className="text-blue-500">Estate</span>
          </h1>
        </Link>
        <form className="bg-blue-100 p-1 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus : outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-3">
          <Link to="/">
            <li className="hidden sm:inline text-blue-800 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-blue-800 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hidden sm:inline text-blue-800 hover:underline">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
//{*/What Does <form> Do?  It defines a section of the page containing input fields, like textboxes, checkboxes, radio buttons, and submit buttons.}
