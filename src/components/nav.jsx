import { useState, useRef } from "react";
import { FaBars, FaRegCommentDots } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import useNav from "../hooks/navHooks";

const navLinks = [
  { name: "Gallery", path: "#gallery", icon:<GrGallery />  },
  { name: "Wishes", path: "#wishes", icon: <FaRegCommentDots /> },
];

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);
  
  function toggleIcon(e) {
    e.stopPropagation()
    setOpenNav((prev) => !prev);
  }

  useNav({
    openNav,
    setOpenNav,
    navRef,
  });
  
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full px-3 md:px-8 lg:px-20 xl:px-32 py-5  bg-white shadow-lg"
    >
      <div  ref={navRef} className="flex items-center justify-between ">
        <h1 className="font-semibold text-lg sm:flex-1 text-black/70">
          🎉 Happy Birthday, Sir!
        </h1>
        <div
        className={`fixed left-0 top-0 items-center overflow-hidden transition-transform duration-200 
          ease-linear gap-10 sm:relative sm:top-0 sm:flex sm:h-fit sm:w-fit sm:flex-1 sm:scale-100  ${
          openNav
            ? "z-[100] w-[80%] scale-100 space-y-2 bg-DarkOrange px-6 py-12 shadow-md"
            : "h-0 w-0 scale-0 p-0"
        }`}
        style={{
          transformOrigin: "top center",
        }}
        >
          {navLinks.map((link, index) => (

          <a
            onClick={()=>setOpenNav(false)}
            key={index}
            href={link.path}
            className={ ` font-semibold cursor-pointer flex gap-2 items-center text-white duration-200 transition-all ease-linear hover:text-white py-1 sm:px-3 sm:py-[6px] w-fit sm:text-black/70 sm:hover:text-black sm:hover:rounded-[4px] sm:hover:bg-gray-100`}
          >
            <span>{link.icon}</span> 
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <button
          className={`cursor-pointer sm:hidden ${openNav  ? "fixed right-[30%] top-6 z-[150]" : "relative right-0 top-0 z-0"}`}
          onClick={(e)=>toggleIcon(e)}
          aria-expanded={openNav}
        >
          {openNav ? <IoCloseSharp className="size-6 text-white"/> : <FaBars className="size-6"/>}
        </button>
      </div>
    </nav>
  );
}
