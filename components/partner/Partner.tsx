/* eslint-disable @next/next/no-img-element */
import React from "react";
import partnerImg from "@/public/images/partner-image.png";
import NewsLetter from "../newsletter/NewsLetter";

type PartnerProps = {};

const Partner = (props: PartnerProps) => {
  return (
    <div className=" w-full h-screen bg-[#22104c]  ">
      <div className="flex items-center justify-center py-16">
        <div className="w-[500px] h-[500px] p-6 hidden md:block">
          <img src={partnerImg.src} alt="Partner" className="w-full h-full" />
        </div>
        <div className="w-1/2">
          <p className="text-3xl md:text-5xl py-4 text-center text-[#FECA39] font-semibold">
            Partner with us!
          </p>
          <div className="text-md md:text-xl text-white text-center">
            Become an Operator. Drive Success, Boost Revenue – Your <br />{" "}
            Sports Betting Empire Starts Here.
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="bg-green-500 text-white rounded-full py-3 px-4 md:py-6 md:px-8 text-semibold hover:bg-green-600">
              Take Control – Get Started Today!
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Partner;
