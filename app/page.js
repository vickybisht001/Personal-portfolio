"use client";

import Head from "next/head";
import Link from "next/link";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jitendra | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Jitendra - Full-Stack Developer skilled in React, Python, MongoDB, and modern web technologies."
        />
      </Head>

      <section className="br-point h-screen flex flex-col justify-center items-center w-full text-center px-4 md:px-6 transition-all duration-500 ease-in-out">
        <h1 className="text-5xl font-bold mb-4 dark:text-white animate-fade-in">
          Hi, I&apos;m Jitendra 👋
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in delay-100">
          Full-Stack Developer | React & Python Enthusiast
        </p>
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed max-w-2xl animate-fade-in delay-200">
          I specialize in building responsive and user-friendly websites using
          modern technologies like <strong>React.js</strong>,{" "}
          <strong>Tailwind CSS</strong>, <strong> Express.js</strong>, <strong>Python</strong>, and{" "}
          <strong>MongoDB</strong>. I love turning ideas into scalable digital
          solutions that offer a seamless user experience.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
          <Link
            href="/project"
            aria-label="View my projects"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            <ArrowRightIcon className="w-5 h-5 mt-[1px]" />
            View Projects
          </Link>

          <Link
            href="/contact"
            aria-label="Contact me"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          >
            <EnvelopeIcon className="w-5 h-5 mt-[1px]" />
            Contact Me
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download my resume"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          >
            <DocumentArrowDownIcon className="w-5 h-5 mt-[1px]" />
            View Resume
          </a>
        </div>
      </section>
    </>
  );
}
