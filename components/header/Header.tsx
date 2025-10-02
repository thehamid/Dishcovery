import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { IoBookmarksOutline } from "react-icons/io5";

function Header() {
  return (
    <div className=" bg-gray-100  dark:bg-gray-800">
      <div className=" container mx-auto flex justify-between items-center">
        <DarkModeToggle />
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

        <Link href="/bookmarks"  className="p-3 cursor-pointer rounded-full  dark:bg-gray-800 dark:text-yellow-300  bg-gray-200 text-gray-800" ><IoBookmarksOutline /></Link>
      </div>
    </div>
  );
}

export default Header;
