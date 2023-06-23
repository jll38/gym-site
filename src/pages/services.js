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

        <div className="bg-white flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-wrap justify-center gap-2 py-10 max-w-[1800px]">
            <SlideColorBox idNum={1} title={"Personalized Training"} sub={"Work with experienced trainers to achieve your goals"} icon={"dumbbell"} img="/images/trainer.webp"/>
            <SlideColorBox idNum={2} title={"Sauna"} sub={"Post-workout relaxation"} icon={"temperature-three-quarters"} img="/images/sauna.webp"/>
            <SlideColorBox idNum={3} title={"Juice Bar"} sub={"Come for a refreshing pre-workout drink or protein smoothie"} icon={"martini-glass"} img="/images/protein.webp"/>
            <SlideColorBox idNum={4} title={"Group Classes"} sub={"Make some friends and get a killer workout in"} icon={"people-group"} img="/images/group.jpeg"/>
            <SlideColorBox idNum={5} title={"Childcare"} sub={"Don't let life slow you down from your fitness goals"} icon={"child"} img="/images/daycare.jpeg"/>
            <SlideColorBox idNum={6} title={"Spa"} sub={"Post-workout relaxation"} icon={"spa"} img="/images/spa.jpeg"/>


          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
