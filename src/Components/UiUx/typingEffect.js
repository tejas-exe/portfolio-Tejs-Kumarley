import React, { useState, useEffect } from "react";
import "./typingEffect.css";
const TypingEffect = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const textToType = `
  Hello, I'm Tejas H Kumarley, a passionate web developer specializing in JavaScript, HTML5, CSS, EJS, Express, and Node.js. I strive to create dynamic web experiences and collaborate with fellow professionals to push the boundaries of web development. Let's shape the digital world together with dedication, creativity, and a shared passion for web development.`;
  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + textToType[currentIndex]);
      currentIndex++;

      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return <h4 className="my-Details">{isTyping ? text : textToType}</h4>;
};

export default TypingEffect;
