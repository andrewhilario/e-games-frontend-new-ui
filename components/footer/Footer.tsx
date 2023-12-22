/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "@/public/images/surewin-nav-logo.png";
import fbIcon from "@/public/images/facebook-icon.svg";

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <>
      <div className="bg-[#391A80] py-5 px-5 ">
        <div className="mt-6 flex md:flex-row flex-col justify-between w-[70%] mx-auto md:mt-[15rem]">
          <div className="flex flex-col gap-6 justify-center items-center md:items-start md:justify-start">
            <div className="w-64 h-26">
              <img src={logo.src} alt="SureWin" className="w-full h-full" />
            </div>
            <div className="text-center text-[#AF9BDD] md:text-start">
              123 Sunshine Street, Barangay Bliss <br />
              Quezon City, Metro Manila, Philippines
            </div>
            <div className="text-start text-[#AF9BDD]">email@surewin.ph</div>
            <div className="text-start text-[#AF9BDD]">(02) 0000 0000</div>
          </div>
          <div className="flex gap-2 my-6 text-center flex-col justify-center items-center md:mt-0 md:text-start md:flex-row md:items-start md:justify-start md:gap-[4rem]">
            <div className="flex flex-col">
              <p className="text-[#AF9BDD] font-medium text-lg">Company</p>
              <p className="text-[#8A6DCD] font-medium mt-5">About Us</p>
              <p className="text-[#8A6DCD] font-medium mt-4">Contact Us</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#AF9BDD] font-medium text-lg">
                Customer Support
              </p>
              <p className="text-[#8A6DCD] font-medium mt-5">How It Works</p>
              <p className="text-[#8A6DCD] font-medium mt-4">Help Center</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#AF9BDD] font-medium text-lg">Legal</p>
              <p className="text-[#8A6DCD] font-medium mt-5">
                Responsible Gaming
              </p>
              <p className="text-[#8A6DCD] font-medium mt-4">Privacy Policy</p>
              <p className="text-[#8A6DCD] font-medium mt-4">Terms of Use</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2C1463] py-16">
        <div className="flex flex-col gap-4 mx-auto items-center md:flex-row md:justify-between md:w-[70%] md:gap-0">
          <p className="text-[#8A6DCD]">Copyright © Sure Win</p>
          <div className="flex items-center gap-8">
            <div className="w-12 h-12 bg-[#5025B4] rounded-full">
              <img src={fbIcon.src} alt="" className="w-full h-full p-2" />
            </div>
            <div className="w-12 h-12 bg-[#5025B4] rounded-full">
              <img src={fbIcon.src} alt="" className="w-full h-full p-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
