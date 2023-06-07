import { ShopItem } from './../components/ShopItem';
import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Shop() {
  const title = "Shop";
  const [male, setMale] = useState(true);

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

        <div className="bg-white flex flex-col items-center border-b-2">
            <div className='flex justify-center gap-20 my-8 text-2xl font-medium '>
                <button className={`uppercase tracking-[.15em] ${male ? "text-gray-800" : "text-gray-600"}`} onClick={() => {setMale(true)}}>For Him</button>
                <button className={`uppercase tracking-[.15em] ${!male ? "text-gray-800" : "text-gray-600"}`} onClick={() => {setMale(false)}}>For Her</button>
            </div>
          <div className="flex flex-wrap justify-center gap-20 max-w-[3840px] transform-all duration-150 mx-24  ">
            <ShopItem name="Essential Oversized Tee 1" price={34.99} img={"https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"}/>
            <ShopItem name="Essential Oversized Tee 2" price={34.99} img={"https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"}/>
            <ShopItem name="Essential Oversized Tee 3 " price={34.99} img={"https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"}/>
            <ShopItem name="Essential Oversized Tee 4" price={34.99} img={"https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"}/>
            <ShopItem name="Essential Oversized Tee 5" price={34.99} img={"https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"}/>
            <ShopItem name="Essential Oversized Tee 6" price={34.99} img={"https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"}/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
