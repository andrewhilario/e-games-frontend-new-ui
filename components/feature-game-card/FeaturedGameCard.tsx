/* eslint-disable @next/next/no-img-element */
import React from "react";
import sampleTeam1 from "../../public/images/sample-team-1.png";
import sampleTeam2 from "../../public/images/sample-team-2.png";

type FeaturedGameCardProps = {};

const FeaturedGameCard = (props: FeaturedGameCardProps) => {
  return (
    <>
      <div className="bg-purple-900 py-4 px-6 md:py-8 md:px-12 rounded-lg">
        <p className="text-purple-300 text-center">SPORTS CATEGORY</p>
        <div className="flex justify-between w-full mx-auto py-4">
          <p className="text-white">12/31/2023</p>
          <p className="mx-4 text-white">•</p>
          <p className="text-white">12:00 AM</p>
        </div>
        <p className="text-white text-center mb-6">League Name</p>
        <div className="flex items-center w-full">
          <div className="w-1/2">
            <img
              src={sampleTeam1.src}
              alt="Sample Team 1"
              className="mx-auto"
            />
            <p className="text-sm mt-4 text-center  text-white">Team Name</p>
          </div>
          <p className="mx-4 text-white">VS</p>
          <div className="w-1/2">
            <img
              src={sampleTeam2.src}
              alt="Sample Team 2"
              className="mx-auto"
            />
            <p className="text-sm mt-4 text-center text-white">Team Name</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedGameCard;
