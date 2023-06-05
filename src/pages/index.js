import { PriceCard } from "./../components/priceCard";
import { Trainer } from "./../components/trainer";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [localAtlas, setLocalAtlas] = useState("Newark");
  return (
    <>
      <Head>
        <title>Atlas Gym</title>
        <meta
          name="description"
          content="Unlock your greatness and forge the body you want at Atlas Gym. We offer personalized training, a juice bar, sauna & spa, and professional trainers to help you achieve your fitness goals. Join now and experience a game-changing fitness journey!"
        />
        <meta
          name="keywords"
          content="Atlas Gym, gym, fitness, personalized training, juice bar, sauna, spa, professional trainers, fitness goals, membership plans, gym membership, fitness journey"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Navbar />
        <div className="flex justify-center items-center mx-auto">
          <div className="h-[85vh] overflow-hidden z-0 bg-[url('/images/landing.png')] bg-cover bg-no-repeat w-screen">
            <div
              name="bgChild"
              className="relative flex flex-col justify-center items-center sm:items-end text-left  w-full h-full pr-12"
            >
              <div className="w-full  md:w-2/5 mx-5 px-10 sm:px-5 py-10 leading-[3em] transition-all duration-300">
                <h1 className="text-white font-bold text-[1em] [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)]">
                  UNLOCK YOUR GREATNESS
                </h1>
                <div className="text-gray-100 font-bold text-[4em] [text-shadow:_0_3px_3px_rgb(0_0_0_/_40%)]">
                  FORGE THE BODY
                </div>
                <div className="text-gray-100 text-[4em] [text-shadow:_0_3px_3px_rgb(0_0_0_/_40%)] font-light">
                  YOU WANT
                </div>
                <button
                  id="hero-cta"
                  className="bg-white my-4 py-3 px-6 text-sm uppercase font-bold border border-white hover:border-red-500 transition-all duration-300"
                  onMouseEnter={() => {
                    document
                      .getElementById("hero-cta-button-arrow")
                      .classList.add("left-2");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("hero-cta-button-arrow")
                      .classList.remove("left-2");
                  }}
                  onClick={() => {
                    window.location.assign("/pricing");
                  }}
                >
                  Membership Plans{"  "}
                  <i
                    id="hero-cta-button-arrow"
                    className="relative fa-solid fa-arrow-right text-red-500 left-0 transition-all duration-200"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-orange-400">
          <div className="py-8 flex flex-col justify-center items-center text-white">
            <div className="text-sm uppercase tracking-[.5em] font-medium">
              Closest Location
            </div>
            <div className="text-lg sm:text-2xl pt-2 pb-4 tracking-[.1em] font-semibold">
              Your Local Atlas Gym&nbsp;
              <span>
                <i class="fa-solid fa-location-dot"></i>&nbsp;
                <button className="hover:tracking-[.15em] transition-all duration-300">
                  {localAtlas}
                </button>
                &nbsp;
                <button className="uppercase text-xs">Change</button>
              </span>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-4 font-medium">
                <button className="w-52 h-14 bg-white uppercase text-red-500 tracking-[.2em] hover:tracking-[.1em] transition-all duration-300">
                  Get Details
                </button>
                <button className="w-36 h-14 bg-white uppercase text-orange-500 tracking-[.2em] hover:tracking-[.1em] transition-all duration-300">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/95 flex flex-col mt-2">
          <div className="text-white text-center text-2xl my-10 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            Our Services
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>
          <div className="flex justify-center gap-10 text-gray-400 flex-wrap">
            <div className="h-[450px] min-w-[300px] max-w-[300px]w w-[300px] hover:text-gray-200 hover:bg-gray-200/5">
              <div
                name="cardHead"
                className="h-1/3 flex flex-col justify-center items-center"
              >
                <i class="fa-solid fa-dumbbell text-6xl pb-4  "></i>
                <h3 className="text-[1.5em] font-semibold">
                  Personalized Training
                </h3>
                <div className="h-1 w-1/2 bg-gray-400 mt-2"></div>
              </div>
              <div
                name="cardBody"
                className="flex flex-col justify-center items-center"
              >
                <p className="break-words w-[275px] font-medium">
                  Atlas Gym is proud to offer personalized training services
                  designed to propel you towards your unique fitness goals. Our
                  team of professional trainers utilizes cutting-edge technology
                  and individualized programs to provide a workout regimen
                  tailored specifically to you.
                </p>
              </div>
              <div name="cardFooter" className="px-3 pt-4"></div>
            </div>

            <div className="h-[450px] min-w-[300px] max-w-[300px]w w-[300px] hover:text-gray-200 hover:bg-gray-200/5">
              <div
                name="cardHead"
                className="h-1/3 flex flex-col justify-center items-center"
              >
                <i class="fa-solid fa-martini-glass-empty text-6xl pb-4"></i>
                <h3 className="text-[1.5em] font-semibold">Juice Bar</h3>
                <div className="h-1 w-1/2 bg-gray-400 mt-2"></div>
              </div>
              <div
                name="cardBody"
                className="flex flex-col justify-center items-center"
              >
                <p className="break-words w-[275px] font-medium">
                  Energize your body and mind at the Atlas Gym Juice Bar.
                  Discover our wide variety of fresh smoothies, specifically
                  designed to aid in recovery, fuel your workout, or simply to
                  refresh you on a hot day. Our offerings are prepared
                  on-the-spot, using only the highest quality fruits,
                  vegetables, and whey protein.
                </p>
              </div>
              <div name="cardFooter" className="px-3"></div>
            </div>

            <div className="h-[450px] min-w-[300px] max-w-[300px]w w-[300px] hover:text-gray-200 hover:bg-gray-200/5">
              <div
                name="cardHead"
                className="h-1/3 flex flex-col justify-center items-center"
              >
                <i class="fa-solid fa-temperature-arrow-up text-6xl pb-4"></i>
                <h3 className="text-[1.5em] font-semibold">Sauna & Spa</h3>
                <div className="h-1 w-1/2 bg-gray-400 mt-2"></div>
              </div>
              <div
                name="cardBody"
                className="flex flex-col justify-center items-center"
              >
                <p className="break-words w-[275px] font-medium">
                  Energize your body and mind at the Atlas Gym Juice Bar.
                  Discover our wide variety of fresh smoothies, specifically
                  designed to aid in recovery, fuel your workout, or simply to
                  refresh you on a hot day. Our offerings are prepared
                  on-the-spot, using only the highest quality fruits,
                  vegetables, and whey protein.
                </p>
              </div>
              <div name="cardFooter" className="px-3"></div>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col">
          <div className="bg-[url('/images/18410.jpg')] bg-cover h-max bg-opacity-10 py-8">
            <div className="text-black  text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
              <span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
              </span>
              Professional Trainers
              <span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
              </span>
            </div>
            <div className="flex justify-center">
              <div className="max-w-[400px] text-center text-gray-700 font-medium">
                Our team of expert coaches is dedicated to help you acheive your
                goals with personal guidance and motivation!
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-24 ">
              <Trainer
                name="Adam Doe"
                img="/images/trainers/adam-doe-transparent.png"
                trainerType={"Crossfit"}
              />
              <Trainer
                name="The Arnold"
                img="/images/trainers/arnold-transparent.png"
                trainerType={"Bodybuilding"}
              />
              <Trainer
                name="Marie D. Thomas"
                img="/images/trainers/marie-thomas-transparent-2.png"
                trainerType={"Lifestyle"}
              />
            </div>

            <div></div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-8 items-center border-b-2">
          <div className="text-black  text-center text-2xl mt-10 mb-5 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold">
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
            Testimonials
            <span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-orange-600"></div>
            </span>
          </div>

          <div className="flex max-w-[1000px] mx-10 my-16">
            <div className="h-[425px] w-[250px]  rounded-tr-[6.7em] relative overflow-hidden hidden md:block">
              <Image
                className="object-cover z-10 "
                alt="Fit Atlas Gym Member With Testimonial"
                src="/images/testimonial-guy.webp"
                fill
              />
            </div>
            <div className="max-w-[750px]">
              <div className="h-[100px]"></div>
              <div className="h-[325px] px-4 py-6 bg-black text-white align-bottom md:pl-24">
                <i className="fa-solid fa-quote-right text-white text-[2em] sm:text-[3.5em]"></i>
                <div
                  id="testimonial text"
                  className="font-thin italic text-[.8em] sm:text-[1em] md:text-[1.1em]"
                >
                  &quot;The Atlas Gym has truly been a game-changer in my
                  fitness journey. Its welcoming environment, top-notch
                  equipment, and expert trainers have supported me in surpassing
                  my fitness goals. From tailor-made personal training plans to
                  diverse group classes, they offer an all-encompassing approach
                  to health. Thanks to Atlas Gym, I am stronger, healthier, and
                  more confident than ever.&quot;
                </div>
                <div className="flex justify-between h-[100px]">
                  <div>
                    <div className="font-semibold text-md sm:text-2xl">
                      Matthew M. Walsh
                    </div>
                    <div className="text-sm sm:text-md">Fitness Influencer</div>
                  </div>
                  <div className="flex flex-col h-[px] justify-end">
                    <div className="flex gap-4">
                      <button
                        id="testimonial-left-btn"
                        className="bg-white my-4 py-3 px-6 text-sm uppercase font-bold text-black hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        <i
                          id="testimonial-left-arrow"
                          className="relative fa-solid fa-arrow-left"
                        ></i>
                      </button>
                      <button
                        id="testimonial-right-btn"
                        className="bg-white my-4 sm:py-3 px-6 text-sm uppercase font-bold text-black hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        <i
                          id="testimonial-right-arrow"
                          className="relative fa-solid fa-arrow-right"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black  text-center text-xl mt-10 mb-10 tracking-[.1em] uppercase flex justify-center items-center gap-2 font-semibold underline">
            Brands We Work With
          </div>
          <div className="flex justify-center w-screen pb-4">
            <div className="flex justify-evenly w-[1080px] flex-wrap gap-10 child:opacity-60 child-hover:opacity-100">
              <div className="w-[200px] h-[100px] relative">
                <Image
                  className="object-scale-down"
                  src="/images/brands/gymshark.png"
                  fill
                ></Image>
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image
                  className="object-scale-down"
                  src="/images/brands/ryse.png"
                  fill
                ></Image>
              </div>
              <div className="w-[200px] h-[100px] relative">
                <Image
                  className="object-scale-down"
                  src="/images/brands/bodybuilding-com.png"
                  fill
                ></Image>
              </div>
              <div className="w-[200px] h-[100px] relative  ">
                <Image
                  className="object-scale-down"
                  src="/images/brands/news.png"
                  fill
                ></Image>
              </div>
            </div>
          </div>
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
