import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

export default function Notify() {
  const [showNotify, setShowNotify] = useState(false);

 
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowNotify(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowNotify(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);


  const notifyClass = `relative rounded-lg bg-orange-500 w-[90%] max-w-md  text-white 
    px-4 py-12 md:py-16 font-bold transition-all transform duration-200 ease-linear 
    overflow-hidden z-50 ${showNotify ? "scale-100" : "scale-0"}`;

  return createPortal(
    <div className={`fixed left-0 top-0 z-50 flex  h-screen w-full items-center justify-center bg-backDropColor backdrop-blur-[4px] ${showNotify ? "block" : "hidden"}`}>
      <div className={notifyClass}>
        <p>
          Dear user, kindly double click on the webpage to play the birthday song and
          also double click to pause the music.
        </p>
        <button
          className="absolute top-2 right-3 "
          onClick={() => setShowNotify(false)}
          aria-label="Close notification"
        >
          <IoCloseSharp className="text-2xl" />
        </button>
      </div>
    </div>,
    document.body
  );
}
