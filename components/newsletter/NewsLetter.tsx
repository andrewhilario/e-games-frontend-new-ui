/* eslint-disable react/no-unescaped-entities */
import React from "react";
import newsletterBG from "@/public/images/newsletter-bg.png";

type NewsLetterProps = {};

const NewsLetter = (props: NewsLetterProps) => {
  return (
    <div
      className="bg-[#5025B4] py-[4rem] px-4 md:px-12 md:w-[70%] w-full rounded-2xl mx-auto z-10 relative md:bg-center md:bg-no-repeat md:bg-cover bg-no-repeat bg-cover bg-right"
      style={{
        backgroundImage: `url(${newsletterBG.src})`
      }}
    >
      <p className="text-2xl md:text-5xl py-5 text-center font-semibold text-[#FECA39]">
        Don't Miss Out <br /> on Sports Action!
      </p>
      <p className="text-center text-white text-lg md:text-2xl">
        Subscribe for Exclusive Sports Insights, <br />
        Insider Tips, and Exciting Promotions.
      </p>
      <div className="bg-white w-full  rounded-full mx-auto mt-8 flex justify-between p-1 md:p-2 md:w-[40%]">
        <input
          type="email"
          placeholder="Enter your email address"
          className="border-none bg-white p-2 rounded-full focus:border-none active:border-none w-[60%] outline-none text-black px-4 md:p-4 md:px-8"
        />
        <button className="bg-green-500 rounded-full text-green-900 font-semibold p-3 md:p-5">
          Subscribe now!
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
