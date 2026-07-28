import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logobg.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="sticky top-4 z-40 px-6 rounded-full shadow-md"
      style={{ background: "#3b3b3b" }}
    >
      <div className="relative flex justify-between items-center py-2">
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Idea Blog logo"
            className="w-12 md:w-14 rounded-lg"
          />
        </Link>
        <ul className="hidden md:flex gap-8 md:gap-12 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition-colors ${
                    isActive
                      ? "border-red-500 text-white"
                      : "border-transparent text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden md:block w-[130px] rounded-full py-2 text-center text-sm font-medium shadow-sm transition-transform hover:scale-105"
          style={{ background: "rgb(253 60 58)", color: "white" }}
        >
          Connect
        </Link>
        <div className="md:hidden flex items-center">
          <FaBars
            size={22}
            onClick={toggleSidebar}
            className="cursor-pointer text-gray-200"
          />
        </div>

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-4">
              <FaTimes
                size={24}
                onClick={toggleSidebar}
                className="cursor-pointer mb-4"
              />
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={toggleSidebar}
                      className="text-gray-800 hover:font-bold cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                onClick={toggleSidebar}
                className="mt-4 block w-full rounded-full py-2 text-center"
                style={{ background: "rgb(253 60 58)", color: "white" }}
              >
                Connect
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
