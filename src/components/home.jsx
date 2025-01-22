import image2 from '../assets/images/image-2.jpg'

export default function HomePage() {
    return (
      <main className="flex flex-col items-center justify-center gap-10  md:flex-row md:justify-between ">
        <div className="max-w-md md:max-w-sm lg:max-w-lg text-center md:mb-0 md:text-left">
          <h1 className="text-3xl font-bold text-orange-500 md:text-4xl lg:text-5xl">
            Happy Birthday, Sir!
          </h1>
          <p className="mt-4  sm:text-lg  leading-normal md:leading-snug md:mt-6">
            Wishing you a day filled with laughter, love, and joy. You&#39;ve been an
            inspiration to us all, and we hope this year brings even more
            wonderful memories. Celebrate big!
          </p>
          <button className="mt-6 md:mt-8 rounded bg-orange-500 px-6 py-3  text-white shadow-md transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-300">
            View Memories
          </button>
        </div>
  
        <div className="w-full max-w-sm md:max-w-md  ">
          <img
            src={image2} 
            alt="CelebrantImage"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </main>
    );
  }
  