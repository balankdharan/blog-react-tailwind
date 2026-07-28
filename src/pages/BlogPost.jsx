import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { posts } from "../data/posts";
import banner from "../assets/images/blogBanner.png";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <NotFound />;

  return (
    <Layout>
      <article className="max-w-2xl mx-auto mt-10">
        <Link to="/" className="text-sm text-red-500 hover:underline">
          &larr; Back to all posts
        </Link>
        <img
          src={banner}
          alt={post.title}
          className="w-full h-56 object-cover rounded-2xl mt-4"
        />
        <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wide text-red-500">
          {post.category}
        </span>
        <h1 className="mt-1 text-3xl font-bold">{post.title}</h1>
        <p className="mt-1 text-sm text-gray-400">{post.date}</p>
        <p className="mt-6 text-gray-600 leading-relaxed">{post.body}</p>
      </article>
    </Layout>
  );
};

export default BlogPost;
