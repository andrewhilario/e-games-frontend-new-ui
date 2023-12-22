import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Leagues from "@/components/leagues/Leagues";
import Navbar from "@/components/navbar/Navbar";
import Partner from "@/components/partner/Partner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="bg-[#2c1463] bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${"/images/home-background-image.png"})`
        }}
      >
        <Navbar />
        <Header />
        <Leagues />
        <Partner />
        <Footer />
      </div>
    </>
  );
}
