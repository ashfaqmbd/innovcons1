import { GiWorld } from "react-icons/gi"; 
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-950 text-center">
        <p className="uppercase tracking-widest text-lg md:text-3xl lg:text-4xl">
          page you are looking !
        </p>

        <div className="">
          <p className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="text-amber-500">NOT</span> <span>FOUND</span>
          </p>
        </div>

        <div className="mt-8 text-center mx-auto text-red-600 font-bold text-2xl md:text-4xl lg:text-5xl">
          INN
          <span>
            <GiWorld className="inline pb-1 text-white" />
          </span>
          VATE{" "}
          <span className="block text-xl md:text-2xl lg:text-3xl text-center tracking-widest text-white">
            CONSULTING
          </span>
        </div>
      </div>
    </>
  );
}
