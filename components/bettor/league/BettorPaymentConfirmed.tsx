/* eslint-disable @next/next/no-img-element */
import React from "react";
import paymentConfirmedImage from "@/public/images/payment-confirmed-image.svg";

type BettorPaymentConfirmedProps = {
  league?: string;
  teamOneImg?: string;
  teamOneName?: string;
  teamTwoImg?: string;
  teamTwoName?: string;
  onClick?: () => void;
};

const yourBets = [
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

const BettorPaymentConfirmed = (props: BettorPaymentConfirmedProps) => {
  return (
    <div className="h-[85vh] overflow-y-auto no-scrollbar">
      <div className="flex gap-4 h-full md:h-5/6 items-center w-full">
        <div className="flex md:flex-row flex-col items-center mx-auto md:gap-[5rem]">
          <div className="flex flex-col justify-center items-center md:w-1/2">
            <img
              src={paymentConfirmedImage.src}
              alt=""
              className="hidden md:block h-72 w-72"
            />
            <p className="text-white text-2xl mt-5 text-center">
              Payment Confirmed
            </p>
            <p className="text-white text-md mt-5 text-center mb-5 md:mb-0">
              Bet Bold, Win Bigger <br /> Good luck on your bets!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[90%] md:w-5/6">
            <div className="block p-4 rounded-xl bg-[#391A80]">
              <div className="flex justify-between items-center">
                <p className="p-2 bg-[#4922A4] text-[#C9BBE8] rounded-lg">
                  {props.league ?? "PBA"}
                </p>
                <div className="flex items-center gap-3">
                  <p className="text-center text-xs text-[#C9BBE8]">
                    12/06/2023
                  </p>
                  <p className="text-center text-xs text-[#C9BBE8]">●</p>
                  <p className="text-center text-xs text-[#C9BBE8]">04:00 PM</p>
                </div>
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
              {/* Your Bets */}
              <div className="block mt-2 ">
                <p className="text-md text-[#7351C3] mt-4">Your Bets:</p>
                <div className="grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-4 w-full">
                  {yourBets.map((bet: any) => (
                    <div
                      key={bet}
                      className="px-3 py-1 mt-4 bg-[#4922A4] text-center text-[#EEE9F8] font-semibold text-lg rounded-md w-full"
                    >
                      {bet.pairs}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="rounded-full md:[90%] w-11/12
               bg-[#05C363] flex justify-center items-center font-semibold text-[#02522A] px-4 py-4 mt-4 mx-auto
            "
              onClick={props.onClick}
            >
              View all bets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettorPaymentConfirmed;
