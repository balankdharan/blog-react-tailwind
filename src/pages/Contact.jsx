import { useState } from "react";
import Layout from "../components/Layout";

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto mt-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-500 text-center">
          Have a question or feedback? Send us a message.
        </p>

        {submitted && (
          <div className="mt-6 rounded-lg bg-green-50 text-green-700 px-4 py-3 text-sm">
            Thanks for reaching out! We&apos;ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full py-3 font-medium text-white"
            style={{ background: "rgb(253 60 58)" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
