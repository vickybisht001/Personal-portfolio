"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `hover:text-amber-300 transition ${
      pathname === path ? "text-amber-300 font-semibold underline underline-offset-4" : ""
    }`;

  return (
    <nav className="navbar flex justify-between items-center px-6 py-4 bg-[#003580] text-white shadow-md">
      <h1 className="text-xl font-bold">Jitendra</h1>
      <div className="space-x-4 text-sm sm:text-base">
        <Link href="/" className={linkStyle("/")}>
          Home
        </Link>
        <Link href="/about" className={linkStyle("/about")}>
          About
        </Link>
        <Link href="/project" className={linkStyle("/project")}>
          Projects
        </Link>
        <Link href="/contact" className={linkStyle("/contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
