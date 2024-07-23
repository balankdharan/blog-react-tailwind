import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroPost from "../components/IntroPost";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Header />
      <Search />
      <IntroPost />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
