import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import YouTube from "react-youtube";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <main>
        <nav
          id="nav"
          className="flex justify-start bg-black px-10 text-gray-300 gap-5 shadow-md shadow-gray-900/75"
        >
          <div className="ml-6 sm:ml-[16%] h-20 w-36 relative">
            <Image
              className="object-contain"
              src="/images/atlas-logo.png"
              layout="fill"
            />
          </div>

          <div className="md:ml-[10%] flex gap-2 sm:gap-10 md:gap-20">
            <button className="hover:text-gray-200">About</button>
            <button className="hover:text-gray-200">Services</button>
            <button className="hover:text-gray-200">Atlas Crossfit</button>
            <button className="hover:text-gray-200">Shop</button>
          </div>
        </nav>
        <div className="flex justify-center mx-auto">
          <div className="h-[80vh] overflow-hidden z-0 bg-[url('/images/landing.jpeg')] bg-contain sm:bg-cover bg-no-repeat w-screen">
            <div className="text-center sm:text-left sm:ml-24 w-fullflex items-center relative top-24 sm:top-60 ">
              <h1 className="text-white font-bold text-[2em] sm:text-[4em] md:text-[5em] [text-shadow:_0_6px_0_rgb(0_0_0_/_40%)]">
                UNLOCK YOUR GREATNESS
              </h1>
              <div className="text-gray-300 text-[1em] sm:text-[1.2em] md:text-[2em] [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
                Membership starting from $50 Per Month
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-black/90">
          <div className=" h-[425px] py-24 flex gap-[20rem] text-gray-200">
          <div className="">
            <div className="text-[3em]">Welcome to</div>
            <h2 className="text-[4em] font-bold">ATLAS GYM</h2>
            <div className="text-[2em]">
              View our{" "}
              <Link
                className="underline hover:text-gray-400"
                href="/memberships"
              >
                Membership Plans
              </Link>
            </div>
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
      </main>
    </>
  );
}