import { Navbar } from "./../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="h-full leading-[4em]">
          <h1 className="text-[6em] text-center font-bold">Shotime</h1>
          <div className="text-center text-off-gray font-medium">
            Your ultimate shoe destination
          </div>
        </div>
        <div className="flex justify-between items-end text-off-white">
          <div className="h-[100px] hover:h-[600px] w-[300px] bg-gradient-to-tr from-red-800 to-red-400 rounded-t-[2em] flex flex-col justify-center items-center transition-all duration-500">
            <div className="text-center  uppercase font-bold text-4xl">Nike</div>

          </div>
          <div className="h-[100px] hover:h-[600px] w-[300px] bg-gradient-to-tr from-cyan-800 to-cyan-400 rounded-t-[2em] flex justify-center items-center transition-all duration-500">
            <div className="text-center text-white uppercase font-bold text-4xl">Adidas</div>
          </div>
          <div className="h-[100px] hover:h-[600px] w-[300px] bg-gradient-to-tr from-green-800 to-green-400 rounded-t-[2em] flex justify-center items-center transition-all duration-500">
            <div className="text-center text-white uppercase font-bold text-4xl">Puma</div>
          </div>
          <div className="h-[100px] hover:h-[600px] w-[300px] bg-gradient-to-tr from-yellow-800 to-yellow-400 rounded-t-[2em] flex justify-center items-center transition-all duration-500">
            <div className="text-center text-white uppercase font-bold text-4xl">NB</div>
          </div>
        </div>
      </main>
    </>
  );
}
