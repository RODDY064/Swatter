"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const pillow: Array<{ id: number; name: string; image: string }> = [
  {
    id: 0,
    name: "",
    image: "/images/pillow_1.jpg",
  },
  {
    id: 1,
    name: "",
    image: "/images/pillow_2.webp",
  },
  {
    id: 2,
    name: "",
    image: "/images/pillow_3.webp",
  },
  {
    id: 3,
    name: "",
    image: "/images/pillow_4.webp",
  },
];

export default function Pillow() {
  return (
    <div  id="pillow"className="w-full h-auto mt-10 md:mt-14 p-4 flex items-center justify-center">
      <div
        className="w-[100%] md:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-4 " id="grid">
        {pillow.map((item) => (
          <motion.div
            whileHover={{ y: -12 }}
            key={item.id}
            className="w-full h-[10rem] md:h-[13rem] bg-gradient-to-br from-brown 
             to-dark_brown rounded-[12px] border border-glow/70 cursor-pointer p-2" >
            <h1 className="w-full text-sm font-[800] text-center">Hello</h1>
            <div className="w-full h-[90%] relative rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                fill={true}
                alt="pillow"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
