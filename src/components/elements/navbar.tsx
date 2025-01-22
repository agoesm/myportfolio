"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItem = [
    { title: "Resume", href: "#resume" },
    { title: "Portfolio", href: "#portfolio" },
    // { title: "Blog", href: "#blog" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // this is for detecting active section tag
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault(); // Prevent the default anchor behavior

    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Close menu if in mobile view
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white w-full sticky top-0 z-10">
      <div className="w-full flex flex-wrap items-center justify-between py-4 px-6 sm:px-8">
        {/* for logo */}
        <div />

        {/* humburger btn */}
        <button
          data-collapse-toggle="navbar-sticky"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1"`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navItem.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block py-2 px-1 hover:text-primary ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-gray-500"
                    }`}
                    aria-current="page"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
