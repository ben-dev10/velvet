import { useState } from "react";
import sterre from "./img_Sterre_wide.jpg";
import woods from "./img_woods_wide.jpg";
import mountains from "./img_mountains_wide.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

let images = [sterre, woods, mountains];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="border border-red-500 relative text-white mb-3">
        <button onClick={handlePrev} className="absolute bottom-1/2">
          <ChevronLeft />
        </button>
        <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} />
        <button onClick={handleNext} className="absolute right-0 bottom-1/2">
          <ChevronRight />
        </button>
      </div>

      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      <div className="mini-map flex gap-1 w-full justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`mini-slide ${index + 1}`}
            className={`mini-image ${
              index === currentIndex ? "active" : ""
            } w-[30px] h-[25px] object-cover cursor-pointer`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
