"use client";

import Head from "next/head";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Jitendra Bisht</title>
        <meta
          name="description"
          content="Learn more about Jitendra Bisht - a passionate full-stack web developer skilled in React, Python, and Tailwind CSS."
        />
      </Head>

      <section
        id="about"
        className="br-point min-h-screen flex flex-col justify-center items-center px-6 py-12 text-center transition-all duration-500 ease-in-out"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 dark:text-white animate-fade-in">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed animate-fade-in delay-100">
            I&#39;m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Jitendra Bisht
            </span>
            , a passionate and detail-oriented full-stack developer focused on
            building clean, responsive, and user-friendly web applications. I
            specialize in technologies like{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React, Python, Tailwind CSS
            </span>
            , and more — crafting modern digital experiences from start to
            finish.
            <br />
            <br />
            I&#39;m always eager to explore new tools and frameworks, and I love
            turning ideas into real-world solutions through code. Whether it&#39;s
            creating seamless front-end interfaces or handling complex back-end
            logic, I enjoy the entire development process.
          </p>

          <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-400 animate-fade-in delay-200">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-pink-500 transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="hover:text-red-600 transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

