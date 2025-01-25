import { useState, useContext } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


export default function GallerySection() {
  const { galleryRef } = useContext(SectionsRef);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    imae15
  ];

  const slides = images.map((image) => ({ src: image }));

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index ,item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <section id="gallery" className="mt-24" ref={galleryRef}>
      <h2 className="text-center text-xl font-bold text-orange-500 md:text-2xl">
        Memories Gallery
      </h2>
      <p className="mt-4 text-center leading-snug md:text-[1.15rem]">
        A collection of cherished moments and unforgettable memories. Enjoy!
      </p>

      {/* <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
       </div> */}

    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
    </section>
  );
}
