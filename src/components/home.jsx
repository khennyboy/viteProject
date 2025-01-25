import { useContext } from 'react';
import image2 from '../assets/images/image-2.jpg'
import { SectionsRef } from '../App';

export default function HomePage() {
  const {galleryRef} = useContext(SectionsRef)
    return (
      <main className="flex flex-col items-center justify-center gap-10  md:flex-row md:justify-between ">
        <div className="max-w-md md:max-w-sm lg:max-w-2xl text-center md:mb-0 md:text-left">
          <h1 className="text-3xl font-bold text-orange-500 md:text-4xl lg:text-5xl">
            Happy Birthday, Sir!
          </h1>
          <p className="mt-4 text-[1.07rem] text-gray-700/80 sm:text-[1.1rem] font-semibold lg:text-[1.2rem] leading-snug  md:mt-6">
            Wishing you a day filled with laughter, love, and joy. You&#39;ve been an
            inspiration to us all, and we hope this year brings even more
            wonderful memories. Celebrate big!
          </p>
          <button onClick={()=>galleryRef.current.scrollIntoView()} className="font-semibold mt-6 md:mt-8 rounded bg-orange-500 px-4 py-3  text-white shadow-md transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-300">
            View Memories
          </button>
        </div>
  
        <div className="w-full max-w-sm lg:max-w-md ">
          <img
            src={image2} 
            alt="CelebrantImage"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </main>
    );
  }
  