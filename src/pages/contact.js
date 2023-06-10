import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const title = "Contact Us";
export default function Contact() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Any questions? Feel free to contact us here."
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
          <div className="flex justify-center w-full px-20">
            <div className="flex flex-col w-[1000px]">
              <div className="text-3xl font-medium uppercase">
                Let&apos;s get in touch
              </div>
              <div className="h-[2px] bg-red-500 my-2"></div>
              <form>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="flex flex-col w-[400px] ">
                      <label htmlFor="nameInput" className=" ">
                        Your Name
                      </label>
                      <input
                        type={"text"}
                        id="nameInput"
                        name="name_input"
                        className="block border p-2 border-red-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500"
                      ></input>
                    </div>

                    <div className="flex flex-col w-[400px]">
                      <label htmlFor="nameInput" className="text-md">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="nameInput"
                        name="name_input"
                        className="block border p-2 border-red-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500"
                      ></input>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex flex-col w-[400px] ">
                      <label htmlFor="nameInput" className=" ">
                        What You&apos;re Interested In
                      </label>
                      <input
                        type={"text"}
                        id="nameInput"
                        name="name_input"
                        className="block border p-2 border-red-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500"
                      ></input>
                    </div>

                    <div className="flex flex-col w-[400px]">
                      <label htmlFor="nameInput" className="text-md">
                        Your Goal
                      </label>
                      <input
                        type="email"
                        id="nameInput"
                        name="name_input"
                        className="block border p-2 bborder-red-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500"
                      ></input>
                    </div>
                  </div>
                  <div className="w-full h-[300px]">
                    <div>Your Message</div>
                    <textarea className="h-[200px] w-full block border p-2 border-red-500 text-gray-700 bg-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500"></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
