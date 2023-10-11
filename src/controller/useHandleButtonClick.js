import { useState, useRef } from "react";

const useHandleButtonClick = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiper = useRef(null);

  const handleButtonClick = (index) => {
    swiper?.current.slideTo(index, 500, false);
  };

  return {
    handleButtonClick,
    currentSlideIndex,
  };
};

export default useHandleButtonClick;
