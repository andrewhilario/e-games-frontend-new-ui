/* eslint-disable @next/next/no-img-element */
import React from "react";

type BettorOngoingGameCardProps = {
  league: string;
  teamOneImg: string;
  teamOneName: string;
  teamTwoImg?: string;
  teamTwoName: string;
  isLive: boolean;
  time?: string;
  date?: string;
  onClick?: () => void;
};

const BettorOngoingGameCard = (props: BettorOngoingGameCardProps) => {
  return (
    <>
      <div
        className="block p-4 bg-[#391A80] rounded-2xl cursor-pointer"
        onClick={props.onClick}
      >
        <div className="flex justify-between items-center">
          <p className="p-2 bg-[#4922A4] text-[#C9BBE8] rounded-lg">
            {props.league}
          </p>
          {props.isLive ? (
            <p className="p-2 text-red-100 bg-red-500 rounded-lg">LIVE 03:43</p>
          ) : (
            <div className="block p-2">
              <p className="text-center text-xs text-[#C9BBE8]">{props.date}</p>
              <p className="text-center text-xs text-[#C9BBE8]">{props.time}</p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={props.teamOneImg} alt="" className="h-24 w-24" />
            <p className="text-[#C9BBE8] w-2/3 text-center">
              {props.teamOneName}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-[#5025B4]">VS</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={props.teamTwoImg} alt="" className="h-24 w-24" />
            <p className="text-[#C9BBE8]">{props.teamTwoName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BettorOngoingGameCard;
