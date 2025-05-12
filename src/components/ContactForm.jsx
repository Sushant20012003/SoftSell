import { useState } from "react";
import ContactImg from "../assets/contactimg.png"; // Update this path as needed

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(form).some(value => !value.trim());
    if (isEmpty) {
      setError("Please fill in all required fields.");
      return;
    }

    alert(
      `Form Submitted Successfully!\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nLicense Type: ${form.license}\nMessage: ${form.message}`
    );

    setError("");
    setForm({
      name: "",
      email: "",
      company: "",
      license: "",
      message: ""
    });
  };

  return (
    <div id="contact" className="w-full min-h-[90vh] bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Top Background Section */}
      <div className="bg-gradient-to-br from-purple-950 to-indigo-900 dark:from-[#271740] dark:to-[#321740] h-72 w-[73vw] mx-auto" />

      {/* Overlapping Card */}
      <div className="lg:max-w-5xl w-[90vw] sm:w-[70vw] mx-auto -mt-64 shadow-xl bg-white dark:bg-gray-800 overflow-hidden flex flex-col md:flex-row">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-purple-800 dark:text-purple-300">Contact Us</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Send us your questions or feedback — we’d love to hear from you!
          </p>

          {error && (
            <p className="text-red-600 font-medium mb-4 dark:text-red-400">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600  bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600  bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600  bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            />

            {/* License Type Dropdown */}
            <select
              name="license"
              value={form.license}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600  bg-white dark:bg-gray-700 text-black dark:text-white"
            >
              <option value="">Select License Type</option>
              <option value="Basic">Basic</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600  bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2  hover:bg-purple-800 dark:hover:bg-purple-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="w-full hidden lg:block md:w-1/2 p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
          <img
            src={ContactImg}
            alt="Contact Visual"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
