import { useContext, useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import image3 from "../assets/images/image-3.jpg";
import image4 from "../assets/images/image-4.jpg";
import image5 from "../assets/images/image-5.jpg";
import image6 from "../assets/images/image-6.jpg";
import image7 from "../assets/images/image-7.jpg";
import image8 from "../assets/images/image-8.jpg";
import image9 from "../assets/images/image-9.jpg";
import image10 from "../assets/images/image-10.jpg";
import image11 from "../assets/images/image-11.jpg";
import image12 from "../assets/images/image-12.jpg";
import image13 from "../assets/images/image-13.jpg";
import image14 from "../assets/images/image-14.jpg";
import image15 from "../assets/images/image-15.jpg";
import { SectionsRef } from "../App";

export default function GallerySection() {
  const {galleryRef} = useContext(SectionsRef)
  const images = [
    { largeURL: image1, thumbnailURL: image1, width: 1200, height: 800 },
    { largeURL: image2, thumbnailURL: image2, width: 1200, height: 800 },
    { largeURL: image3, thumbnailURL: image3, width: 1200, height: 800 },
    { largeURL: image4, thumbnailURL: image4, width: 1200, height: 800 },
    { largeURL: image5, thumbnailURL: image5, width: 1200, height: 800 },
    { largeURL: image6, thumbnailURL: image6, width: 1200, height: 800 },
    { largeURL: image7, thumbnailURL: image7, width: 1200, height: 800 },
    { largeURL: image8, thumbnailURL: image8, width: 1200, height: 800 },
    { largeURL: image9, thumbnailURL: image9, width: 1200, height: 800 },
    { largeURL: image10, thumbnailURL: image10, width: 1200, height: 800 },
    { largeURL: image11, thumbnailURL: image11, width: 1200, height: 800 },
    { largeURL: image12, thumbnailURL: image12, width: 1200, height: 800 },
    { largeURL: image13, thumbnailURL: image13, width: 1200, height: 800 },
    { largeURL: image14, thumbnailURL: image14, width: 1200, height: 800 },
    { largeURL: image15, thumbnailURL: image15, width: 1200, height: 800 },
  ];

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      // arrowPrevSVG: leftArrowSVGString,
      // arrowNextSVG: leftArrowSVGString,
     
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <section id="gallery" className="mt-24" ref={galleryRef}>
      <h2 className="text-center text-xl font-bold text-orange-500 md:text-2xl">
        Memories Gallery
      </h2>
      <p className="mt-4 text-center leading-snug md:text-[1.15rem]">
        A collection of cherished moments and unforgettable memories. Enjoy!
      </p>

      <div className="pswp-gallery mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x12  md:gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {images.map((image, index) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={`gallery-${index}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src={image.thumbnailURL}
              alt={`Gallery Image ${index + 1}`}
              className={`w-full object-cover rounded-md shadow-md ${
                index % 2 === 0 ? "h-[250px]" : "h-[300px]"
              }`}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
