import banner from "../assets/images/blogBanner.png";

const Search = () => {
  return (
    <div className="justify-center flex mt-8 flex-col px-[70] md:px-[150px]">
      <img src={banner} alt="banner" className="rounded-2xl" />
      <div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;
