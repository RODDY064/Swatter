import Image from "next/image";
import Logo from "./logo";
import { bree } from "@app/libs/fonts/font";
import LearnMore from "./learn-more";
import Service from "./service";
import Sets from "./sets";

export default function Hero() {
  return (
    <div className="w-full min-h-screen ">
      <Logo />
      <div className="w-full flex justify-between  max-sm:p-0">
        <div className="w-[100%] h-[30rem] md:w-[60%] md:h-[45rem] relative">
          <Image src="/images/9.png" fill={true} alt="logo" className="ml-[-2px]" />
          <div className="absolute w-[10.5rem] h-[7rem] md:hidden right-3">
          <h1  className={`${bree.className} text-[1rem] leading-6 text-deep  md:text-[1.5rem] md:leading-7 font-[800] md:ml-[-7rem]`}>Transform Your Space with EleganceDiscover Quality Furniture  & Expert Room Decoration Services</h1>
          </div>
          <div className="absolute md:hidden w-[17rem] h-[8rem] right-2 bottom-0 flex flex-col items-end">
           <LearnMore words="Learn More" color="#1c2a2a" />
           <div className="w-full mt-10">
            <Service/>
           </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-between md:w-[40%]  h-[500px] text-deep">
          <div className="w-[95%] ">
           <h1  className={`${bree.className}  text-[1.5rem] leading-7 font-[800] ml-[-7rem]`}>Transform Your Space with Elegance<br /><span className="ml-5">Discover Quality Furniture  & Expert </span><br /> <span className="ml-10">Room Decoration Services</span></h1>
           <h3 className=" ml-[-4.4rem] my-4 text-sm font-[500] text-teal-950/70">Elevate your living experience with our timeless furniture pieces and personalized room decor services. Because your home is more than just a place; it's a reflection of your unique style and cherished memories.</h3>
          <LearnMore words='Learn More' color="#1c2a2a"/>
          </div>
         <Service/>
        </div>
      </div>
       <div className="w-full  justify-end hidden md:flex px-2">
        <div className="w-[80%] flex gap-6 items-center justify-center mt-[-7rem] max-sm:mt-0">
         <Sets/>
        </div>
       </div>
    </div>
  );
}
