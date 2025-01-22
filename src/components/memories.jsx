import image1 from '../assets/images/image-1.jpg'

export default function GallerySection() {
    const images = [
      image1,
      image1,
      image1,
      image1,
      image1,
      image1,
      image1,
      image1,
      image1,
    ];
  
    return (
      <section id="gallery" className="px-4 py-12 md:px-8 lg:px-16">
        <h2 className="text-center text-3xl font-bold text-orange-500 md:text-4xl">
          Memories Gallery
        </h2>
        <p className="mt-4 text-center text-gray-600 md:text-lg">
          A collection of cherished moments and unforgettable memories. Enjoy!
        </p>
  
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                loading='lazy'
                src={image}
                alt={`Memory ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  