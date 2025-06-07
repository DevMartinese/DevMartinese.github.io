import React from "react";
import { motion } from "motion/react";

const TypewriterFade = ({ text, delay = 0.10, className = "" }) => {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: i * delay,
            duration: 0.32,
            ease: "easeOut"
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {/* Cursor parpadeante */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          delay: text.length * delay + 0.2,
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        style={{
          display: "inline-block",
          marginLeft: 2,
          verticalAlign: "middle",
          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit"
        }}
      >
        |
      </motion.span>
    </span>
  );
};

export default TypewriterFade; 