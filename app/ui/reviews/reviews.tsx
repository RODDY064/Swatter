"use client";

import { bree } from "@app/libs/fonts/font";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type Colors = {
  text: "#1c2a2a" | "#fff";
  small: "#1c2a2ab1" | "#ffffffbb";
  box:
    | "linear-gradient(to right, #338998, #74dae6)"
    | "linear-gradient(to right, #2f6a68, #352219)";
};

export default function Reviews() {
  const ref = useRef<any>(null);
  const [colors, setColors] = useState<Colors>({
    text: "#1c2a2a",
    small: "#1c2a2ab1",
    box: "linear-gradient(to right, #2f6a68, #352219)",
  });
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    switch (true) {
      case latest > 4565:
        setColors({
          text: "#fff",
          small: "#ffffffbb",
          box: "linear-gradient(to right, #338998, #74dae6)",
        });
        break;
      default:
        setColors({
          text: "#1c2a2a",
          small: "#1c2a2ab1",
          box: "linear-gradient(to right, #2f6a68, #352219)",
        });
        break;
    }
  });

  const Contacts: Array<{ icons: string; name: string; item?: string }> = [
    {
      icons: "/icons/phone.svg",
      name: "Contact",
      item: "+233 599969735",
    },
    {
      icons: "/icons/email.svg",
      name: "Email",
      item: "adarkwagodfred@icloud.com",
    },
    {
      icons: "/icons/insta.svg",
      name: "Social Media",
      item:'Instagram'
    },
  ];

  return (
    <div
      className={`w-full min-h-screen pt-[20rem] md:pt-[6.5rem] flex max-sm:flex-col  max-sm:items-center relative overflow-hidden text-white p-4 ${
        colors.text === "#1c2a2a" ? "max-sm:bg-bg_green" : ""
      } `}>
      <div className="w-[100%]  md:w-[50%]">
        <h1
          style={{ color: colors.text, transition: "easeIn" }}
          className={`${bree.className} text-lg md:text-2xl font-[800]`}>
          <span
            className={`${
              colors.text === "#1c2a2a" ? "max-sm:text-glow/70" : ""
            }`}>
            Explore our consultation and advice services. Let us guide you
            towards informed decisions, ensuring every choice reflects your
            unique needs and aspirations
          </span>
        </h1>
        <h3
          style={{ color: colors.small, transition: "easeIn" }}
          className="my-6 px-6 text-sm font-light" >
          <span
            className={`${
              colors.text === "#1c2a2a" ? "max-sm:text-glow/60" : ""
            }`}>
            Here we delve into the intricacies of your preferences and
            lifestyle. From design nuances to practical considerations, we're
            here to ensure your choices align perfectly with your vision,
            creating a space that's uniquely yours.
          </span>
        </h3>
      </div>
      <div className="w-[100%] flex flex-col items-center  md:w-[50%] p-5 max-sm:px-2">
        <div
          style={{ background: colors.box }}
          className="lg:w-[80%] w-[100%] min-h-[15rem] rounded-[20px] my-12 border border-glow/70 p-4" >
          <h1 className={`${bree.className} text-lg md:text-2xl font-[800]`}>
            Book an appointment
            <div className="ml-4 flex flex-col gap-4 max-sm:ml-0">
              {Contacts.map((item) => (
                <div key={item.name} className="w-full flex gap-4 items-end">
                  <div className="w-12 h-12 rounded-full bg-teal-200/50 cursor-pointer flex items-center justify-center">
                    <Image src={item.icons} width={25} height={35} alt={item.name} />
                  </div>
                  <div className="flex flex-col justify-center">
                  <h3 className="text-sm font-[400] ">{item.name}</h3>
                   <h3 className="text-sm ">{item.item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
