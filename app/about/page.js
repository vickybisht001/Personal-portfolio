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
          content="Learn more about Jitendra Bisht - a passionate full-stack web developer skilled in React, Python, Tailwind CSS, and modern web technologies."
        />
        <meta property="og:title" content="About | Jitendra Bisht" />
        <meta
          property="og:description"
          content="Portfolio About section of Jitendra Bisht - Full-Stack Developer skilled in React, Python, and Tailwind CSS."
        />
        <meta property="og:type" content="website" />
      </Head>

      <section
        id="about"
        className="br-point min-h-screen flex flex-col justify-center items-center px-6 py-12 text-center transition-all duration-500 ease-in-out"
      >
        <div className="max-w-3xl mx-auto">
          {/* Profile Image */}
          <img
            src="/me.jpg" 
            alt="Jitendra Bisht"
            className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6 border-4 border-blue-600"
          />

          <h2 className="text-3xl font-bold mb-6 dark:text-white animate-fade-in">
            About Me
          </h2>

          {/* Bio */}
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed animate-fade-in delay-100">
            I&#39;m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Jitendra Bisht
            </span>
            , a passionate and detail-oriented full-stack developer focused on
            building clean, responsive, and user-friendly web applications. I
            specialize in technologies like{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React, Python, Tailwind CSS, Node.js, MongoDB
            </span>{" "}
            — crafting modern digital experiences from start to finish.
            <br />
            <br />
            I&#39;m always eager to explore new tools and frameworks, and I love
            turning ideas into real-world solutions through code. Whether it&#39;s
            creating seamless front-end interfaces or handling complex back-end
            logic, I enjoy the entire development process.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fade-in delay-200">
            {["React", "Next.js", "Python", "Tailwind CSS", "MongoDB", "Node.js"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-8 animate-fade-in delay-300">
            <a
              href="/project"
              className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-400 animate-fade-in delay-400">
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


