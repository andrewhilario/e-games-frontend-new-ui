import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import FeaturedGameCard from "../feature-game-card/FeaturedGameCard";

type FeaturedGamesProps = {};

const FeaturedGames = (props: FeaturedGamesProps) => {
  return (
    <>
      <div className="w-100">
        <div className="flex md:flex-row flex-col justify-around gap-2 mt-16 mx-auto w-3/4">
          <FeaturedGameCard />
          <FeaturedGameCard />
          <FeaturedGameCard />
          <FeaturedGameCard />
        </div>
      </div>
    </>
  );
};

export default FeaturedGames;
