import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import banner from "../assets/images/blogBanner.png";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="justify-center flex mt-8 flex-col px-[70px] md:px-[150px]">
      <img src={banner} alt="banner" className="rounded-2xl" />
      <div className="relative -mt-6 mx-auto w-[90%] md:w-3/4">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search articles..."
          className="w-full rounded-full py-3 pl-11 pr-4 shadow-lg outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
