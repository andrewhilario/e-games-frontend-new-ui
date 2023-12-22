import React from "react";
import BettorOngoingGameCard from "../ongoing-bet-card/BettorOngoingGameCard";
import pbaTeamOne from "@/public/images/converge-pba-team.svg";
import pbaTeamTwo from "@/public/images/nortport-pba-team.svg";
import pbaTeamThree from "@/public/images/blackwater-pba-team.svg";
import pbaTeamFour from "@/public/images/magnolia-pba-team.svg";
import BettorLeagueFilter from "./BettorLeagueFilter";
import { useRouter } from "next/navigation";

type Props = {};

const BettorLeague = (props: Props) => {
  const router = useRouter();
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <p className="text-xl md:text-3xl text-white">Leagues</p>
        <BettorLeagueFilter />
      </div>
      <div
        className="h-[73vh] overflow-y-auto mt-5 no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
            onClick={() => router.push("/bettor/leagues/1")}
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamThree.src}
            teamOneName="Blackwater Bossing"
            teamTwoImg={pbaTeamFour.src}
            teamTwoName="Magnolia Hotshots"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamThree.src}
            teamOneName="Blackwater Bossing"
            teamTwoImg={pbaTeamFour.src}
            teamTwoName="Magnolia Hotshots"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamThree.src}
            teamOneName="Blackwater Bossing"
            teamTwoImg={pbaTeamFour.src}
            teamTwoName="Magnolia Hotshots"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamThree.src}
            teamOneName="Blackwater Bossing"
            teamTwoImg={pbaTeamFour.src}
            teamTwoName="Magnolia Hotshots"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamThree.src}
            teamOneName="Blackwater Bossing"
            teamTwoImg={pbaTeamFour.src}
            teamTwoName="Magnolia Hotshots"
            date="12/06/2023"
            time="04:00 PM"
          />
          <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
          />
        </div>
      </div>
    </div>
  );
};

export default BettorLeague;
