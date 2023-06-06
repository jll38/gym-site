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
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Various pricing options available with being a Member of Atlas Gym. Whether you're new to the gym or an experienced lifter we have a plan that fits your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white ">
        <Navbar solid/>
        <div className="flex flex-col items-center">
          <div className="bg-white flex flex-col py-8 items-center ">
            <div className="text-black  text-center text-4xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold pt-10">
              <span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
              </span>
              Page Not Found
              <span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
              </span>
            </div>
            <div className="text-center font-medium text-gray-600 text-[1.1em]">
              The page you&apos;re looking for skipped leg day. <br/>
            </div>
          </div>
          <div className="h-[400px] w-[300px]  relative mb-10 border-black border-4">
            <Image
              src="/images/skipped-legs.webp"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
