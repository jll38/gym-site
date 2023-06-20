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

        <div className="bg-white flex flex-col justify-center items-center border-b-2 h-[600px]">
            <div className="border h-[500px] grid grid-cols-3">
                <div
                onMouseEnter={() => {
                    document.getElementById('service-1-box').classList.remove('top-[450px]', 'bg-gray-800')

                    document.getElementById('service-1-box').classList.add('top-0', 'bg-red-600/90')
                }}
                onMouseLeave={() => {
                    document.getElementById('service-1-box').classList.remove('top-0', 'bg-red-600/90')

                    document.getElementById('service-1-box').classList.add('top-[450px]', 'bg-gray-800')
                }}
                className="border-red-500 border w-[450px] bg-[url('/images/skipped-legs.webp')] bg-cover bg-no-repeat bg-center h-[500px] overflow-hidden">
                    <div id="service-1-box"className="bg-gray-800 z-50 h-0 transition-all duration-300 top-[450px] h-[500px] relative flex justify-center">
                        <div className="text-white top-2 relative text-lg uppercase font-medium">Sauna</div>
                    </div>
                </div>
                <div className="border-red-500 border w-[450px]">

                </div>
                <div className="border-red-500 border w-[450px]">

                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
