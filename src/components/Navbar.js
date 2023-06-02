import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar({}) {
  return (
    <nav
      id="nav"
      className="flex justify-start bg-black px-10 text-gray-300 gap-5 shadow-md shadow-gray-900/75"
    >
      <div className="ml-6 sm:ml-[16%] h-20 w-36 relative">
        <Link href="/">
          <Image
            className="object-contain"
            src="/images/atlas-logo.png"
            layout="fill"
          />
        </Link>
      </div>

      <div className="md:ml-[10%] flex gap-2 sm:gap-10 md:gap-20">
        <button className="hover:text-gray-200"><Link href="/about">About</Link></button>
        <button className="hover:text-gray-200"><Link href="/services">Services</Link></button>
        <button className="hover:text-gray-200"><Link href="/atlas">Atlas Crossfit</Link></button>
        <button className="hover:text-gray-200"><Link href="/shop">Shop</Link></button>
      </div>
    </nav>
  );
}
