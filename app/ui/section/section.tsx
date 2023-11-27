import { bree } from "@app/libs/fonts/font";
import Chair from "./chair";
import Products from "./products";

export default function Section() {
  return (
    <div className="w-full min-h-screen text-center text-deep p-2 max-sm:pb-[7rem]" id="section">
      <div className="mt-12 flex flex-col gap-2 items-center ">
        <h1 className={`${bree.className}  md:text-[2rem] text-2xl  md:leading-7 font-[800] `}>
          Discover the art of living well
        </h1>
        <h3 className="mt-4 mb-2 w-[70%] md:w-[40%] font-bold text-deep/90">
          From stylish furniture that embraces modern aesthetics to expert room
          decoration that defines your personal haven — let your home be a
          celebration of your life's journey
        </h3>
      </div>
      <Chair/>
      <Products/>
    </div>
  );
}
