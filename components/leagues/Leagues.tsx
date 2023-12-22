import React from "react";
import LeagueCards from "./LeagueCards";
import pba from "../../public/images/pba.png";
import nba from "../../public/images/nba.png";
import wnba from "../../public/images/wnba.png";
import leagueBG from "@/public/images/league-background-img.png";

type LeaguesProps = {};

const Leagues = (props: LeaguesProps) => {
  return (
    <div
      className="w-full py-10 bg-[#5025B4] bg-no-repeat bg-cover md:py-[15rem]"
      style={{
        backgroundImage: `url(${leagueBG.src})`
      }}
    >
      <h1 className="text-center text-[#FECA39] text-3xl w-[80%] md:text-6xl md:w-[35%] font-semibold mx-auto">
        Experience the Thrill of the Buzzer-Beater!
      </h1>
      <h5 className="text-white text-center md:w-[25%] w-[70%] mx-auto my-6">
        In the Closing Seconds, Every Bet Counts. <br /> Will It Be a Slam Dunk
        or a Game-Changing Three-pointer? <br />
        Join the Action, Feel the Heat!
      </h5>
      <div className="flex md:flex-row flex-col justify-center md:gap-24 gap-8 mx-auto items-center ">
        <LeagueCards imageSrc={pba.src} leagueName="PBA" />
        <LeagueCards imageSrc={nba.src} leagueName="NBA" />
        <LeagueCards imageSrc={wnba.src} leagueName="WNBA" />
      </div>
    </div>
  );
};

export default Leagues;
