import { SlideColorBox } from './../components/SlideColorBox';
import { ShopItem } from "./../components/ShopItem";
import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Services() {
  const title = "Services";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Various pricing options available with being a Member of Atlas Gym. Whether you're new to the gym or an experienced lifter we have a plan that fits your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <div className="h-[400px] w-full bg-black relative flex justify-center items-end">
          <Image
            src="/images/services.webp"
            className="object-cover"
            fill
            loading="lazy"
          />
          <div className="w-full h-full z-10 absolute bg-black/50"></div>
          <div className=" text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold z-30 text-white">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            {title}
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-4 justify-center items-center border-b-2 h-[600px]">
          <div className="border h-[500px] flex flex-wrap justify-center">
            <SlideColorBox idNum={1} title={"Sauna"} sub={"Post-workout relaxation"} icon={"temperature-three-quarters"}/>
            <SlideColorBox idNum={2} title={"Sauna"} sub={"Post-workout relaxation"} icon={"temperature-three-quarters"}/>
            <SlideColorBox idNum={3} title={"Sauna"} sub={"Post-workout relaxation"} icon={"temperature-three-quarters"}/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
