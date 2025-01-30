import React, { useState, useEffect } from "react";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const trendingProducts = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const hotDealsPoster =
    "https://images.pexels.com/photos/3184194/pexels-photo-3184194.jpeg?auto=compress&cs=tinysrgb&w=1600";

  useEffect(() => {
    let interval;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === trendingProducts.length - 1 ? 0 : prev + 1
        );
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isHovered, trendingProducts.length]);

  return (
    <div className="slider">
      <div className="slider-grid">
        {/* Left Section - Vertical Auto-Slider */}
        <div
          className="vertical-slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="slides-container"
            style={{ transform: `translateY(-${currentSlide * 100}%)` }}
          >
            {trendingProducts.map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Static Hot Deals Poster */}
        <div className="hot-deals">
          <img src={hotDealsPoster} alt="Hot Deals" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
