/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import backIcon from "@/public/images/back-icon.svg";
import BettorPayNow from "./BettorPayNow";

type BettorPlaceBetProps = {
  onClick: () => void;
  teamOneImg: string;
  teamOneName: string;
  teamTwoImg?: string;
  teamTwoName: string;
};

const betConstant = [
  {
    pairs: "1-2"
  },
  {
    pairs: "3-5"
  },
  {
    pairs: "3-6"
  },
  {
    pairs: "4-0"
  },
  {
    pairs: "4-3"
  },
  {
    pairs: "4-4"
  },
  {
    pairs: "5-0"
  },
  {
    pairs: "5-1"
  },
  {
    pairs: "5-4"
  },
  {
    pairs: "8-0"
  }
];

const BettorPlaceBet = (props: BettorPlaceBetProps) => {
  const [setPayNow, setShowPayNow] = useState<boolean>(false);
  return (
    <>
      {!setPayNow ? (
        <div className=" h-[85vh] overflow-y-auto no-scrollbar">
          <div className="relative py-6">
            <button
              className="px-5 py-4 flex items-center gap-3 text-white font-medium text-xs md:text-lg absolute left-2 top-2"
              onClick={props.onClick}
            >
              <img
                src={backIcon.src}
                alt=""
                className="w-2 h-2 md:w-4 md:h-4"
              />
              Back
            </button>
            <p className="text-center text-white text-lg mt-10 md:mt-0 md:text-2xl">
              Place Your Bets, Secure Your Wins
            </p>
          </div>

          <div className="w-full ">
            <div className="flex flex-col justify-center items-center rounded-md bg-[#391A80] gap-4 w-[90%] md:w-1/3 px-4 py-8 mx-auto">
              <p className="text-md text-[#7351C3]">Game Details</p>
              <p className="p-2 bg-[#4922A4] text-[#C9BBE8] rounded-lg">PBA</p>
              <div className="flex items-center">
                <p className="text-center text-xs text-[#C9BBE8]">12/06/2023</p>
                <p className="text-center text-xs text-[#C9BBE8]">●</p>
                <p className="text-center text-xs text-[#C9BBE8]">04:00 PM</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col items-center justify-center gap-4">
                  <img src={props.teamOneImg} alt="" className="h-14 w-34" />
                  <p className="text-[#C9BBE8]">{props.teamOneName}</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-[#5025B4]">VS</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <img src={props.teamTwoImg} alt="" className="h-14 w-34" />
                  <p className="text-[#C9BBE8]">{props.teamTwoName}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center rounded-md bg-[#391A80] px-4 py-8 mx-auto w-[90%] md:w-1/3  mt-4">
              <p className="text-md text-[#7351C3]">Your Bets:</p>
              <div className="flex flex-wrap items-center justify-center  mt-5">
                {betConstant.map((bet: any) => (
                  <div
                    key={bet}
                    className="px-4 py-1 mr-2 mt-4 bg-[#4922A4] text-[#EEE9F8] font-semibold text-lg rounded-md"
                  >
                    {bet.pairs}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center rounded-md bg-[#391A80] px-4 py-8 mx-auto w-[90%] md:w-1/3  mt-4 gap-4">
              <div className="flex justify-between text-[#EEE9F8] w-full">
                <p className="font-medium text-md">Bet Price</p>
                <p className="font-medium text-md">₱ 30</p>
              </div>
              <div className="flex justify-between text-[#EEE9F8] w-full">
                <p className="font-medium text-md">Bet Count</p>
                <p className="font-medium text-md">10</p>
              </div>
              <div className="flex justify-between text-[#EEE9F8] w-full">
                <p className="font-medium text-xl">Total</p>
                <p className="font-medium text-xl">₱ 300</p>
              </div>
              <div className="flex items-center w-full gap-4">
                <button
                  className="bg-[#5025B4] w-1/2 font-medium text-[#C9BBE8] rounded-full px-4 py-2 mt-4"
                  onClick={props.onClick}
                >
                  Add more bet
                </button>
                <button
                  className="bg-[#05C363] w-1/2 font-medium text-[#02522A] rounded-full px-4 py-2 mt-4"
                  onClick={() => setShowPayNow(true)}
                >
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <BettorPayNow
          onClick={() => setShowPayNow(false)}
          setShowPayNow={() => {
            setShowPayNow(false);
          }}
        />
      )}
    </>
  );
};

export default BettorPlaceBet;
