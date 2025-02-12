"use client"; //animations should be in client components

import * as motion from "motion/react-client";

export default function TitleAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 5 }}
      className="flex flex-col items-center text-amber-600"
    >
      <h1>Welcome to my website</h1>
      <h2>Please, get comfortable for the riiiiiiiiiiiideeeeeee</h2>
    </motion.div>
  );
}
