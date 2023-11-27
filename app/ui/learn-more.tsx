"use client";
import { motion } from "framer-motion";

export default function LearnMore({
  words,
  color,
}: {
  words: string;
  color: string;
}) {
  return (
    <motion.div
      style={{ background : color }}
      whileHover={{ scale: 1.2 }}
      className={`mt-5 w-[10rem] h-12 md:h-10 p-2 rounded-[20px] bg-deep shadow-card ${color === '#fff' ? 'text-deep': 'text-white'}  flex items-center justify-center cursor-pointer max-sm:mx-4`}>
      {words}
    </motion.div>
  );
}
