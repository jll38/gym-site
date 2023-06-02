import React from "react";
import Image from "next/image";

export function TrainerBox({ ...props }) {
  return (
    <button
      className={`relative border-2  border-red-500 w-[${
        props.w ? props.w : "200"
      }px] h-[${props.h ? props.h : "200"}px] overflow-hidden`}
    >
      <Image
        src={props.img ? props.img : "/images/trainers/marcus.png"}
        layout="fill"
        objectFit="cover"
        className={`object-cover w-full h-full ${
          props.selected ? "opacity-40" : ""
        }`}
      />
          (props.main ? () :{" "}
      <div className="absolute bottom-0 bg-opacity-60 bg-black text-white w-full text-center py-2 uppercase font-bold">
        {props.name}
      </div>
      )
    </button>
  );
}
