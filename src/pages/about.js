import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const title = "About Us";
export default function Pricing() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="This is the story of Atlas Gym, from humble beginnings to where we are today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <div className="h-[400px] w-full bg-black relative flex justify-center items-end">
          <Image
            src="/images/sub-page-1.webp"
            className="object-cover"
            fill
            loading="lazy"
          />
          <div className="w-full h-full z-10 absolute bg-black/50"></div>
          <div className="text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold z-30 text-white">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            {title}
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>
        </div>

        <div className="bg-[url('/images/18410.webp')] bg-cover flex flex-col py-8 items-center border-b-2">
          <div className="flex justify-center w-full">
            <div className="w-[400px] text-xs  sm:text-lg sm:w-[700px] md:w-[1000px] mx-[2rem] sm:mx-[6rem] text-gray-700 child:mb-2 border-4 border-black px-[1rem] sm:px-[4rem] py-[2rem]">
              <h2 className="text-4xl text-black font-semibold text-center">
                Our Story
              </h2>
              <div className="indent-[2rem] font-medium sm:text-[1.5rem] sm:leading-10">
                At Atlas Gym, we&apos;re more than just a fitness center;
                we&apos;re a community dedicated to helping individuals reach
                their personal zenith. Founded in 2010 by a trio of health and
                fitness enthusiasts - John, Sarah, and Mike - who were driven by
                their passion for helping people discover their physical
                potential, Atlas Gym was born. Over the years, we&apos;ve stayed
                true to our roots while evolving to meet the needs of a diverse
                community. Starting in a modest 2000 sq ft facility, our
                founders realized the demand for a gym that catered not just to
                bodybuilders and fitness models, but also to everyday people
                seeking to lead healthier lives. Today, Atlas Gym has grown to
                become a household name in the fitness industry. We&apos;ve
                expanded to over 20,000 sq ft, equipped with state-of-the-art
                fitness equipment, diverse workout spaces, and an array of
                innovative programs. Our commitment to providing an inclusive
                fitness environment has led us to house over 10,000 active
                members from all walks of life.
              </div>

              <h2 className="text-3xl text-black font-semibold">Our Vision</h2>
              <div className="indent-[2rem] font-medium sm:text-[1.5rem] sm:leading-10">
                Atlas Gym envisions a world where fitness is not just a goal but
                a lifestyle. We believe in the power of fitness to transform
                lives, inspire change, and create a positive impact. Our vision
                guides us in everything we do, from designing our gym facilities
                to crafting our fitness programs and hiring our staff.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
