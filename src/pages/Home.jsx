import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroPost from "../components/IntroPost";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <IntroPost />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
