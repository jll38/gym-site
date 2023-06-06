import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Shop() {
  const title = "Shop";
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
          <Image src="/images/sub-page-1.webp" className="object-cover" fill />
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

        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="flex justify-center">
            <div className="h-[500px] w-[350px] border">
              <div className="h-[425px] w-full border border-red-500"></div>
              <div className="h-[75px] w-full border border-blue-500 flex flex-col items-center">
                <div className="uppercase font-medium tracking-[.1em]">
                  Essential Oversized Tee
                </div>
                <div className="uppercase text-gray-600 tracking-[.1em]">
                  $34.99
                </div>
                <div className="flex gap-1">
                  <div className="p-[2px] border">
                    <div className="w-[10px] h-[10px] bg-red-500 "></div>
                  </div>
                  <div className="p-[2px] border border-transparent">
                    <div className="w-[10px] h-[10px] bg-yellow-500 "></div>
                  </div>
                  <div className="p-[2px] border border-transparent">
                    <div className="w-[10px] h-[10px] bg-orange-800 "></div>
                  </div>
                  <div className="p-[2px] border border-transparent">
                    <div className="w-[10px] h-[10px] bg-gray-600 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
