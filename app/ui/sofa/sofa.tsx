import Image from "next/image";
import SquareText from "./square_text";
import Info from "./info";
import Pillow from "./pillow";


export default function Sofa() {
  return (
    <div className="w-full min-h-screen pt-4  text-white flex flex-col items-center mt-20 max-sm:bg-bg_green">
        <div className="w-full flex justify-end px-4">
            <div className="md:w-[50%] w-full flex flex-col items-center px-4">
            <Info/>
            </div>
        </div>
      <div className="md:w-[40%] w-[95%] h-[35rem]  rounded-b-[20px] relative">
        <Image src='/images/14.svg' fill={true} alt="sofa" className="lg:object-cover z-20"/>
         <SquareText/>
      </div>
      <Pillow/>
    </div>
  )
}
