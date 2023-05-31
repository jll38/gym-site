import { Carousel } from "./../components/Carousel";
import { Navbar } from "./../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { Inter } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function Home() {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const topSearch = [
    [
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/bullet-train.jpeg",
      "/image/redemption.jpg",
      "/image/skyfall-movie-poster-james-bond-daniel-craig-2012.jpg",
      "/image/bcs.jpeg",
    ],
    [
      "/image/seinfeld.jpeg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
    ],
    [
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
      "/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg",
    ],
  ];

  const currWatching = [
    ["/image/bullet-train.jpeg", "/image/bcs.jpeg"],
    [],
    [],
  ];
  useEffect(() => {
    setPlaying(true);
    if (window.screen.width < 650) {
      playerRef.current.muted = true;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white">
        <Navbar transparent={true} />
        <div className="block sm:hidden">
          <div className="absolute h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] xl:h-[90vh] bg-gradient-to-t from-transparent via-transparent to-netflix-bg z-30 w-full sm:block hidden"></div>
        </div>
        <div
          id="billboard"
          className="relative h-[30vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] xl:h-[90vh] overflow-hidden z-10 sm:block hidden"
        >
          <div className="absolute h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] xl:h-[90vh] z-40 w-1/2 flex justify-center items-center -top-10">
            <div className="text-left w-full px-16 md:px-24 lg:px-24 flex flex-col gap-6">
              <div className="sm:h-[8rem] sm:w-[14rem] md:h-[10rem] md:w-[16rem] lg:h-[12rem] lg:w-[20rem] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/image/revenge-of-the-sith-dplus-logotitle-800_53d94418.png"
                    className="max-h-full max-w-full"
                    alt="Billboard Movie Logo"
                    fill
                  />
                </div>
              </div>

              <div className="xl:block hidden drop-shadow-lg w-3/4">
                The climactic chapter of the Star Wars prequel trilogy,
                depicting the tragic fall of Jedi Knight Anakin Skywalker to the
                dark side, his transformation into Darth Vader, and the rise of
                the Galactic Empire under Emperor Palpatine&apos;s manipulative
                reign.
              </div>
              <div className="flex flex-row gap-6 text-xs sm:text-sm sm:h-10">
                <button className="rounded-md bg-white text-gray-900 hover:bg-white/75 flex px-5 gap-4 justify-center items-center">
                  <i className="fa-solid fa-play pt-1"></i>
                  <div>Play</div>
                </button>
                <button className="rounded-md bg-gray-700/70 hover:bg-gray-700/50 text-white py-5.5 flex px-5 gap-4 justify-center items-center top-0">
                  <i className="fa-solid fa-circle-info"></i>
                  <div className="sm:block hidden">More Info</div>
                </button>
                <button
                  className={`text-xl left-0 w-1/8 ${!playing ? "hidden" : ""}`}
                  onClick={() => {
                    if (muted === true) {
                      setMuted(false);
                    } else {
                      setMuted(true);
                    }
                  }}
                >
                  {muted ? (
                    <i className="fa-solid fa-volume-xmark"></i>
                  ) : (
                    <i className="fa-sharp fa-solid fa-volume-high"></i>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="absolute h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] xl:h-[90vh] bg-gradient-to-l from-transparent via-transparent to-netflix-bg  z-30 w-1/2"></div>
          <div className="absolute h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[70vh] xl:h-[90vh] bg-gradient-to-b from-transparent via-transparent to-netflix-bg z-30 w-full"></div>
          <div className="relative w-full h-0 pb-[110%] bottom-36 sm:block hidden">
            {playing ? (
              <>
                <div className="md:mt-0">
                  <div className="absolute h-[58%] lg:h-[50%] bg-gradient-to-b from-transparent  to-netflix-bg z-30 w-full"></div>
                  <DynamicReactPlayer
                    playsinline
                    ref={playerRef}
                    url="/video/rots.mp4"
                    className="relative top-24 left-0 w-full h-full"
                    width={"100%"}
                    height={"100%"}
                    playing={playing}
                    onReady={() => console.log("onReady")}
                    onStart={() => console.log("onStart")}
                    onPlay={() => console.log("onPlay")}
                    onBuffer={() => console.log("onBuffer")}
                    onError={(e) => console.log("onError", e)}
                    onEnded={() => {
                      setPlaying(false);
                    }}
                    muted={muted}
                  />
                </div>
                <div></div>
              </>
            ) : (
              <Image
                src="/image/530478.jpg"
                alt="Billboard Thumbnail Image"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            )}
          </div>
        </div>
        <div className="relative sm:-top-16 lg:-top-36 z-20">
          <Carousel header={"Top Searches"} images={topSearch} />
          <Carousel
            header={"Currently Watching"}
            images={currWatching}
            watching={true}
          />
        </div>
      </main>
    </>
  );
}
