import { ShopItem } from "./../components/ShopItem";
import { PriceCard } from "./../components/priceCard";
import { Footer } from "./../components/footer";
import { Navbar } from "./../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Shop() {
  const title = "Shop";
  const [male, setMale] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

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
            src="https://cdn.shopify.com/s/files/1/1775/6429/files/465_new_desk_8a59c064-4cd8-4ed7-b231-4dcb28792031_1600x.png?v=1685729660"
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

        <button className="fixed w-[75px] h-[75px] bg-white border-2 rounded-full right-0 mx-12 flex justify-center items-center text-2xl hover:text-red-500 transition-all duration-200">
          <div
            className={`flex relative ${cartItems.length != 0 ? "left-1" : ""}`}
          >
            <i class="fa-solid fa-bag-shopping "></i>
            {cartItems.length != 0 ? (
              <div className="relative top-3">{cartItems.length}</div>
            ) : (
              <></>
            )}
          </div>
        </button>

        

        <div className="bg-white flex flex-col items-center border-b-2">
          <div className="flex justify-center gap-20 my-8 text-2xl font-medium ">
            <button
              className={`uppercase tracking-[.15em] border-b-2 ${
                male
                  ? "text-gray-800 border-gray-600   "
                  : "text-gray-600 border-transparent"
              } transition-all duration-200`}
              onClick={() => {
                document
                  .getElementById("shop-box")
                  .classList.remove("animate-fade");

                setTimeout(function () {
                  document
                    .getElementById("shop-box")
                    .classList.add("animate-fade");
                  setMale(true);
                }, 100);
              }}
            >
              For Him
            </button>
            <button
              className={`uppercase tracking-[.15em] border-b-2 ${
                !male
                  ? "text-gray-800 border-gray-600"
                  : "text-gray-600 border-transparent"
              }`}
              onClick={() => {
                document
                  .getElementById("shop-box")
                  .classList.remove("animate-fade");

                setTimeout(function () {
                  document
                    .getElementById("shop-box")
                    .classList.add("animate-fade");
                  setMale(false);
                }, 100);
              }}
            >
              For Her
            </button>
          </div>
          <div
            id="shop-box"
            className="flex flex-wrap justify-center gap-20 max-w-[3840px] transform-all duration-150 mx-24 pb-12"
          >
            {male ? (
              <>
                <ShopItem
                  name="Essential Oversized Tee"
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"
                  }
                />
                <ShopItem
                  name="Corduroy Supersized Tee"
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/YLA12.2_600x.jpg?v=1670460053"
                  }
                />
                <ShopItem
                  name="Pleated Festival Shirt"
                  price={39.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/files/YLA_Malibu_D5-30_0001_6360b23a-a97c-4009-94cd-e02222d0208a_600x.jpg?v=1685470270"
                  }
                />
                <ShopItem
                  name="Perfect Pocket Tee"
                  price={31.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/YLA10.14.21-111_600x.jpg?v=1653085298"
                  }
                />
                <ShopItem
                  name="The Flock Tees"
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/Floorpicture_1_1_600x.jpg?v=1653075822"
                  }
                />
                <ShopItem
                  name="Perfect Tee - Scallop Bottom"
                  price={31.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/untitled-61_600x.jpg?v=1653082379"
                  }
                />
              </>
            ) : (
              <>
                <ShopItem
                  name="W209 LEVEL UP LEGGINGS"
                  price={44.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/files/YLA_HER_Victoria_May_18_202314072_600x.jpg?v=1685041054"
                  }
                />
                <ShopItem
                  name="Essential Oversized Tee 2"
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"
                  }
                />
                <ShopItem
                  name="Essential Oversized Tee 3 "
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"
                  }
                />
                <ShopItem
                  name="Essential Oversized Tee 4"
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"
                  }
                />
                <ShopItem
                  name="Essential Oversized Tee 5"
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"
                  }
                />
                <ShopItem
                  name="Essential Oversized Tee 6"
                  price={34.99}
                  img={
                    "https://cdn.shopify.com/s/files/1/1775/6429/products/DSC01331_800x.jpg?v=1653094875"
                  }
                />
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
