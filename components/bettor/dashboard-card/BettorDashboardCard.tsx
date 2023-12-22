/* eslint-disable @next/next/no-img-element */
import React from "react";

type BettorDashboardCardProps = {
  iconCard: string;
  titleCard: string;
  valueCard: string;
};

const BettorDashboardCard = (props: BettorDashboardCardProps) => {
  return (
    <div className="flex  w-full p-10 items-center gap-5 bg-[#2C1463]  rounded-3xl">
      <div className="flex justify-center items-center rounded-full">
        <img src={props.iconCard} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-medium text-4xl">{props.titleCard}</p>
        <p className="text-[#FECA39] font-medium text-xl">{props.valueCard}</p>
      </div>
    </div>
  );
};

export default BettorDashboardCard;
