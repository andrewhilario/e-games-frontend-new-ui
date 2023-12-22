/* eslint-disable @next/next/no-img-element */
"use client";
import BettorDashboardCard from "@/components/bettor/dashboard-card/BettorDashboardCard";
import BettorNavbar from "@/components/navbar/BettorNavbar";
import BettorSideNav from "@/components/sidebar-nav/BettorSideNav";
import matchIcon from "@/public/images/match-icon.svg";
import winRatioIcon from "@/public/images/win-ratio-icon.svg";
import winsIcon from "@/public/images/wins-icon.svg";
import pbaTeamOne from "@/public/images/converge-pba-team.svg";
import pbaTeamTwo from "@/public/images/nortport-pba-team.svg";
import pbaTeamThree from "@/public/images/blackwater-pba-team.svg";
import pbaTeamFour from "@/public/images/magnolia-pba-team.svg";
import promoImage from "@/public/images/promo-image.svg";

import React from "react";
import BettorOngoingGameCard from "@/components/bettor/ongoing-bet-card/BettorOngoingGameCard";
import BettorModal from "@/components/modal/BettorModal";

type BettorProps = {};

const Bettor = (props: BettorProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="flex bg-[#22104c] relative">
      <BettorSideNav isLeague isOpen={open} setOpen={() => setOpen(false)} />

      <div className="block w-full md:w-[82%]">
        <BettorNavbar setOpen={() => setOpen(true)} />
        <div className="h-[86vh] overflow-y-auto no-scrollbar">
          <div className="flex flex-col justify-center my-6 items-center gap-5 mx-6 md:flex-row">
            <BettorDashboardCard
              iconCard={matchIcon.src}
              titleCard="678"
              valueCard="Total Match"
            />
            <BettorDashboardCard
              iconCard={winRatioIcon.src}
              titleCard="678"
              valueCard="Win Ratio"
            />
            <BettorDashboardCard
              iconCard={winsIcon.src}
              titleCard="22"
              valueCard="Wins"
            />
          </div>
          {/* Bets */}
          <div className="block w-full px-7">
            <div className="flex justify-between items-center">
              <p className="text-xl md:text-3xl text-white">Bets</p>
              <p className="text-sm md:text-lg text-white">View All</p>
            </div>
            <div className="flex flex-col p-4 rounded-3xl gap-6 md:flex-row bg-white/10 mt-4">
              <BettorModal
                trigger={
                  <BettorOngoingGameCard
                    isLive={true}
                    league="PBA"
                    teamOneImg={pbaTeamOne.src}
                    teamOneName="Converge Fiberxers"
                    teamTwoImg={pbaTeamTwo.src}
                    teamTwoName="Northport Batang Pier"
                  />
                }
                league="PBA"
                date="12/06/2023"
                time="04:00 PM"
                teamOneImg={pbaTeamOne.src}
                teamOneName="Converge Fiberxers"
                teamTwoImg={pbaTeamTwo.src}
                teamTwoName="Northport Batang Pier"
              />
              <BettorModal
                trigger={
                  <BettorOngoingGameCard
                    isLive={false}
                    date="12/06/2023"
                    time="04:00 PM"
                    league="PBA"
                    teamOneImg={pbaTeamThree.src}
                    teamOneName="Blackwater Bossing"
                    teamTwoImg={pbaTeamFour.src}
                    teamTwoName="Magnolia Hotshots"
                  />
                }
                date="12/06/2023"
                time="04:00 PM"
                league="PBA"
                teamOneImg={pbaTeamThree.src}
                teamOneName="Blackwater Bossing"
                teamTwoImg={pbaTeamFour.src}
                teamTwoName="Magnolia Hotshots"
              />
            </div>
          </div>
          <div className="block w-full mt-5 px-7">
            <p className="text-xl md:text-3xl text-white">Promo</p>
            <div className="w-full md:w-1/2 my-4">
              <img src={promoImage.src} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bettor;
