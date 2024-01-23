"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

import { Button, Tooltip } from "flowbite-react";

export default function Home() {
  const [display, setDisplay] = useState(true);
  const [imagePosition, setImagePosition] = useState({
    top: 5,
    left: 5,
  });
  useEffect(() => {
    // alert("As-salamu-alaikum");
    setTimeout(() => {
      setDisplay(false);
    }, 2000);
  }, []);
  return (
    <main className="">
      <header className="sticky top-0 flex justify-center bg-green-500 text-2xl font-bold p-4 h-[10vh] z-10">
        <h1>Hello world!!!</h1>
      </header>
      <section className="h-[90vh] bg-red-500 relative md:flex md:items-center md:justify-center">
        <div className="flex flex-col justify-center items-center absolute top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] md:relative md:top-0 md:left-0 md:translate-x-0 md:translate-y-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div>
                <Image
                  src="/images/profile.jpg"
                  alt=""
                  width={150}
                  height="150"
                />
              </div>
              <div>Title</div>
            </div>
            <div>A MERN Lover</div>
          </div>
          <div>Logos</div>
        </div>
      </section>
      <section className="h-screen bg-green-600"></section>
    </main>
  );
}
