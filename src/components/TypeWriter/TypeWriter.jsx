import { useState, useEffect } from "react";

export const TypeWriter = ({ text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  return <p>{currentText}</p>;
};