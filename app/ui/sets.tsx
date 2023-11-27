import Image from "next/image";

const sets: Array<{ id: number; images: string }> = [
  { id: 0, images: "/images/table.jpg" },
  { id: 1, images: "/images/table_2.jpg" },
];

export default function Sets() {
  return (
    <>
      {sets.map((item) => (
        <div
          key={item.id}
          className="w-[15rem] h-[10rem] rounded-[15px] bg-gray-100 p-2 cursor-pointer relative">
          <div className="w-full h-[95%]  rounded-xl relative overflow-hidden">
            <Image src={item.images} fill={true} alt="furniture" className="object-cover rounded-xl" />
          </div>
        </div>
      ))}
    </>
  );
}
