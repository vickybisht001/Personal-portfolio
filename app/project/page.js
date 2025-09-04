"use client";

import Head from "next/head";
import React from "react";

const projectList = [
  {
    title: "Hotel Booking Website",
    tech: ["React", "Tailwind CSS", "Swiper.js", "Node.js", "MongoDB"],
    description:
      "A responsive hotel booking platform with carousel, room listing, and booking form.",
    demoLink: "https://hotel-website-eosin.vercel.app/",
    codeLink: "https://github.com/vickybisht001",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    title: "Employee Management System",
    tech: ["Python", "MySQL"],
    description:
      "A desktop/web app with login, CRUD operations, and employee reports.",
    demoLink: "#",
    codeLink: "https://github.com/vickybisht001",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Netflix Clone",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A fully responsive Netflix clone with homepage and UI effects.",
    demoLink: "#",
    codeLink: "https://github.com/vickybisht001",
    img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Amazon Clone",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive Amazon home page clone with product layout design.",
    demoLink: "#",
    codeLink: "https://github.com/vickybisht001",
    img: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Restaurant Website",
    tech: ["HTML", "CSS", "React", "Express.js", "MongoDB"],
    description:
      "A restaurant website where users can reserve tables, view the menu, and contact the team.",
    demoLink: "#",
    codeLink: "https://github.com/vickybisht001",
    img: "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Coffee Café Website",
    tech: ["React", "CSS", "Express.js", "MongoDB"],
    description:
      "A modern café website with table reservation, menu section, and contact form integration.",
    demoLink: "https://coffee-cafe-website-sigma.vercel.app/",
    codeLink: "https://github.com/vickybisht001",
    img: "https://plus.unsplash.com/premium_photo-1665972824374-9bac6a0862a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gym Website",
    tech: ["React", "CSS", "Express.js", "MongoDB"],
    description:
      "A clean and responsive gym website template with homepage, pricing, and contact features.",
    demoLink: "#",
    codeLink: "https://github.com/vickybisht001",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <meta property="og:title" content="Projects | Jitendra Bisht" />
        <meta
          property="og:description"
          content="Explore projects built by Jitendra Bisht — Full-Stack Developer skilled in React, Python, Tailwind CSS, and MongoDB."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
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

          {projectList.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectList.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
                >
                  {/* Thumbnail */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900 dark:text-blue-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Links */}
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
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              🚧 Projects coming soon...
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
