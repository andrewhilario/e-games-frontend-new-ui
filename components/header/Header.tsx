import React from "react";
import FeaturedGames from "./FeaturedGames";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <div className="w-full mb-14">
      <div className="mt-20 md:text-7xl text-yellow-400 text-center font-semibold text-2xl w-[90%] mx-auto">
        Bet Smarter, Win Bigger – Your Way
      </div>
      <div className="md:text-3xl text-white text-center mt-8  w-[90%] mx-auto">
        Experience Unrivaled Sports Betting Excitement.
      </div>
      <div className="flex items-center justify-center mt-8">
        <button className="py-2 px-4 bg-green-500 text-white rounded-full md:py-6 md:px-8  hover:bg-green-600">
          Bet Now and Elevate Your Game!
        </button>
      </div>
      <FeaturedGames />
    </div>
  );
};

export default Header;
