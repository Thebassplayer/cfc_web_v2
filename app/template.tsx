"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      id="motion_effect"
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
      className="row-span-11 row-start-2 h-full w-screen overflow-y-scroll"
    >
      {children}
    </motion.main>
  );
}
