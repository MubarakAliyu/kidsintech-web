"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const AnimatedSection = ({ children, className = "", delay = 0, duration = 0.8, direction = "up", distance = 50, stagger = 0.15 }) => {
  const ref = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "-50px 0px -50px 0px",
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: direction === "scale" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate="visible" className={className}>
      {children}
    </motion.div>
  );
};

export const AnimatedItem = ({ children, className = "", delay = 0, duration = 0.6, direction = "up", distance = 30 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

export const AnimatedImage = ({ src, alt, className = "", delay = 0, duration = 0.6, direction = "scale", distance = 20 }) => {
  const ref = useInView({ threshold: 0.1, triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: direction === "scale" ? 0.8 : 1,
      rotate: direction === "rotate" ? -5 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate="visible" className={className}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export const AnimatedText = ({ children, className = "", delay = 0, duration = 0.6, direction = "up", distance = 30 }) => {
  const ref = useInView({ threshold: 0.1, triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate="visible" className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
