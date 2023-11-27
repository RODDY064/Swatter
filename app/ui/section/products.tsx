import { bree } from "@app/libs/fonts/font";
import Image from "next/image";
import LearnMore from "../learn-more";

const products: Array<{ id: number; img: string; desc?: string }> = [
  { id: 0, img: "/images/borba.jpg", desc: "luxury in every detail" },
  { id: 1, img: "/images/houzlook.jpg", desc: "Chic Comfort, Stylish Living" },
  { id: 2, img: "/images/max.jpg", desc: "Elegance Redefined Here." },
];

export default function Products() {
  return (
    <div className="w-full min-h-[300px] md:mt-[6rem] mt-10 flex flex-col  items-center ">
      <h1  className={`${bree.className}  md:text-[2rem] text-2xl  md:leading-7 font-[800] my-6 `}>
        Products
      </h1>
      <div className="w-[98%] md:w-[80%]  grid grid-cols-2 md:grid-cols-3 justify-center gap-4 md:gap-7">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-full h-[12rem] md:h-[18rem] rounded-[12px] bg-white/70 cursor-pointer
             hover:border border-sky-300 border-1 p-2 shadow-card" >
            <div className="w-full h-[75%] relative rounded-xl overflow-hidden">
              <Image src={item.img} fill={true} alt="products" />
            </div>
            <div className="w-full h-12 mt-1 md:mt-4 flex items-center justify-center">
              <h3 className="text-sm text-deep/70">{item.desc} ~</h3>
            </div>
          </div>
        ))}
        <div className="md:hidden w-full h-[12rem] md:h-[18rem] rounded-[12px] bg-white/70 cursor-pointer hover:border border-sky-300 border-1 p-2 shadow-card">
          <div className="w-full h-[70%] relative rounded-xl overflow-hidden">
            <Image src="/images/mikhail.jpg" fill={true} alt="products" />
          </div>
          <div className="w-full h-12 mt-1 md:mt-4 flex items-center justify-center">
            <h3 className="text-sm text-deep/70">Your Vision, Our Decor." ~</h3>
          </div>
        </div>
      </div>
      <LearnMore words="Visit Shop" color="" />
    </div>
  );
}
