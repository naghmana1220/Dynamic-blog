"use client"
import { Search, Menu } from "lucide-react";
import {  useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";


const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br bg-transparent bg-slate-600 w-full">
      <header className="mx-auto max-w-[1000px] text-white sticky top-0 z-20">

         {/* <div>
          <Link href={"/"}><h1 className="text-center text-[32px] uppercase tracking-[6px] pt-[30px] hidden md:block font-bold text-cyan-500">MyBlogs</h1></Link>
        </div>  */}

        <div className="mx-auto items-center justify-center px-3 mt-[40px] pb-2 border-b-2 tracking-wider hidden md:flex">
          {/* Navbar */}
          <nav className="flex justify-center">
          <ul className="hidden md:flex gap-6 text-cyan-400">
              <li className="cursor-pointer hover:text-white transition-all duration-300">
                <Link href="/web-dev">Web-development</Link>
              </li>
              {/* <li className="cursor-pointer  hover:text-white transition-all duration-300">
              <Link href="/blogs/app-dev">App Developement</Link>
              </li> */}
              {/* <li className="cursor-pointer  hover:text-white transition-all duration-300">
              <Link href="/blogs/ai">Artificial Intelligence</Link>
              </li> */}
              {/* <li className="cursor-pointer  transition-all duration-300">
              <Link href="/blogs">All Blogs</Link>
              </li> */}
              <li className="cursor-pointer hover:text-white  transition-all duration-300">
              <Link href="/about">About Me</Link>
              </li>
          </ul>
          </nav>

          {/* Search and Contact
          <div className="flex items-center gap-4">
            <Search className="cursor-pointer"/>
            <Link href={"/about"} className="cursor-pointer hover:border-b transition-all duration-300">GET IN TOUCH</Link>
          </div> */}

        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-3 py-7 border-b-2">
          <Menu className="cursor-pointer" onClick={()=> setIsNavbarOpen(true)}/>
          <Link href={"/"}><h1 className="text-center text-lg uppercase tracking-[6px]">Dev Sphere</h1></Link>
          <Search />
        </div>


        {/* Sheet */}
        <Sheet open={isNavbarOpen} onOpenChange={setIsNavbarOpen}>
          <SheetContent className="bg-gradient-to-br from-[#020213] to-[#091C38]  w-[15rem]" side={"left"}>
            <SheetHeader>
              <SheetTitle className="text-center text-white tracking-widest">DEV SPHERE</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-8 text-white mt-6">
                  <li className="cursor-pointer hover:underline">
                    <Link href="/blogs/web-dev">Website Developement</Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link href="/blogs/app-dev">App Developement</Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link href="/blogs/ai">Artificial Intelligence</Link>
                  </li>
                  <li className="cursor-pointer hover:border-white hover:border-b transition-all duration-300">
                    <Link href="/blogs">All Blogs</Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link href="/about">About Me</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </header>
    </div>
  )
}

export default Header