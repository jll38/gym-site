import React from "react";
import Image from "next/image";
export function Trainer({ name, img, trainerType }) {
  const nameID = name.substring(0, name.indexOf(" ")).toLowerCase();
  return (
    <div className=" flex justify-center gap-10 text-gray-black flex-wrap mt-24">
      <div className="w-[300px] h-[400px] flex flex-col items-center justify-end">
        <div className="h-[300px] w-[300px] relative">
          <Image
            className="object-contain drop-shadow-2xl shadow-red-500 z-40 absolute sm:grayscale"
            alt={`Trainer ${name}`}
            src={img}
            fill
            id={`${nameID}-img`}
            loading="lazy"
          />
          <div
            className="absolute h-[100%] w-[50%] left-[24%] cursor-pointer z-40"
            onMouseEnter={() => {
              document.getElementById(`${nameID}-img`).classList.add("sm:grayscale-0");
            }}
            onMouseLeave={() => {
              document
                .getElementById(`${nameID}-img`)
                .classList.remove("sm:grayscale-0");
            }}
            onClick={() => {}}
          />
          <Image
            className="object-fit  shadow-red-500 z-10 bottom-0 absolute"
            alt="Trainer Backdrop"
            src="/images/spray.webp"
            fill
            loading="lazy"
          />
        </div>
        <button
          className="border h-[100px] w-full bg-white rounded-md align-bottom shadow-md py-4 text-center"
          onMouseEnter={() => {
            document.getElementById(`${nameID}-box-red-bar`).classList.add("w-full");
            document
              .getElementById(`${nameID}-box-red-bar`)
              .classList.remove("w-1/4");
          }}
          onMouseLeave={() => {
            document.getElementById(`${nameID}-box-red-bar`).classList.add("w-1/4");
            document
              .getElementById(`${nameID}-box-red-bar`)
              .classList.remove("w-full");
          }}
        >
          <div className="font-semibold text-xl tracking-[.06em]">{name}</div>
          <div className="font-medium text-gray-600">{trainerType} Trainer</div>
          <div className="font-medium text-gray-600 flex justify-center gap-5 mt-1">
            <i className="fa-brands fa-solid fa-instagram"></i>
            <i className="fa-brands fa-solid fa-facebook"></i>
            <i className="fa-brands fa-solid fa-twitter"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="flex justify-center items-end relative bottom-0 h-3">
            <div
              id={`${nameID}-box-red-bar`}
              className="h-[4px] w-1/4 bg-red-500 relative bottom-0 transition-all duration-500"
            ></div>
          </div>
        </button>
      </div>
    </div>
  );
}