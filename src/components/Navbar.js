import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export function Navbar({}) {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('nav');
      if (window.scrollY > 10) {
        navbar.classList.add('bg-black');
      } else {
        navbar.classList.remove('bg-black');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav
      id="nav"
      className="hidden fixed sm:flex justify-start px-10 text-gray-300 gap-5 z-50 w-screen transition-all duration-300"
    >
      <div className="ml-6 sm:ml-[16%] h-16 w-36 relative">
        <Link href="/">
          <Image
            className="object-contain"
            src="/images/atlas-logo.png"
            fill
          />
        </Link>
      </div>

      <div className="md:ml-[10%] flex gap-2 sm:gap-10 md:gap-20">
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/about">About</Link></button>
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/services">Services</Link></button>
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/atlas">Atlas Crossfit</Link></button>
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/shop">Shop</Link></button>
      </div>
    </nav>
  );
}
