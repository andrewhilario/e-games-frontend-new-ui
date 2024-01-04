/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import navLogo from "@/public/images/surewin-nav-logo.png";
import Modal from "../modal/Modal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-12">
        <div>
          <img src={navLogo.src} alt="SureWin Logo" className="h-16 w-32" />
        </div>
        <div className="hidden md:flex gap-12 text-white">
          <div className="flex items-center gap-8">
            <Link href="/about">
              <p className="hover:text-gray-300">About</p>
            </Link>
            <Link href="/how-it-works">
              <p className="hover:text-gray-300">How it Works</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-gray-300">Contact</p>
            </Link>
          </div>
          <div className="flex gap-4">
            <Modal
              trigger={
                <div className="bg-green-700 text-gray-300 rounded-full py-4 px-8 hover:bg-green-600">
                  Play Now! - Log In
                </div>
              }
              isLogin={true}
            />
            <Modal
              trigger={
                <div className="bg-purple-800 text-gray-300 rounded-full py-4 px-8 hover:bg-purple-700">
                  Register
                </div>
              }
              isLogin={false}
            />
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-transparent text-white py-4">
          <div className="flex flex-col items-center gap-4">
            <Link href="/about">
              <p className="hover:text-gray-300">About</p>
            </Link>
            <Link href="/how-it-works">
              <p className="hover:text-gray-300">How it Works</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-gray-300">Contact</p>
            </Link>
            <Modal
              trigger={
                <button className="bg-green-700 text-gray-300 rounded-full py-2 px-4 hover:bg-green-600">
                  Play Now! - Log In
                </button>
              }
              isLogin={true}
            />
            <Modal
              trigger={
                <button className="bg-purple-800 text-gray-300 rounded-full py-2 px-4 hover:bg-purple-700">
                  Register
                </button>
              }
              isLogin={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
