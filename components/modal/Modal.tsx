/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import loginModalImg from "@/public/images/login-modal-image.png";

type ModalProps = {
  trigger: React.ReactNode;
  isLogin?: boolean;
};

const Modal = (props: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{props.trigger}</DialogTrigger>
      <DialogContent>
        {props.isLogin ? (
          <div className="flex flex-col md:flex-row  justify-between items-center p-2 gap-2 ">
            <div className="md:block md:w-[40%] w-full mr-5">
              <div className="w-18 h-42">
                <img
                  src={loginModalImg.src}
                  alt=""
                  className="w-full h-full mx-auto md:block hidden"
                />
              </div>
              <p className="text-black text-center text-md font-semibold">
                Login to Victory
              </p>
              <p className="text-black text-center text-sm font-semibold">
                Seize the moment and log in <br />
                to our cutting-edge online betting
              </p>
            </div>
            <div className="block md:w-[60%]">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border-[#A3A4A5] border-[1px] rounded-full px-4 py-2 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-[#A3A4A5] border-[1px] rounded-full mt-4 px-4 py-2 w-full"
              />
              <div className="flex justify-between mt-5">
                <div className="flex gap-4">
                  <input type="checkbox" name="remember" id="" />
                  <p>Remember Me</p>
                </div>
                <a className="text-[#05C363]">Forgot Password</a>
              </div>
              <button className="bg-[#05C363] text-green-900 rounded-full py-4 px-8 mt-8 hover:bg-green-600 w-full font-semibold">
                Login
              </button>
              <div className="text-black text-center mt-5">
                Don't have an account?{" "}
                <a className="text-[#05C363]">Register</a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row  justify-between items-center p-2 gap-2">
            <div className="md:block md:w-[40%] w-full mr-5">
              <div className="w-18 h-42">
                <img
                  src={loginModalImg.src}
                  alt=""
                  className="w-full h-full mx-auto md:block hidden"
                />
              </div>
              <p className="text-black text-center text-md font-semibold">
                Don't miss out on epic wins!
              </p>
              <p className="text-black text-center text-sm font-semibold">
                Join the action by signing up
              </p>
            </div>
            <div className="block md:w-[60%] w-full mt-2 md:mt-0">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border-[#A3A4A5] border-[1px] rounded-full px-4 py-2 w-full relative"
                />
                <button className="border-none bg-transparent absolute right-12 text-[#05C363] font-medium">
                  Send OTP
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter OTP"
                disabled
                className="border-[#A3A4A5] border-[1px] rounded-full mt-4 px-4 py-2 w-full bg-[#F2F2F2]"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="border-[#A3A4A5] border-[1px] rounded-full mt-4 px-4 py-2 w-full "
              />
              <div className="flex justify-between mt-5">
                <div className="flex gap-4 text-xs md:text-base">
                  <input type="checkbox" name="remember" id="" />
                  <p>
                    I agree <a className="text-[#05C363]">Terms of use</a> and{" "}
                    <a className="text-[#05C363]">Conditions</a>
                  </p>
                </div>
              </div>
              <button className="bg-[#05C363] text-green-900 rounded-full py-4 px-8 mt-4 hover:bg-green-600 w-full font-semibold">
                Register
              </button>
              <div className="text-black text-center mt-5">
                Already have an account? <a className="text-[#05C363]">Login</a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
