/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import backIcon from "@/public/images/back-icon.svg";
import mayaLogo from "@/public/images/maya-logo.svg";
import gcashLogo from "@/public/images/gcash-logo.svg";
import qrPhLogo from "@/public/images/qrph-logo.svg";
import shopeePayLogo from "@/public/images/shopeepay-logo.svg";
import americanExpresIcon from "@/public/images/americanexpress-icon.svg";
import masterCardIcon from "@/public/images/mastercard-icon.svg";
import visaIcon from "@/public/images/visa-icon.svg";
import BettorPaymentConfirmed from "./BettorPaymentConfirmed";
import pbaTeamOne from "@/public/images/converge-pba-team.svg";
import pbaTeamTwo from "@/public/images/nortport-pba-team.svg";
import pbaTeamThree from "@/public/images/blackwater-pba-team.svg";
import pbaTeamFour from "@/public/images/magnolia-pba-team.svg";

type BettorPayNowProps = {
  onClick: () => void;
  setShowPayNow: (value: boolean) => void;
};

const BettorPayNow = (props: BettorPayNowProps) => {
  const [creditCardNumber, setCreditCardNumber] = useState<any>("");
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);

  const formatCreditCard = (event: any) => {
    const input = event.target.value.replace(/\D/g, "");
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, "$1 ");

    if (formattedInput.length > 19) return;

    setCreditCardNumber(formattedInput);
  };

  return (
    <>
      {!paymentConfirmed ? (
        <div className="h-[85vh] overflow-y-auto no-scrollbar">
          <div className="relative py-6">
            <button
              className="px-5 py-4 flex items-center gap-3 text-white font-medium text-xs md:text-lg absolute left-2 top-2"
              onClick={props.onClick}
            >
              <img
                src={backIcon.src}
                alt=""
                className="w-2 h-2 md:w-4 md:h-4"
              />
              Back
            </button>
            <p className="text-center text-white text-lg mt-10 md:mt-0 md:text-2xl">
              Your Gateway to Winning
            </p>
          </div>
          <div className="flex justify-between items-center rounded-md bg-[#391A80] gap-4 w-[90%] md:w-1/3 px-3 py-6 mx-auto">
            <p className="text-[#EEE9F8] text-xl font-semibold">Total</p>
            <p className="text-[#EEE9F8] text-xl font-semibold">₱ 300</p>
          </div>
          <div className="flex flex-col rounded-md bg-[#391A80] gap-4 w-[90%] md:w-1/3 px-3 py-6 mx-auto mt-4">
            <p className="font-semibold text-[#7351C3]">QR and e-Wallets</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl bg-white p-4 hover:bg-violet-200 hover:transition-all hover:ease-in-out">
                <img src={mayaLogo.src} alt="" className="w-20 h-8 mt-1" />
              </div>
              <div className="rounded-xl bg-white p-4 hover:bg-violet-200 hover:transition-all hover:ease-in-out">
                <img src={gcashLogo.src} alt="" className="w-20 h-8" />
              </div>
              <div className="rounded-xl bg-white p-4 hover:bg-violet-200 hover:transition-all hover:ease-in-out">
                <img src={qrPhLogo.src} alt="" className="w-20 h-8" />
              </div>
              <div className="rounded-xl bg-white p-4 hover:bg-violet-200 hover:transition-all hover:ease-in-out">
                <img src={shopeePayLogo.src} alt="" className="w-20 h-8" />
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md bg-[#391A80] gap-4 w-[90%] md:w-1/3 px-3 py-6 mx-auto mt-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[#7351C3]">Debit/Credit Card</p>
              <div className="flex justify-between items-center">
                <img src={americanExpresIcon.src} alt="" className="w-10 h-5" />
                <img src={visaIcon.src} alt="" className="w-10 h-5" />
                <img src={masterCardIcon.src} alt="" className="w-10 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                className="rounded-full p-3 w-1/2  font-semibold outline-none"
                placeholder="First Name"
              />
              <input
                type="text"
                className="rounded-full p-3 w-1/2  font-semibold outline-none"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              id="creditCard"
              value={creditCardNumber}
              onChange={formatCreditCard}
              className="rounded-full p-3 w-full  font-semibold outline-none"
              placeholder="Card Number"
            />
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                className="rounded-full p-3 w-1/2  font-semibold outline-none"
                placeholder="Expiry Date"
              />
              <input
                type="number"
                maxLength={4}
                className="rounded-full p-3 w-1/2  font-semibold outline-none"
                placeholder="CVV"
              />
            </div>
          </div>
          <button
            className="rounded-full
               bg-[#05C363] w-[90%] md:w-1/3 flex justify-center items-center font-semibold text-[#02522A] px-4 py-2 mt-4 mb-5 md:mb-0 mx-auto
            "
            onClick={() => setPaymentConfirmed(true)}
          >
            Pay
          </button>
        </div>
      ) : (
        <BettorPaymentConfirmed
          league="PBA"
          teamOneImg={pbaTeamOne.src}
          teamOneName="Converge Fiberxers"
          teamTwoImg={pbaTeamTwo.src}
          teamTwoName="Northport Batang Pier"
          onClick={() => props.setShowPayNow(false)}
        />
      )}
    </>
  );
};

export default BettorPayNow;
