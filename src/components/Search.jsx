import banner from "../assets/images/blogBanner.png";

const Search = () => {
  return (
    <div className="justify-center flex mt-8 flex-col">
      <img src={banner} alt="banner" className="rounded-2xl" />
      <div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;
