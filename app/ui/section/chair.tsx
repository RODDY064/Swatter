"use client";

import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Chair() {
  const ref = useRef(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const controls = useAnimation();
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "end end"],
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 840) {
      setIsAnimating(true);
    }else{
        setIsAnimating(false)
    }
    controls.start(isAnimating ? "visible" : "hidden");
  });

  return (
    <div className="w-full flex items-center justify-center mt-4">
      <motion.div
        ref={ref}
        variants={Pop}
        animate={controls}
        className="w-[90%] md:w-[55%] h-[20rem] md:h-[27rem] relative">
        <Image src="/images/10.png" fill={true} alt="deco" />
      </motion.div>
    </div>
  );
}

const Pop = {
  hidden: {
    y:20,
    opacity: 0,
  },
  visible: {
    y:0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
