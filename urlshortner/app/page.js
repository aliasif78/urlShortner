"use client";

import Link from "next/link";

import { AiFillSafetyCertificate, AiOutlineDollar } from "react-icons/ai";
import { TbCoinOff } from "react-icons/tb";
import { FaHandsHelping, FaRegArrowAltCircleUp } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

export default function Home() {
  const scrollToTarget = () => {
    const element = document.getElementById("target");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex flex-col mt-[5rem]">
      <main className="flex flex-col h-screen justify-center text-center -mt-[4rem] gap-[1rem] p-[6rem]">
        <h1 className="text-4xl font-bold">Welcome to our URL Shortner</h1>

        <div className="flex flex-row gap-[0.25rem] text-center justify-center">
          <p className="text-lg">Input your URL and get it shortened in milliseconds with</p>
          <span className="border-[1px] border-black px-2 rounded-md">BitLinks</span>
          <p className="text-lg -ml-0.5">.</p>
        </div>

        <div className="flex flex-row gap-[1rem] mt-[1rem] justify-center items-center text-white font-semibold">
          <Link href="/url-shortner" type="button" className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
            Try it now
          </Link>
          <button onClick={scrollToTarget} type="button" className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            Read More
          </button>
        </div>
      </main>

      <div className="w-full h-[1px] bg-neutral-400"></div>

      <section className="flex flex-col py-[3rem] px-[5rem] gap-[3rem]">
        <h2 className="text-2xl font-bold text-center w-full">Fast & Reliable</h2>

        <div className="flex flex-row justify-center gap-[15rem]">
          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <AiFillSafetyCertificate />
            </span>

            <h3 className="font-semibold text-lg">Privacy Protection</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">We never share your URLs with anyone else.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <TbCoinOff />
            </span>

            <h3 className="font-semibold text-lg">No Hidden Fees</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Completely free to use.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <FaHandsHelping />
            </span>

            <h3 className="font-semibold text-lg">Direct Help</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Feel free to contact us for all your concerns.</p>
          </div>
        </div>
      </section>

      <div id="target" className="w-full h-[1px] bg-neutral-400"></div>

      <section className="flex flex-col py-[3rem] px-[5rem] gap-[3rem]">
        <h2 className="text-2xl font-bold text-center w-full">Future Developments</h2>

        <div className="flex flex-row justify-center gap-[10rem]">
          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <FaRegArrowAltCircleUp />
            </span>

            <h3 className="font-semibold text-lg">URL Library</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">You will be able to make ∞ folders of your URLs.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <AiOutlineDollar />
            </span>

            <h3 className="font-semibold text-lg">Earn Money</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Share your URLs with other to earn money.</p>
          </div>

          <div className="flex flex-col justify-between items-center gap-[1rem]">
            <span className="text-white bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white p-[1.25rem] text-4xl rounded-full">
              <HiOutlineDevicePhoneMobile />
            </span>

            <h3 className="font-semibold text-lg">Enjoy your feed</h3>
            <p className="text-sm -mt-[1rem] text-neutral-700">Engage with other people and view their URLs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
