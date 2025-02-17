import { useContext } from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { SectionsRef } from "../App";



export default function Footer() {
  const {galleryRef, commentRef} = useContext(SectionsRef)

  const navLinks = [
    { name: "Gallery", path: galleryRef, icon:<GrGallery /> },
    { name: "Wishes", path: commentRef, icon: <FaRegCommentDots /> },
  ];
  return (
    <footer className="bg-footerColor px-4 py-16 md:py-24  text-white md:px-8 lg:px-20 xl:px-32 mt-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 ">
        <div className="pr-4 md:col-span-2">
          <h2 className="mb-4 text-lg md:text-xl font-semibold">Designed by SheriffBaba</h2>
          <p className="leading-snug">
            This website was made with love to celebrate a special birthday. 
            Thanks for visiting, and enjoy exploring the memories!
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index} className=" w-fit">
                <div
                  onClick={()=>link.path.current.scrollIntoView()}
                  href={link.path}
                  className="cursor-pointer py-1 flex items-center gap-2 transition-all duration-200 ease-in-out hover:underline hover:text-orange-500"
                >
                  <span>{link.icon}</span> 
                  <span>{link.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2  ">
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Contact Us</h3>
          <p className="mb-1 leading-snug">
            1, Ola-Oluwa Street, Papa Ashafa, Agege, Lagos State
          </p>
          <p className="mb-1 lg:text-base">
            <a
              href="mailto:abdullateefkehinde848@gmail.com"
              className="hover:underline hover:text-orange-500"
            >
              abdullateefkehinde848@gmail.com
            </a>
          </p>
          <p className="mb-4 ">Phone: +234 702 6771 744</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-base">
          &copy; {new Date().getFullYear()} SheriffBaba. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
