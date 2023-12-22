/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import logo from "@/public/images/surewin-nav-logo.png";
import dashboardIcon from "@/public/images/dashboard-icon.svg";
import leagueIcon from "@/public/images/league-icon.svg";
import betsIcon from "@/public/images/bets-icon.svg";
import withdrawIcon from "@/public/images/withdraw-icon.svg";
import transactionsIcon from "@/public/images/transaction-icon.svg";
import settingsIcon from "@/public/images/settings-icon.svg";
import supportIcon from "@/public/images/support-icon.svg";
import { useParams, usePathname, useRouter } from "next/navigation";
import closeIcon from "@/public/images/close-icon.svg";

type BettorSideNavProps = {
  isLeague?: boolean;
  isOpen?: boolean;
  setOpen?: () => void;
};

const navOptions = [
  {
    icon: dashboardIcon.src,
    label: "Dashboard"
  },
  {
    icon: leagueIcon.src,
    label: "Leagues"
  },
  {
    icon: betsIcon.src,
    label: "Bets"
  },
  {
    icon: withdrawIcon.src,
    label: "Withdraw"
  },
  {
    icon: transactionsIcon.src,
    label: "Transactions"
  }
];

const BettorSideNav = (props: BettorSideNavProps) => {
  const path = usePathname();
  const router = useRouter();
  const { id } = useParams();
  const [clickedOption, setClickedOption] = React.useState(0);

  const handleClick = (index: number) => {
    setClickedOption(index);
  };

  useEffect(() => {
    if (path === "/bettor/leagues" || path === `/bettor/leagues/${id}`) {
      setClickedOption(1);
    } else {
      setClickedOption(0);
    }
  }, [path, id]);

  return (
    <div
      className={`absolute w-full ${
        !props.isOpen && "-left-[100%] "
      } md:w-[18%] md:relative md:left-0 bg-[#2C1463] md:flex flex-col justify-between ${
        props.isLeague ? "h-screen" : ""
      } transition-all duration-500 ease-in-out z-10`}
    >
      {/* logo */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center p-6">
          <img src={logo.src} alt="logo" />
          <div
            className="md:hidden h-7 w-7 absolute top-4 right-4"
            onClick={props.setOpen}
          >
            <img src={closeIcon.src} alt="" className="w-full h-full" />
          </div>
        </div>
        {/* Nav Options */}
        {navOptions.map((option, index) => (
          <div
            key={option.label}
            className={`p-4 mx-4 flex gap-4 ${
              clickedOption === index ? "bg-[#EEE9F8]" : ""
            } rounded-lg`}
            onClick={() => {
              handleClick(index);
              router.push(index === 0 ? "/bettor" : "/bettor/leagues");
            }}
          >
            <img src={option.icon} alt="" />
            <p
              className={`${
                clickedOption === index ? "text-[#8A6DCD]" : "text-[#EEE9F8]"
              } font-semibold`}
            >
              {option.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-4 mx-4 flex gap-4  rounded-lg">
          <img src={settingsIcon.src} alt="" />
          <p className="text-[#EEE9F8] font-semibold">Settings</p>
        </div>
        <div className="p-4 mx-4 flex gap-4  rounded-lg">
          <img src={supportIcon.src} alt="" />
          <p className="text-[#EEE9F8] font-semibold">Support</p>
        </div>
      </div>
    </div>
  );
};

export default BettorSideNav;
