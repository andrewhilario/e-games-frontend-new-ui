import React, { useState } from "react";

const BettorLeagueFilter = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedTagRecent, setSelectedTagRecent] = useState("recent");

  return (
    <div className="flex md:justify-between items-center ">
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className="ml-4 p-1 text-xs md:p-3 md:text-base text-white bg-[#4922A4] rounded-full"
      >
        <option value="all">All Leagues</option>
        <option value="pba">PBA</option>
        <option value="nba">NBA</option>
        <option value="wnba">WNBA</option>
      </select>
      <select
        value={selectedTagRecent}
        onChange={(e) => setSelectedTagRecent(e.target.value)}
        className="ml-4 p-1 text-xs md:p-3 md:text-base text-white bg-[#4922A4] rounded-full"
      >
        <option value="all">Most Recent</option>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="year">Last Year</option>
      </select>
    </div>
  );
};

export default BettorLeagueFilter;
