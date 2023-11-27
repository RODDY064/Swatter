import Image from "next/image";

export default function ImgBox() {
  return (
    <Image src='/images/gallery.svg' fill={true} alt="gallery" className="object-cover"/>
  )
}
