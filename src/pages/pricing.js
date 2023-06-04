import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Various pricing options available with being a Member of Atlas Gym. Whether you're new to the gym or an experienced lifter we have a plan that fits your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <div className="h-[400px] w-full bg-black relative ">
          <Image src="/images/sub-page-1.jpg" className="object-cover" fill />
        </div>


        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="text-black  text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            Pricing
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center gap-10 flex-wrap">
              <PriceCard
                title={"Newcomer"}
                price="29.99"
                features={""}
                thumbnail="/images/pricing/pricing-2.jpg"
              />
              <PriceCard
                title={"Experienced"}
                price="49.99"
                features={""}
                thumbnail="/images/pricing/pricing-1.jpeg"
              />
              <PriceCard
                title={"Mr. Olympia"}
                price="59.99"
                features={""}
                thumbnail="/images/pricing/pricing-3.jpeg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
