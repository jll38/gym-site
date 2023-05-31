import React from "react";
import Link from "next/link";
export function Navbar({ transparent }) {
  return (
    <nav
      className={`sm:flex text-xs justify-between py-4 px-8 fixed hidden w-full ${
        transparent
          ? "bg-gradient-to-t from-transparent to-netflix-bg"
          : "bg-gradient-to-t from-gray-900 to-netflix-bg"
      } z-50`}
    >
      <div className="flex">
        <div className="pr-4 py-2">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="15"
            viewBox="0 0 1024 276.742"
          >
            <path
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
              fill="#d81f26"
            />
          </svg>
        </div>
        <div className="lg:flex hidden gap-5 pt-2">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/shows" className="hover:text-gray-200">
            TV Shows
          </Link>
          <Link href="/movies" className="hover:text-gray-200">
            Movies
          </Link>
          <Link href="/trending" className="hover:text-gray-200">
            New & Popular
          </Link>
          <Link href="/list" className="hover:text-gray-200">
            My List
          </Link>
          <Link href="/original-audio" className="hover:text-gray-200">
            Browse by Languages
          </Link>
        </div>
        <div className="lg:hidden gap-2 pt-2">
          <button className="flex group">
            <div>
              Browse <i className="fa-sharp fa-solid fa-caret-down"></i>
            </div>
            <div className="hidden group-hover:flex absolute top-10 w-max rounded ">
              <div className="bg-black/50 mt-4 p-2 text-white border-t">
                <ul className="text-left flex flex-col gap-1">
                  <Link href="/" className="hover:text-gray-200">
                    Home
                  </Link>
                  <Link href="/shows" className="hover:text-gray-200">
                    TV Shows
                  </Link>
                  <Link href="/movies" className="hover:text-gray-200">
                    Movies
                  </Link>
                  <Link href="/trending" className="hover:text-gray-200">
                    New & Popular
                  </Link>
                  <Link href="/list" className="hover:text-gray-200">
                    My List
                  </Link>
                  <Link href="/original-audio" className="hover:text-gray-200">
                    Browse by Languages
                  </Link>
                </ul>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex pt-2 gap-5">
          <button className="relative bottom-1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link href="/shows">Kids</Link>
          <Link href="/dvd">DVD</Link>
          <button className="hidden sm:flex group">
            <div className="relative bottom-1.5">
            <i className="fa-regular fa-bell text-xl"></i>
            </div>
            <div className="hidden group-hover:flex absolute top-10 w-max rounded ">
              <div className="relative right-16 bg-black/50 mt-4 p-2 text-white border-t w-36 rounded-sm">
                <ul className="text-left flex flex-col gap-1">
                  
                </ul>
              </div>
            </div>
          </button>
        </div>
        <div className="flex gap-2">
          <img
            src="/image/Netflix-avatar.png"
            className="w-[30px] h-[30px] rounded-md"
            alt="profile image"
          ></img>
          <i className="fa-sharp fa-solid fa-caret-down pt-2"></i>
        </div>
      </div>
    </nav>
  );
}
