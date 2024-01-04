/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import BettorLeague from "@/components/bettor/league/BettorLeague";
import BettorNavbar from "@/components/navbar/BettorNavbar";
import BettorSideNav from "@/components/sidebar-nav/BettorSideNav";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import ChooseBets from "./[id]/page";

type LeaguesProps = {};

const Leagues = (props: LeaguesProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { id } = useParams();

  return (
    <div className="flex bg-[#22104c]">
      <BettorSideNav isLeague isOpen={open} setOpen={() => setOpen(false)} />
      <div className="block w-full md:w-[82%]">
        <BettorNavbar setOpen={() => setOpen(true)} />
        <BettorLeague />
      </div>
    </div>
  );
};

export default Leagues;
