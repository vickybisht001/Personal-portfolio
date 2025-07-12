"use client";

import React, { useState } from "react";
import Head from "next/head";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (!isValidEmail(formData.email)) {
      setStatusMessage("❌ Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("❌ An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Jitendra Bisht</title>
        <meta
          name="description"
          content="Get in touch with Jitendra Bisht — full-stack developer. Let's collaborate or discuss your next project!"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section
        id="contact"
        className="br-point text-gray-600 dark:text-gray-300 body-font py-12 px-6"
      >
        <div className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Me
            </h1>
            <p className="text-base">
              Have a question, a project, or want to collaborate? Feel free to
              reach out — I&apos;m happy to connect!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <label htmlFor="name" className="text-sm block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  className="w-full rounded border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="p-2 w-1/2">
                <label htmlFor="email" className="text-sm block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="p-2 w-full">
                <label htmlFor="message" className="text-sm block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-32 rounded border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-800 resize-none focus:ring-2 focus:ring-blue-200 focus:outline-none"
                ></textarea>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex mx-auto px-6 py-2 rounded text-white transition ${
                    isLoading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
              {statusMessage && (
                <div
                  className="w-full text-center mt-4 text-sm"
                  aria-live="polite"
                >
                  {statusMessage}
                </div>
              )}
            </div>
          </form>

          <div className="text-center mt-10 border-t pt-6">
            <p className="mb-2">jitendrabisht412@gmail.com</p>
            <p>Haldwani, Uttarakhand, India</p>
            <div className="flex justify-center mt-4 space-x-4 text-gray-500 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/jitendra-bisht-85ba15239/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="hover:text-blue-500" />
              </a>
              <a
                href="https://github.com/vickybisht001"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="hover:text-red-300" />
              </a>
              <a
                href="mailto:jitendrabisht412@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope size={24} className="hover:text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

