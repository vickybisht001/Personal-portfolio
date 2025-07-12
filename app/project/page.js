"use client";

import Head from "next/head";
import React from "react";

const projectList = [
  {
    title: "Hotel Booking Website",
    tech: "React, Tailwind CSS, Swiper.js",
    description:
      "A responsive hotel booking platform with carousel, room listing, and booking form.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Employee Management System",
    tech: "Python, MySQL",
    description:
      "A desktop/web app with login, CRUD operations, and employee reports.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Netflix Clone",
    tech: "HTML, CSS, JavaScript",
    description:
      "A fully responsive Netflix clone with homepage and UI effects.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Amazon Clone",
    tech: "HTML, CSS, JavaScript",
    description:
      "A responsive Amazon home page clone with product layout design.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Restaurant Website",
    tech: "HTML, CSS, JavaScript, Express.js, MongoDB",
    description:
      "A restaurant website where users can reserve tables, view the menu, and contact the team.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Coffee Café Website",
    tech: "React, CSS, Express.js, MongoDB",
    description:
      "A modern café website with table reservation, menu section, and contact form integration.",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Gym Template",
    tech: "React, CSS, Express.js, MongoDB",
    description:
      "A clean and responsive gym website template with homepage, pricing, and contact features.",
    demoLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Jitendra Bisht</title>
        <meta
          name="description"
          content="Explore projects built by Jitendra Bisht — from web apps to full-stack solutions using React, Python, MongoDB, and more."
        />
      </Head>

      <section id="projects" className="br-point px-6 py-12 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Here are some of the projects I’ve built using modern tools and
            frameworks. Each project reflects my passion for writing clean code
            and creating great user experiences.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-[1.02] cursor-default"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 italic">
                  {project.tech}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="space-x-4">
                  {project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 text-sm"
                    >
                      GitHub Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
