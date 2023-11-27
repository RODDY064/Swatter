"use client";
import { useRef, useState } from "react";
import Hero from "./ui/hero";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Section from "./ui/section/section";
import { useScrollNum } from "./libs/context/scrollContext";
import Gallery from "./ui/gallery/gallery";
import Sofa from "./ui/sofa/sofa";
import Reviews from "./ui/reviews/reviews";
import Footer from "./ui/footer/footer";

export default function Home() {
  const [color, setColor] = useState<
    | "#e6dfca"
    | "#062f31"
    | "#dce4e4"
    | "linear-gradient(to right, #6bd3c7 50%, #2f6a68 50%, #143437 50%, #143437 50%)"
    | "linear-gradient(to right, #22343b, #7498a5)"
  >("#e6dfca");
  const ref = useRef(null);
  const { setScrollNum } = useScrollNum();

  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "end end"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    switch (true) {
      case latest > 840 && latest < 2142:
        setColor("#dce4e4");
        break;
      case latest > 2142 && latest < 3440:
        setColor("#062f31");
        break;
      case latest > 3440 && latest < 4565:
        setColor(
          "linear-gradient(to right, #6bd3c7 50%, #2f6a68 50%, #143437 50%, #143437 50%)"
        );
        break;
      case latest > 4565:
        setColor("linear-gradient(to right, #22343b, #7498a5)");
        break;
      default:
        setColor("#e6dfca");
    }
    setScrollNum(latest);
  });

  return (
    <main
      ref={ref}
      style={{ background: color }}
      className={`w-full min-h-screen `}>
      <Hero />
      <Section />
      <Gallery />
      <Sofa />
      <Reviews />
      <Footer />
    </main>
  );
}
