import React from "react";
export function SlideColorBox({ idNum, title, sub, icon }) {
  return (
    <div
      onMouseEnter={() => {
        //Remove Classes
        document
          .getElementById("service-" + idNum + "-box")
          .classList.remove("top-[440px]", "bg-zinc-800");
        document
          .getElementById("service-" + idNum + "-title")
          .classList.remove("-top-10");
        document
          .getElementById("service-" + idNum + "-icon")
          .classList.remove("-top-8", "text-white", "child:bg-zinc-800"); //Add Classes

        document
          .getElementById("service-" + idNum + "-box")
          .classList.add("top-[0px]", "bg-red-600/90");
        document
          .getElementById("service-" + idNum + "-title")
          .classList.add("top-10");
        document
          .getElementById("service-" + idNum + "-icon")
          .classList.add("top-6", "text-red-600", "child:bg-white");
      }}
      onMouseLeave={() => {
        //Remove Classes
        document
          .getElementById("service-" + idNum + "-box")
          .classList.remove("top-[0px]", "bg-red-600/90");
        document.getElementById("service-" + idNum + "-title").classList.remove("top-10");
        document
          .getElementById("service-" + idNum + "-icon")
          .classList.remove("top-6", "text-red-600", "child:bg-white"); //Add Classes

        document
          .getElementById("service-" + idNum + "-box")
          .classList.add("top-[440px]", "bg-zinc-800");
        document
          .getElementById("service-" + idNum + "-title")
          .classList.add("-top-10");
        document
          .getElementById("service-" + idNum + "-icon")
          .classList.add("-top-8", "text-white", "child:bg-zinc-800");
      }}
      className="border-red-500 border w-[450px] bg-[url('/images/sauna.webp')] bg-cover bg-no-repeat bg-center h-[500px] overflow-hidden"
    >
      <div
        id={"service-" + idNum + "-box"}
        className="bg-zinc-800 z-50 transition-all duration-300 top-[440px] h-[500px] relative flex flex-col items-center px-10"
      >
        <div
          id={"service-" + idNum + "-icon"}
          className="w-full flex justify-center relative -top-8 text-white transition-all duration-300 child:bg-zinc-800"
        >
          <div className="w-[60px] h-[60px] relative  rounded-full flex justify-center items-center ">
            <i class={`fa-solid fa-${icon} text-3xl`}></i>
          </div>
        </div>
        <div
          id={"service-" + idNum + "-title"}
          className="text-white -top-10  relative  uppercase font-medium transition-all duration-300"
        >
          <div className="text-center uppercase text-lg">{title}</div>
          <div className="relative top-28 text-white text-md font-medium">
            {sub}
          </div>
        </div>
      </div>
    </div>
  );
}
