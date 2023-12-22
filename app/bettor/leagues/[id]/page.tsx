"use client";
import BettorPlaceBet from "@/components/bettor/league/BettorPlaceBet";
import BettorNavbar from "@/components/navbar/BettorNavbar";
import BettorSideNav from "@/components/sidebar-nav/BettorSideNav";
import React, { useState } from "react";
import pbaTeamOne from "@/public/images/converge-pba-team.svg";
import pbaTeamTwo from "@/public/images/nortport-pba-team.svg";
import pbaTeamThree from "@/public/images/blackwater-pba-team.svg";
import pbaTeamFour from "@/public/images/magnolia-pba-team.svg";

type ChooseBetsProps = {};

type ButtonProps = {
  pair: string;
  selected: boolean;
  occupied: boolean;
  onClick: () => void;
};

const ChooseBets = (props: ChooseBetsProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [setPlaceBet, setShowPlaceBet] = useState<boolean>(false);

  const [occupiedButtons, setOccupiedButtons] = useState<string[]>([]);
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const pairs = [];

  const handleButtonClick = (pair: string) => {
    // Toggle selected state
    setSelectedButtons((prevSelected) => {
      if (prevSelected.includes(pair)) {
        return prevSelected.filter((p) => p !== pair);
      } else {
        return [...prevSelected, pair];
      }
    });
  };

  const isOccupied = (pair: string) => occupiedButtons.includes(pair);
  const isSelected = (pair: string) => selectedButtons.includes(pair);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      pairs.push(`${i}-${j}`);
    }
  }

  const Button: React.FC<ButtonProps> = ({
    pair,
    selected,
    occupied,
    onClick
  }) => (
    <button
      className={`flex justify-around items-center gap-2 md:gap-4 px-2 py-3 ${
        selected ? "bg-[#5025B4]" : "bg-[#391A80]"
      } rounded-lg`}
      onClick={onClick}
    >
      <p
        className={`text-sm md:text-xl font-medium ${
          occupied ? "text-[#5025B4]" : "text-[#EEE9F8]"
        } ${selected ? "text-[#EEE9F8]" : "text-[#EEE9F8]"}`}
      >
        {pair}
      </p>
      <div
        className={`h-2 w-2 md:w-4 md:h-4 rounded-sm ${
          occupied ? "bg-red-500" : "bg-[#EEE9F8]"
        } ${selected ? "bg-[#FECA39]" : "bg-[#EEE9F8]"}`}
      ></div>
    </button>
  );

  return (
    <div className="flex bg-[#22104c]">
      <BettorSideNav isLeague isOpen={open} setOpen={() => setOpen(false)} />
      <div className="block w-full md:w-[82%]">
        <BettorNavbar setOpen={() => setOpen(true)} />
        {!setPlaceBet ? (
          <div className="p-5">
            <div className="flex items-center gap-4">
              <p className="p-2 bg-[#4922A4] text-[#C9BBE8] rounded-lg">PBA</p>
              <p className="text-center text-xs text-[#C9BBE8]">12/06/2023</p>
              <p className="text-center text-xs text-[#C9BBE8]">●</p>
              <p className="text-center text-xs text-[#C9BBE8]">04:00 PM</p>
            </div>
            <div className="flex items-center my-4 gap-5">
              <p className="text-white md:text-2xl text-lg text-center md:text-start">
                Converge Fiberxers
              </p>
              <p className="text-md text-[#5025B4]">vs</p>
              <p className="text-white md:text-2xl text-lg text-center md:text-start">
                Northpoint Batang Pier
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 px-5 py-7 gap-4 rounded-lg bg-[#391A80]">
              <div className="md:col-span-3 px-4 py-5 rounded-lg bg-[#4922A4] grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-4">
                <div className="flex flex-col">
                  <p className="text-md  text-[#C9BBE8] text-center">
                    1st Quarter
                  </p>
                  <p className="text-2xl  text-[#ffffff] text-center">
                    ₱ 1,000
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-md  text-[#C9BBE8] text-center">
                    2nd Quarter
                  </p>
                  <p className="text-2xl  text-[#ffffff] text-center">
                    ₱ 2,000
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-md  text-[#C9BBE8] text-center">
                    3rd Quarter
                  </p>
                  <p className="text-2xl  text-[#ffffff] text-center">
                    ₱ 3,000
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-md  text-[#C9BBE8] text-center">
                    4th Quarter
                  </p>
                  <p className="text-2xl  text-[#ffffff] text-center">
                    ₱ 4,000
                  </p>
                </div>
              </div>
              <div className="px-4 py-4 md:px-3 md:py-1 rounded-lg bg-[#4922A4] gap-6 flex flex-col md:flex-row  items-center justify-between ">
                <div className="w-full md:w-3/5 flex flex-col gap-2">
                  <div className="flex items-center justify-between ">
                    <p className="text-[#C9BBE8] text-xs">Bet Price</p>
                    <p className="text-[#C9BBE8] text-xs">₱ 30</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#C9BBE8] text-xs">Bet Count</p>
                    <p className="text-[#C9BBE8] text-xs">10</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#C9BBE8] text-xs">Total</p>
                    <p className="text-[#C9BBE8] text-xs">₱ 300</p>
                  </div>
                </div>
                <button
                  className="bg-[#05C363] w-full md:w-1/3 font-medium text-[#02522A] rounded-full px-4 py-2"
                  onClick={() => setShowPlaceBet(true)}
                >
                  Place Bet
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 md:grid-cols-6 md:gap-7 xl:grid-cols-10 xl:gap-10 mt-4 h-[52vh] overflow-y-auto no-scrollbar">
              {pairs.map((pair, index) => (
                <Button
                  key={index}
                  pair={pair}
                  selected={isSelected(pair)}
                  occupied={isOccupied(pair)}
                  onClick={() => handleButtonClick(pair)}
                />
                // <button
                //   key={index}
                //   className="flex justify-around items-center gap-4 px-2 py-3 bg-[#391A80] rounded-lg"
                // >
                //   <p className="text-[#EEE9F8] text-xl font-medium">{pair}</p>
                //   <div className="w-4 h-4 bg-white rounded-sm"></div>
                // </button>
              ))}
            </div>
          </div>
        ) : (
          <BettorPlaceBet
            onClick={() => setShowPlaceBet(false)}
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
          />
        )}
      </div>
    </div>
  );
};

export default ChooseBets;
