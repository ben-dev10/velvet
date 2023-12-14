import { useState } from "react";
import cosmetic3 from "../../../assets/cosmetics/cosmetic (3).png";
import cosmetic from "../../../assets/cosmetics/cosmetic.png";
import cosmetic5 from "../../../assets/cosmetics/cosmetic (5).png";

import { ChevronLeft, ChevronRight } from "lucide-react";

let images = [cosmetic3, cosmetic, cosmetic5];

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
      <div className=" mb-3">
        <button
          onClick={handlePrev}
          className="absolute left-0 bottom-1/2 bg-white p-1 rounded-full shadow-md shadow-blue-100/50"
        >
          <ChevronLeft className="text-gray-400" />
        </button>
        <img
          src={images[currentIndex]}
          alt={`slide ${currentIndex + 1}`}
          className="object-cover max-h-[150px] sm:max-h-[200px] md:max-h-[230px]"
        />
        <button
          onClick={handleNext}
          className="absolute right-0 bottom-1/2 bg-white p-1 rounded-full shadow-md shadow-blue-100/50"
        >
          <ChevronRight className="text-gray-400" />
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
