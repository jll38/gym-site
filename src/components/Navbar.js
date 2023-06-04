import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export function Navbar({solid}) {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('nav');
      if(!solid)
      {
        if (window.scrollY > 1) {
          navbar.classList.add('bg-black');
        } else {
          navbar.classList.remove('bg-black');
        }
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
      className={`hidden fixed sm:flex justify-between px-10 text-gray-300 gap-5 z-50 w-screen transition-colors duration-300 ${solid ? "bg-black" : ""}`}
    >
        <button href="/" className="h-16 w-36 relative" onClick={() => {window.location.assign('/')}}>
          <Image
            className="object-contain"
            src="/images/atlas-logo-3.png"
            alt="Atlas Gym Logo"
            fill
          />
        </button>

      <div className="md:ml-[10%] flex gap-2 sm:gap-10 md:gap-20">
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/about">About</Link></button>
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/services">Services</Link></button>
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/pricing">Pricing</Link></button>
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/shop">Shop</Link></button>
        <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50"><Link href="/contact">Contact</Link></button>

      </div>
    </nav>
  );
}
