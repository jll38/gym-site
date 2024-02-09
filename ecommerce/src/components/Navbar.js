import React from "react";
export function Navbar({}) {
  return <nav className="flex font-medium justify-between py-6 px-24 text-sm items-center">
        <div className="font-bold text-xl">Shotime</div>
        <div className="flex justify-between w-1/2">
          <div className="flex gap-6">
            <div>Men</div>
            <div>Women</div>
          </div>
          <div>Search</div>
          <div className="flex gap-16">
            <div>Cart</div>
            <div>Menu</div>
          </div>
        </div>
      </nav>;
}
  