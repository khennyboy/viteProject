import { useContext } from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { SectionsRef } from "../App";



export default function Footer() {
  const {galleryRef, wishesRef} = useContext(SectionsRef)

  const navLinks = [
    { name: "Gallery", path: galleryRef, icon:<GrGallery /> },
    { name: "Wishes", path: wishesRef, icon: <FaRegCommentDots /> },
  ];
  return (
    <footer className="bg-footerColor px-4 py-12 md:py-16  text-white md:px-8 xl:px-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 ">
        <div className="pr-4 md:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">Designed by SheriffBaba</h2>
          <p className="text-sm md:text-base md:leading-snug">
            This website was made with love to celebrate a special birthday. 
            Thanks for visiting, and enjoy exploring the memories!
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index} className=" w-fit">
                <div
                  onClick={()=>link.path.current.scrollIntoView()}
                  href={link.path}
                  className="cursor-pointer py-1 flex items-center gap-2 text-sm transition-all duration-200 ease-in-out hover:underline hover:text-orange-500"
                >
                  <span>{link.icon}</span> 
                  <span>{link.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="mb-1 text-sm lg:text-base">
            1, Ola-Oluwa Street, Papa Ashafa, Agege, Lagos State
          </p>
          <p className="mb-1 text-sm lg:text-base">
            <a
              href="mailto:abdullateefkehinde848@gmail.com"
              className="hover:underline hover:text-orange-500"
            >
              abdullateefkehinde848@gmail.com
            </a>
          </p>
          <p className="mb-4 text-sm lg:text-base">Phone: +234 702 6771 744</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} SheriffBaba. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
