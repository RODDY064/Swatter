"use client";

import { bree } from "@app/libs/fonts/font";
import LearnMore from "../learn-more";

export default function Info() {
  return (
    <>
      <h1 className={`${bree.className} text-lg md:text2xl font-[800] text-center md:px-6`}>
      We provide exquisite and cozy furniture sets designed  to transform your space into a warm and inviting home, ensuring the utmost  comfort and quality
      </h1>
      <LearnMore words="Learn More" color="#fff"/>
    </>
  );
}
