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
            />
          <h1>Weather App</h1>
          </div>
          <div className="flex items-center gap-x-10">
          <p>Cycling</p>
          <button className="btn">Explore nearby</button>
          </div>
        </div>
        <div className="menu-content">
          <div className="flex">
            <div className="flex flex-col items-center">
            <h1 className="text-8xl font-light">20</h1>
            <h2>Ahmedabad</h2>
            </div>
            <Sun/>
          </div>
          <Image 
          src={"https://res.cloudinary.com/ddugt5n5v/image/upload/v1705907256/image_1-removebg-preview_bucnwe.png"}
          alt="image 1"
          width={400}
          height={400}
          />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-x-4">
              <Snowflake/>
              <p>26 %</p>
            </div>
            <div className="flex items-center gap-x-4">
              <Wind/>
              <p>16 km/h</p>
            </div>
            <div className="flex items-center gap-x-4">
              <Sun/>
              <p>2.6 h</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-main">
            <div>
              <div className="flex justify-center items-end gap-x-4">
              <h1>Just go</h1>
              <Image
              src={"./line.svg"}
              alt="line"
              width={150}
              height={100}
              />
              </div>
              <h1>Somewhere</h1>
            </div>
            <div>
            <Map className="font-light text-yellow-400"/>
              <h2>Where do you want to go</h2>
              <p>Choose your destination</p>
            </div>
            <div>
              <Calendar className="font-light text-yellow-400"/>
              <h2>Date</h2>
              <p>Set a Date</p>
            </div>
          </div>
        </div>
    </section>
  </main>
  );
}
