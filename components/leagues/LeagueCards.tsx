/* eslint-disable @next/next/no-img-element */
import React from "react";

type LeagueCardsProps = {
  imageSrc?: string;
  leagueName?: string;
};

const LeagueCards = (props: LeagueCardsProps) => {
  return (
    <div className="mt-8 md:p-12 p-4 bg-[#391A80] rounded-lg">
      <div className="py-8 px-5 md:py-10 md:px-8">
        <img
          className="md:w-full md:h-full h-24 w-24"
          src={props.imageSrc}
          alt="League"
        />
      </div>
      <p className="text-white text-center text-2xl">{props.leagueName}</p>
    </div>
  );
};

export default LeagueCards;
