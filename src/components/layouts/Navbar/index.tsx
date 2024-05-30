"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";


const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "product",
    path: "/product",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className=" text-primary border-2 border-transparent border-b-primary ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <Image src="/assets/logo-cakapinstore-vertical.png" alt="logo" width={120} height={72} />
        </Link>
        {/* desktop nav and login button */}
        <div className="hidden xl:flex items-center gap-8 capitalize">
          <nav className="flex gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${link.path === pathname &&
                    "text-accent border-b-2 border-accent capitalize font-medium hover:text-accent translate-all "
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Link href={"/auth/login"}>
            <Button>Login</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          Mobile nav
        </div>
      </div>
    </header>
  );
}

export default Navbar;