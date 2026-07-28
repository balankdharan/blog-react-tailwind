import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-7xl font-extrabold" style={{ color: "rgb(253 60 58)" }}>
        404
      </h1>
      <p className="mt-4 text-xl font-semibold">Page not found</p>
      <p className="mt-2 text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-full text-white font-medium"
        style={{ background: "rgb(253 60 58)" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
