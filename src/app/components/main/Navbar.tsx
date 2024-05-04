import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">E-Commerce</div>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
