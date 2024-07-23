import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/web.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex justify-between items-center p-4">
      <img src={logo} alt="logo" className="w-[100px] md:w-[150px]" />
      <ul className="hidden md:flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer">Home</li>
        <li className="hover:font-bold cursor-pointer">About Us</li>
        <li className="hover:font-bold cursor-pointer">Contact Us</li>
      </ul>
      <button
        className="hidden md:block w-[150px] rounded-full"
        style={{ background: "rgb(253 60 58)", color: "white" }}
      >
        Connect
      </button>
      <div className="md:hidden flex items-center">
        <FaBars size={24} onClick={toggleSidebar} className="cursor-pointer" />
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
              <li className="hover:font-bold cursor-pointer">Home</li>
              <li className="hover:font-bold cursor-pointer">About Us</li>
              <li className="hover:font-bold cursor-pointer">Contact Us</li>
            </ul>
            <button
              className="mt-4 w-full rounded-full"
              style={{ background: "rgb(253 60 58)", color: "white" }}
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
