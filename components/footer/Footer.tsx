import Image from "next/image";
import Link from "next/link";


function Footer() {
  return (
      <div className=" bg-gray-100  dark:bg-gray-800">
      <div className=" container mx-auto flex flex-col sm:flex-row justify-between items-center p-2">
        <Link href="/">
        <Image
          src="/dishcovery-logo.svg"
          alt="logo"
          width={200}
          height={100}
          priority
          className="p-4"
        />
       </Link>
       <p>All Right Reserved &copy; 2025</p>
      </div>
    </div>
  )
}

export default Footer