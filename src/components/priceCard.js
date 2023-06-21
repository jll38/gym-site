import React from "react";
import Image from "next/image";
export function PriceCard({ title, price, features, thumbnail, tier }) {
  return (
    <div
      id="price-card-1"
      className="h-[600px] w-[400px]  bg-white border flex-col"
    >
      <div
        id="price-card-1-head"
        className="h-[200px] overflow-hidden relative border-b-2 border-red-500"
        onMouseEnter={() => {
          document
            .getElementById((title.toLowerCase() + "-img").toLowerCase())
            .classList.remove("sm:grayscale");
          document
            .getElementById((title.toLowerCase() + "-title").toLowerCase())
            .classList.add("text-red-500");
        }}
        onMouseLeave={() => {
          document
            .getElementById((title.toLowerCase() + "-img").toLowerCase())
            .classList.add("sm:grayscale");
          document
            .getElementById((title.toLowerCase() + "-title").toLowerCase())
            .classList.remove("text-red-500");
        }}
      >
        <Image
          src={thumbnail}
          id={title.toLowerCase() + "-img"}
          alt={title + " tier membership thumbnail"}
          className="object-none sm:grayscale transition-all duration-400"
          width={600}
          height={300}
          loading="lazy"
        ></Image>
      </div>
      <div id="price-card-1-body" className="text-center h-[250px]">
        <div className="mx-auto relative bg-white -top-8 w-[250px] text-gray-600">
          <div
            className="text-[1.7em] font-semibold tracking-[.05em] transition-all duration-400"
            id={title.toLowerCase() + "-title"}
          >
            {title}
          </div>
          <div className="flex justify-center relative left-2">
            <div className="font-medium text-[2em]">$</div>
            <div className="text-black font-semibold text-[3em]">{price}</div>
            <div className="font-medium text-[1em] relative top-8">/Month</div>
          </div>
          <ul className="leading-[2em] text-lg">
            <li>Monthly Free Training Session</li>
            <li>General Gym Access</li>
            <li>Sauna Access</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>
      </div>
      <div className="price-card-1-footer h-[150px] flex justify-center items-center">
        <button
          id={"price-btn-" + tier}
          className="bg-white mt-4 py-4 px-6 text-sm uppercase font-bold border border-red-500 transition-all duration-300 hover:py-6 hover:px-10 hover:bg-red-500 hover:text-white"
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
}
