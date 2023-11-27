import { bree } from "@app/libs/fonts/font";
import Image from "next/image";

const footer = [
  {
    title: "Quick Links",
    items: ["Home", "Products", "About Us", "Job Career"],
  },
  {
    title: "Customer Support",
    items: ["FAQ", "Contact Us", "Help Center", "feedback"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Cookies", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <div className="w-full  max-sm:h-auto overflow-hidden text-vile_blue">
      <div className="w-full mb-[-5px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient
              id="customGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#bac8c8 ", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#e2e9eb", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#customGradient)"
            fillOpacity="1"
            d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,186.7C672,192,768,256,864,266.7C960,277,1056,235,1152,197.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        className={`${bree.className}   w-full pb-20 bg-gradient-to-r  from-cream_dark to-cream_white z-20 p-4 flex max-sm:flex-col  md:justify-between `}>
        <div
          className={`w-[50%] flex gap-4 max-sm:flex-col md:justify-between`}>
          {footer.map((item) => (
            <div key={item.title}>
              <h1 className="text-lg md:text-2xl font-bold max-sm:my-2">
                {item.title}
              </h1>
              <ul className="my-2 list-none text-sm text-vile_blue/70 cursor-pointer ">
                {item.items.map((list) => (
                  <li key={list} className="hover:text-white">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="md:w-[50%] h-full w-[100%] md:px-2 relative pb-2 ">
          <div className="flex gap-2 items-center max-sm:my-10">
            <h1 className="font-bold text-lg md:text-xl ">Newsletter</h1>
            <input
              className="md:w-[60%] w-[70%] h-10 p-2 bg-vile_blue/20 rounded-2xl 
           focus:outline-none focus:border border-vile_blue "
              placeholder="Subscribe to our newsletter for updates"
            ></input>
            <div className="md:w-[10%] w-[20%] h-10 bg-vile_blue/40 rounded-2xl cursor-pointer flex items-center justify-center hover:bg-vile_blue/20 hover:border border-vile_blue">
              <Image
                src="/icons/arrow.svg"
                width={25}
                height={25}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <h4
          className={`${bree.className}   text-sm p-2 bg-gradient-to-r  from-cream_dark to-cream_white`}>
          &copy; 2023 Swatter
        </h4>
      </div>
    </div>
  );
}
