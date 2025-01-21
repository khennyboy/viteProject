import { useState, useRef } from "react";

const navLinks = [
  { name: "Gallery", path: "#gallery" },
  { name: "Birthday Wishes", path: "#wishes" },
];

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);

  const toggleIcon = () => setOpenNav((prev) => !prev);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-400 px-4 py-3 shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          🎉 Happy Birthday Uncle!
        </h1>
        {/* Menu Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleIcon}
          aria-expanded={openNav}
        >
          {openNav ? "✖️" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:items-center md:justify-end ${
          openNav ? "block" : "hidden md:flex"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="text-lg font-medium text-white transition-transform duration-300 hover:scale-105 hover:text-yellow-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
