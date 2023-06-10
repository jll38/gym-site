import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
export function Navbar({ solid }) {
  const [mobileNavToggle, setMobileNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("nav");
      if (!solid) {
        if (window.scrollY > 1) {
          navbar.classList.add("bg-black");
        } else {
          navbar.classList.remove("bg-black");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 639)
    {
     setMobileNav(false);
    }
  }, []);

  return (
    <>
      <nav
        id="nav"
        className={`hidden fixed sm:flex  justify-between px-10 text-gray-300 gap-5 z-50 w-screen transition-colors duration-300   ${
          solid ? "bg-black" : ""
        }`}
      >
        <button
          href="/"
          role="button"
          aria-label="Home Button"
          tabIndex={0}
          className="h-16 w-36 relative"
          onClick={() => {
            window.location.assign("/");
          }}
        >
          <Image
            className="object-contain"
            src="/images/atlas-logo-3.webp"
            alt="Atlas Gym Logo"
            fill
            loading="lazy"
          />
        </button>

        <div className="lg:ml-[10%] flex gap-2 sm:gap-6 md:gap-12 lg:gap-20 md:text-sm lg:text-lg">
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]"
          onClick={() => {window.location.assign("/about")}}
          role="button"
          aria-label="About Page Navigate Button">
            About
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]"
          onClick={() => {window.location.assign("/services")}}
          role="button"
          aria-label="Services Page Navigate Button">
            Services
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]"
          onClick={() => {window.location.assign("/pricing")}}
          role="button"
          aria-label="Pricing Page Navigate Button">
            Pricing
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]"
          onClick={() => {window.location.assign("/shop")}}
          role="button"
          aria-label="Shop Page Navigate Button">
          Shop
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]"
          onClick={() => {window.location.assign("/contact")}}
          role="button"
          aria-label="Contact Page Navigate Button">
            Contact
          </button>
        </div>
      </nav>

      <nav
        id="mobile-nav"
        className={`flex flex-col fixed sm:hidden  px-10 text-gray-300 gap-5 z-50 w-screen bg-black overflow-hidden ${
          mobileNavToggle ? "h-full" : "h-20"
        } transition-all duration-300`}
      >
        <div className="py-6">
          <button onClick={() => {setMobileNav(!mobileNavToggle)}}>
            <i className="fa-solid fa-bars text-4xl"></i>
          </button>
        </div>

        <div
          className={`lg:ml-[10%] flex flex-col gap-10 text-[1.5em] justify-start child:flex child:uppercase overflow-y-scroll ${
            mobileNavToggle ? "" : "hidden h-0"
          } `}
        >
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)] ">
            <Link href="/">Home</Link>
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)] ">
            <Link href="/about">About</Link>
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]">
            <Link href="/services">Services</Link>
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]">
            <Link href="/pricing">Pricing</Link>
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]">
            <Link href="/shop">Shop</Link>
          </button>
          <button className="hover:text-white hover:border-b-2 border-orange-600 transition-all duration-50 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </nav>
    </>
  );
}
