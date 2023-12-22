/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger
} from "@/components/ui/modal";

type BettorModalProps = {
  trigger: React.ReactNode;
  league: string;
  date: string;
  time: string;
  teamOneImg: string;
  teamOneName: string;
  teamTwoImg: string;
  teamTwoName: string;
};

const BettorModal = (props: BettorModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{props.trigger}</DialogTrigger>
      <DialogContent className="bg-[#391A80] border-none rounded-lg">
        <div className="block md:p-5 p-2">
          <div className="flex gap-4 items-center">
            <p className="p-2 bg-[#4922A4] text-[#C9BBE8] rounded-lg">
              {props.league}
            </p>
            <div className="block p-2">
              <p className="text-center text-sm text-[#C9BBE8]">{props.date}</p>
              <p className="text-center text-sm text-[#C9BBE8]">{props.time}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src={props.teamOneImg}
                alt=""
                className="h-10 w-30 md:h-14 md:w-34"
              />
              <p className="text-[#C9BBE8] text-center">{props.teamOneName}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-[#5025B4] md:mx-0 mx-4">VS</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src={props.teamTwoImg}
                alt=""
                className="h-10 w-30 md:h-14 md:w-34"
              />
              <p className="text-[#C9BBE8] text-center">{props.teamTwoName}</p>
            </div>
          </div>
          <div className="block">
            <p className="text-md text-[#7351C3] mt-4">Your Bets:</p>
            <div className="flex items-center gap-6 mt-2">
              <p className="px-6 py-4 text-[#EEE9F8] bg-[#4922A4] rounded-xl">
                0 - 1
              </p>
              <p className="px-6 py-4 text-[#EEE9F8] bg-[#4922A4] rounded-xl">
                5 - 2
              </p>
              <p className="px-6 py-4 text-[#EEE9F8] bg-[#4922A4] rounded-xl">
                7 - 8
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BettorModal;
