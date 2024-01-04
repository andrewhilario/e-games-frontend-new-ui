import React, { useEffect } from "react";
import BettorOngoingGameCard from "../ongoing-bet-card/BettorOngoingGameCard";
import pbaTeamOne from "@/public/images/converge-pba-team.svg";
import pbaTeamTwo from "@/public/images/nortport-pba-team.svg";
import pbaTeamThree from "@/public/images/blackwater-pba-team.svg";
import pbaTeamFour from "@/public/images/magnolia-pba-team.svg";
import BettorLeagueFilter from "./BettorLeagueFilter";
import { useRouter } from "next/navigation";
import useGetMatches from "@/hooks/useGetMatches";
import { match } from "assert";

type BettorLeagueProps = {};

const BettorLeague = (_props: BettorLeagueProps) => {
  const router = useRouter();

  const matches = useGetMatches();

  useEffect(() => {
    console.log(matches);
  }, [matches]);
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
          {/* <BettorOngoingGameCard
            isLive={false}
            league="PBA"
            teamOneImg={pbaTeamOne.src}
            teamOneName="Converge Fiberxers"
            teamTwoImg={pbaTeamTwo.src}
            teamTwoName="Northport Batang Pier"
            date="12/06/2023"
            time="04:00 PM"
            // onClick={() => router.push("/bettor/leagues/1")}
          /> */}
          {/* map the matches */}

          {
            //@ts-expect-error
            matches?.items?.map((match: any) => {
              return (
                <BettorOngoingGameCard
                  key={match.id}
                  isLive={false}
                  league="NBA"
                  teamOneImg={match.home_team.image}
                  teamOneName={match.home_team.name}
                  teamTwoImg={match.away_team.image}
                  teamTwoName={match.away_team.name}
                  date={match.date_schedule.split("T")[0]}
                  time={match.date_schedule.split("T")[1]}
                  onClick={() => router.push(`/bettor/leagues/${match.id}`)}
                  // onClick={() => router.push("/bettor/leagues/1")}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default BettorLeague;
