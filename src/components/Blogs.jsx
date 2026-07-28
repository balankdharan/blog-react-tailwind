import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import banner from "../assets/images/blogBanner.png";
import { posts } from "../data/posts";

const Blogs = ({ query = "" }) => {
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      {filtered.length === 0 ? (
        <p className="text-gray-500">No posts match your search.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={banner}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-red-500">
                  {post.category}
                </span>
                <h3 className="mt-1 font-bold text-lg">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
                <p className="mt-3 text-xs text-gray-400">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

Blogs.propTypes = {
  query: PropTypes.string,
};

export default Blogs;
