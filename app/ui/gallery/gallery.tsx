import Art from "./art";
import Text from "./text";

export default function Gallery() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center pb-20">
      <div
        className="w-[94%] md:w-[60%] h-[90vh] md:h-[80rem]  rounded-[20px] relative
         flex justify-end overflow-hidden  mt-[10rem] md:mt-[12rem]" id="gallery" >
        <div className="w-full h-full absolute flex justify-between">
          <div className="w-[65%] h-full bg-gradient-to-b from-white_blue to-cream_blue">
            <div className="md:w-[80%] w-[85%] z-50 cursor-pointer relative p-5 px-4 max-sm:px-2 flex justify-center items-center">
              <Text />
            </div>
          </div>
          <div className="w-[35%] h-full bg-gradient-to-b  from-dime_green to-dark_green "></div>
        </div>
        <Art />
      </div>
    </div>
  );
}
