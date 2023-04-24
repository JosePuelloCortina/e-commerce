import { useState, useEffect, useRef } from 'react';

type Image = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: Image[];
};

function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const goToNext = () => {
    setCurrentImage((currentImage) =>
      currentImage === images.length - 1 ? 0 : currentImage + 1
    );
  };

  const goToPrev = () => {
    setCurrentImage((currentImage) =>
      currentImage === 0 ? images.length - 1 : currentImage - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
          ref={carouselRef}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={goToPrev} className="px-2 py-1 bg-indigo-800 text-white rounded-full opacity-25"
        >
          Prev
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={goToNext} className="px-2 py-1 bg-indigo-800 text-white rounded-full opacity-25" >
          Next
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="flex space-x-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentImage ? 'bg-gray-800' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;