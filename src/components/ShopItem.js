import React from "react";
import { useState } from "react";
import Image from "next/image";
export function ShopItem({ name, price, img, colors }) {
  const [color, setColor] = useState("red");

  function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
    str = str.toLowerCase(); // convert string to lowercase
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-"); // remove consecutive hyphens
    return str;
  }

  const handleColorSelection = (e) => {
    setColor(e.currentTarget.dataset.color);
  };

  return (
    <button className="h-[650px] w-[350px] ">
      <div
        className="h-[500px] w-full relative mb-4 overflow-hidden"
        onMouseEnter={() => {
          document
            .getElementById(slugify(name) + "-img")
            .classList.add("scale-105");
        }}
        onMouseLeave={() => {
          document
            .getElementById(slugify(name) + "-img")
            .classList.remove("scale-105");
        }}
      >
        <Image
          src={img}
          className={"object-cover transform-all duration-300"}
          alt={name + " Photo"}
          id={slugify(name) + "-img"}
          fill
          loading="lazy"
        />
      </div>
      <div className="h-[75px] w-full  flex flex-col items-center">
        <div className="uppercase font-light tracking-[.1em]">{name}</div>
        <div className="uppercase font-light  text-gray-600 tracking-[.1em]">
          ${price}
        </div>
        <div className="flex gap-1">
          <button
            data-color="red"
            className={`p-[2px] border ${
              color == "red" ? "" : "border-transparent"
            }`}
            onClick={(e) => handleColorSelection(e)}
          >
            <div
              id={slugify(name) + "-red"}
              className="w-[10px] h-[10px] bg-red-500"
            ></div>
          </button>
          <button
            data-color="yellow"
            className={`p-[2px] border ${
              color == "yellow" ? "" : "border-transparent"
            }`}
            onClick={(e) => handleColorSelection(e)}
          >
            <div
              id={slugify(name) + "-yellow"}
              className="w-[10px] h-[10px] bg-yellow-500 "
            ></div>
          </button>
          <button
            data-color="brown"
            className={`p-[2px] border ${
              color == "brown" ? "" : "border-transparent"
            }`}
            onClick={(e) => handleColorSelection(e)}
          >
            <div
              id={slugify(name) + "-brown"}
              className="w-[10px] h-[10px] bg-orange-800 "
            ></div>
          </button>
          <button
            data-color="gray"
            className={`p-[2px] border ${
              color == "gray" ? "" : "border-transparent"
            }`}
            onClick={(e) => handleColorSelection(e)}
          >
            <div
              id={slugify(name) + "-gray"}
              className="w-[10px] h-[10px] bg-gray-600 "
            ></div>
          </button>
        </div>
      </div>
      <div>
        <button
          id={slugify(name) + "-cart-btn"}
          className="bg-gray-200 w-full py-2 text-gray-700 hover:underline hover:bg-gray-300/75 transition-all duration-150 border-2 "
          onClick={() => {
            document
              .getElementById(slugify(name) + "-cart-btn")
              .classList.add("border-blue-500");
              setTimeout(() => {
                document
              .getElementById(slugify(name) + "-cart-btn")
              .classList.remove("border-blue-500");
              }, "100");
          }}
        >
          Add to Cart
        </button>
      </div>
    </button>
  );
}
