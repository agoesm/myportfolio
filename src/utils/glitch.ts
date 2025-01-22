import { Variants } from "framer-motion";

export const glitchVariants: Variants = {
  initial: { textShadow: "none" },
  glitch: {
    textShadow: [
      "2px 2px 0 #ff3b3b",
      "-2px -2px 0 #00f6ff",
      "2px -2px 0 #ff3b3b",
      "-2px 2px 0 #00f6ff",
      "none",
    ],
    transition: { duration: 0.2, repeat: Infinity, repeatType: "reverse" },
  },
};

export const glitchVariants2 = {
  initial: { opacity: 1, textShadow: "none", x: 0, y: 0 },
  glitch: {
    opacity: [1, 0.5, 1],
    x: [0, 10, -10, 5, -5, 0],
    y: [0, 10, -10, 5, -5, 0],
    textShadow: [
      "2px 2px 0 #ff3b3b",
      "-2px -2px 0 #00f6ff",
      "2px -2px 0 #ff3b3b",
      "-2px 2px 0 #00f6ff",
      "1px 1px 0 rgba(0, 255, 255, 0.6)",
      "-1px -1px 0 rgba(255, 59, 59, 0.6)",
    ],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};
