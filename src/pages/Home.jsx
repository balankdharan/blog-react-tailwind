import { useState } from "react";
import Blogs from "../components/Blogs";
import IntroPost from "../components/IntroPost";
import Layout from "../components/Layout";
import Search from "../components/Search";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <Layout>
      <Search onSearch={setQuery} />
      <IntroPost />
      <Blogs query={query} />
    </Layout>
  );
};

export default Home;
