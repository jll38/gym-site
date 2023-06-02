import { TrainerBox } from "./../components/trainer-box";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import YouTube from "react-youtube";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currTrainer, setcurrTrainer] = useState("Marcus");

  const videoOpts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <Head>
        <title>Atlas Gym</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <div className="flex justify-center items-center mx-auto border-b border-red-500">
  <div className="h-[80vh] overflow-hidden z-0 bg-[url('/images/landing.jpeg')] bg-cover bg-no-repeat w-screen">
    <div name="bgChild" className="flex flex-col justify-center  text-center sm:text-left sm:ml-24 w-full h-full">
      <div className="flex justify-between sm:w-1/4 text-3xl text-gray-200 mx-24 sm:mx-0">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <h1 className="text-white font-bold text-[3em] sm:text-[4em] [text-shadow:_0_6px_0_rgb(0_0_0_/_40%)] sm:w-1/2">
        UNLOCK YOUR GREATNESS
      </h1>
      <div className="text-gray-300 text-[1.5em] sm:text-[1.2em] md:text-[2em] [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] md:w-3/4 lg:w-1/3">
        Memberships Plans starting from $45 Per Month!
      </div>
    </div>
  </div>
</div>

        <div className="bg-black/95">
          <div className="flex justify-center mb-20">
            <div className=" h-[425px] py-24 flex sm:flex-row flex-col gap-[2rem] md:gap-[4rem] lg:gap-[20rem] text-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-[2em] sm:text-[3em]">Welcome to</div>
                <h2 className="text-[3em] sm:text-[4em] font-bold">
                  ATLAS GYM
                </h2>
                <div className="text-[1.3em] sm:text-[2em]">
                  View our{" "}
                  <Link
                    className="underline hover:text-gray-400"
                    href="/memberships"
                  >
                    Membership Plans
                  </Link>
                </div>
                <button
                  onClick={() => {
                    window.location.assign("/shop");
                  }}
                  className="mt-4text-gray-200 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                >
                  Shop Merchandise
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={"https://www.youtube.com/embed/Y5RtQ4cawVk"}
                  title={"Atlas Gym"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mx-10 sm:mx-24">
            <hr className="my-6 border-red-500 sm:mx-auto lg:my-8 " />
          </div>
        </div>
        <div className="bg-black/95 flex flex-col">
          <div className="h-[600px] flex justify-center gap-10 text-gray-400 flex-wrap">
            <div className="h-[450px] min-w-[300px] max-w-[300px]w w-[300px] hover:text-gray-200 hover:bg-gray-200/5">
              <div
                name="cardHead"
                className="h-1/3 flex flex-col justify-center items-center"
              >
                <i class="fa-solid fa-dumbbell text-6xl pb-4  "></i>
                <h3 className="text-[1.5em]">Personalized Training</h3>
                <div className="h-1 w-1/2 bg-gray-400 mt-2"></div>
              </div>
              <div
                name="cardBody"
                className="flex flex-col justify-center items-center"
              >
                <p className="break-words w-[275px]">
                  Atlas Gym is proud to offer personalized training services
                  designed to propel you towards your unique fitness goals. Our
                  team of professional trainers utilizes cutting-edge technology
                  and individualized programs to provide a workout regimen
                  tailored specifically to you.
                </p>
              </div>
              <div name="cardFooter" className="px-3 pt-4">
                <button className="text-gray-200 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
                  View
                </button>
              </div>
            </div>

            <div className="h-[450px] min-w-[300px] max-w-[300px]w w-[300px] hover:text-gray-200 hover:bg-gray-200/5">
              <div
                name="cardHead"
                className="h-1/3 flex flex-col justify-center items-center"
              >
                <i class="fa-solid fa-martini-glass-empty text-6xl pb-4"></i>
                <h3 className="text-[1.5em]">Juice Bar</h3>
                <div className="h-1 w-1/2 bg-gray-400 mt-2"></div>
              </div>
              <div
                name="cardBody"
                className="flex flex-col justify-center items-center"
              >
                <p className="break-words w-[275px]">
                  Energize your body and mind at the Atlas Gym Juice Bar.
                  Discover our wide variety of fresh smoothies, specifically
                  designed to aid in recovery, fuel your workout, or simply to
                  refresh you on a hot day. Our offerings are prepared
                  on-the-spot, using only the highest quality fruits,
                  vegetables, and whey protein.
                </p>
              </div>
              <div name="cardFooter" className="px-3">
                <button className="text-gray-200 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg ">
                  View
                </button>
              </div>
            </div>

            <div className="h-[450px] min-w-[300px] max-w-[300px]w w-[300px] hover:text-gray-200 hover:bg-gray-200/5">
              <div
                name="cardHead"
                className="h-1/3 flex flex-col justify-center items-center"
              >
                <i class="fa-solid fa-temperature-arrow-up text-6xl pb-4"></i>
                <h3 className="text-[1.5em]">Sauna & Spa</h3>
                <div className="h-1 w-1/2 bg-gray-400 mt-2"></div>
              </div>
              <div
                name="cardBody"
                className="flex flex-col justify-center items-center"
              >
                <p className="break-words w-[275px]">
                  Energize your body and mind at the Atlas Gym Juice Bar.
                  Discover our wide variety of fresh smoothies, specifically
                  designed to aid in recovery, fuel your workout, or simply to
                  refresh you on a hot day. Our offerings are prepared
                  on-the-spot, using only the highest quality fruits,
                  vegetables, and whey protein.
                </p>
              </div>
              <div name="cardFooter" className="px-3">
                <button className="text-gray-200 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg ">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/95 flex flex-col pb-10">
          <div className="h-[600px] flex justify-center gap-10 text-gray-400 flex-wrap">
            <div className="grid md:grid-cols-2  gap-10 md:gap-0">
              <TrainerBox h={600} w={400} img="/images/trainers/marcus.png" />
              <div className="grid grid-cols-2">
                <TrainerBox
                  name="Marcus"
                  selected
                  img="/images/trainers/marcus.png"
                />
                <TrainerBox name="Fred" img="/images/trainers/fred.jpeg" />
                <TrainerBox name="Alyssa" img="/images/trainers/alyssa.jpg" />
                <TrainerBox name="John" img="/images/trainers/fred.jpeg" />
                <TrainerBox name="Jane" img="/images/trainers/fred.jpeg" />
                <TrainerBox name="Nick" img="/images/trainers/nick.png" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
      <footer className="bg-black/95">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/atlas-logo.png"
                  className="h-32 mr-3"
                  alt="Atlas Gym Logo"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibol uppercase text-white">
                  Services
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Request Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Memberships
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul className="text-gray-400  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-red-500 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-200 sm:text-center ">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                Atlas Gym™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="text-sm flex mt-4sm:justify-center sm:mt-0 text-gray-200 flex-col">
              <div className="text-lg font-medium">Contact</div>
              <a href="mailto:example@example.com">management@atlasgym.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
