import { Calendar, Map, Snowflake, Sun, Wind } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
  <main className="main-cover">
    <section className="">
      <div className="elipse1">
        <Image
        src={"./Ellipse1.svg"}
        alt="Ellipse 1"
        width={300}
        height={300}
        />
      </div>
      <div className="elipse2">
      <Image
        src={"./Ellipse2.svg"}
        alt="Ellipse 2"
        width={200}
        height={200}
        />
      </div>
      <div className="elipse3">
      <Image
        src={"./Ellipse3.svg"}
        alt="Ellipse 3"
        width={200}
        height={200}
        />
      </div>
    </section>
    <section className="main-content">
        <div className="nav-content">
          <div className="flex items-center gap-x-2">
            <Image
            src={"./arcticons.svg"}
            alt="arcticons"
            width={50}
            height={50}
            className="w-5 h-5 md:w-12 md:h-12 lg:w-12"
            />
          <h1 className="text-xs md:text-2xl font-bold">Weather App</h1>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-10">
          <p className="text-xs md:text-base lg:text-xl">Cycling</p>
          <button className="btn">Explore nearby</button>
          </div>
        </div>
        <div className="menu-content">
          <div className="flex">
            <div className="flex flex-col items-center">
            <h1 className=" text-6xl md:text-8xl font-light">20</h1>
            <h2 className="text-xs ">Ahmedabad</h2>
            </div>
            <Sun className="w-3 h-3 "/>
          </div>
          <Image 
          src={"https://res.cloudinary.com/ddugt5n5v/image/upload/v1705907256/image_1-removebg-preview_bucnwe.png"}
          alt="image 1"
          width={400}
          height={400}
          className="h-44 w-44 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <Snowflake className="w-3 h-3"/>
              <p className="text-[10px] md:text-base">26 %</p>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <Wind className="w-3 h-3"/>
              <p className="text-[10px] md:text-base">16 km/h</p>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <Sun className="w-3 h-3"/>
              <p className="text-[10px] md:text-base">2.6 h</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-main">
            <div>
              <div className="flex justify-center items-end gap-x-4">
              <h1 className="text-xs font-bold">Just go</h1>
              <Image
              src={"./line.svg"}
              alt="line"
              width={150}
              height={150}
              className="w-16 h-6"
              />
              </div>
              <h1 className="text-xs font-bold">Somewhere</h1>
            </div>
            <div>
            <Map className="font-light text-yellow-400 w-2 h-2"/>
              <h2 className="text-[10px] font-medium">Where do you want to go</h2>
              <p className="text-[8px]">Choose your destination</p>
            </div>
            <div>
              <Calendar className="font-light text-yellow-400 w-2 h-2"/>
              <h2 className="text-[10px] font-medium">Date</h2>
              <p className="text-[8px]">Set a Date</p>
            </div>
          </div>
        </div>
    </section>
  </main>
  );
}
