import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-500">
          Idea Blog is a place to read and share ideas on web development,
          design, and everything in between. We&apos;re a small team of
          writers and developers who love breaking down complex topics into
          practical, easy-to-follow posts.
        </p>
        <p className="mt-4 text-gray-500">
          Got a story to share or feedback for us? Reach out through the
          Contact link in the navigation — we&apos;d love to hear from you.
        </p>
      </div>
    </Layout>
  );
};

export default About;
