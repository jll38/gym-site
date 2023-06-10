import React from "react";
import Link from "next/link";
export function Footer({}) {
  return (
    <footer className="bg-black/95">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                src="/images/atlas-logo-3.webp"
                className="h-[40px] w-[300px] mr-3"
                alt="Atlas Gym Logo"
                loading="lazy"
              />
            </Link>
            <div className="text-sm flex mt-4 justify-end sm:mt-0 text-gray-200 flex-col h-[70px]">
              <div className="text-lg font-medium">Contact</div>
              <a className="text-gray-400 font-medium" href="mailto:example@example.com">management@atlasgym.com</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibol uppercase text-white">
                Services
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Request Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Memberships
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-6 h-[2px] bg-gradient-to-r from-red-500 to-orange-600 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Atlas Gym™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
