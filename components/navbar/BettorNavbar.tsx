/* eslint-disable @next/next/no-img-element */
import React from "react";
import searchIcon from "@/public/images/search-icon.svg";
import coinIcon from "@/public/images/coin-icon.svg";
import addIcon from "@/public/images/add-icon.svg";
import notificationIcon from "@/public/images/notification-icon.svg";
import avatarImage from "@/public/images/avatar-image.png";
import { Avatar, AvatarImage } from "../ui/avatar";
import hambergurMenuIcon from "@/public/images/hamburger-menu-icon.svg";

type BettorNavbarProps = {
  setOpen: () => void;
};

const BettorNavbar = (props: BettorNavbarProps) => {
  return (
    <div className="w-full h-32 bg-[#391A80] flex justify-between px-5 md:px-12 items-center">
      <div className="md:hidden">
        <button
          className="text-white p-2 focus:outline-none"
          onClick={props.setOpen}
        >
          <img src={hambergurMenuIcon.src} alt="" />
        </button>
      </div>
      <div className="hidden md:flex items-center justify-between relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#4922A4] text-[#7351C3] font-semibold rounded-full p-5 "
        />
        <img
          src={searchIcon.src}
          alt=""
          className="h-6 w-6 absolute right-6 z-20"
        />
      </div>
      <div className="flex justify-between  h-1/5 md:h-3/5 rounded-full w-[50%] md:w-1/5 items-center px-2 py-5 md:py-0 md:px-5 gap-4 bg-[#4922A4]">
        <div className="h-6 w-6 md:h-12 md:w-12">
          <img src={coinIcon.src} alt="" className="w-full h-full" />
        </div>
        <div className="text-white text-sm md:text-base">₱ 10,000</div>
        <div className="h-6 w-6 md:h-12 md:w-12 rounded-full bg-[#05C363]">
          <img src={addIcon.src} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="h-4 w-4 md:h-8 md:w-8">
          <img src={notificationIcon.src} alt="" className="w-full h-full" />
        </div>
        <Avatar className="h-9 w-9 md:h-14 md:w-14">
          <AvatarImage src={avatarImage.src} className="w-full h-full" />
        </Avatar>
      </div>
    </div>
  );
};

export default BettorNavbar;
