import { useState, useRef } from "react";
import { FaBars, FaRegCommentDots } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";

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
      className="fixed top-0 left-0 z-50 w-full px-2 py-4 bg-white shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">
          🎉 Happy Birthday, Sir!
        </h1>
        <div
        className={`fixed left-0 top-0 items-center gap-1 overflow-hidden transition-transform duration-200 ease-linear sm:gap-6 md:relative md:top-0 md:flex md:h-fit md:w-fit md:flex-1 md:scale-100 lg:gap-2 ${
          openNav
            ? "z-[100] w-[80%] scale-100 space-y-2 bg-DarkOrange px-8 py-12 shadow-md"
            : "h-0 w-0 scale-0"
        }`}
        style={{
          transformOrigin: "top center",
        }}
        >
          {navLinks.map((link, index) => (

          <a
            key={index}
            href={link.path}
            className={`relative transition-all duration-300 ease-linear after:w-full hover:opacity-100 hover:after:h-fit md:p-4 md:px-2 md:after:py-4 md:hover:after:absolute md:hover:after:inset-0 md:hover:after:-z-50 md:hover:after:m-auto md:hover:after:rounded md:hover:after:bg-gray-100 md:hover:after:py-4 lg:px-4 `}
          >
            <GrGallery /> <FaRegCommentDots />{link.name}
          </a>
        ))}
      </div>
      <button
          className="sm:hidden"
          onClick={toggleIcon}
          aria-expanded={openNav}
        >
          {openNav ? <IoCloseSharp /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
