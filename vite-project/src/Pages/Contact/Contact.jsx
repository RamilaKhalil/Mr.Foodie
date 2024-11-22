import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-[#ffff] rounded-lg shadow-inner p-6">
        <h1 className="text-2xl font-bold text-gray-600 mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-6">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full p-2 border border-orange-500 rounded-lg shadow-sm "
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full p-2 border border-orange-500 rounded-lg shadow-sm "
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="suggestions"
              className="mt-1 block w-full p-2 border border-orange-500 rounded-lg shadow-sm"
              placeholder="How can we make things better?"
              rows={3}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="suggestions"
              className="block text-sm font-medium text-gray-700"
            >
              Suggestions
            </label>
            <textarea
              id="suggestions"
              className="mt-1 block w-full p-2 border border-orange-500 rounded-lg shadow-sm "
              placeholder="How can we make things better?"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
