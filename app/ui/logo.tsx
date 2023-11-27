import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
       <Link href='/' className="cursor-pointer">
        <Image src='/icons/logo.png' width={170} height={50} alt="logo" className="p-2"/>
       </Link>
  )
}
