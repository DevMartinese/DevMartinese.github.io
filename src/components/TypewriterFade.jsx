import React from "react";
import { motion } from "motion/react";

const TypewriterFade = ({ text, delay = 0.05, className = "" }) => {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * delay,
            duration: 0.3,
            ease: "easeOut"
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default TypewriterFade; 