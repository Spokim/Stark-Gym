import type { Metadata } from "next";
import CallToArms from "./components/CallToArms";
import HeroSection from "./components/HeroSection";
import Location from "./components/Location";
import ShopSection from "./components/ShopSection";
import Featured from "./components/Featured";

export const metadata: Metadata = {
  title: "Stark Gym | Get Strong, Get Fit, Get Results",
  description:
    "Join Stark Gym and unlock your full potential. We are dedicated to helping you achieve your fitness goals with state-of-the-art facilities, expert trainers, and a motivating environment.",
  openGraph: {
    title: "Stark Gym | Get Strong, Get Fit, Get Results",
    description:
      "Join Stark Gym and unlock your full potential. We are dedicated to helping you achieve your fitness goals with state-of-the-art facilities, expert trainers, and a motivating environment.",
    images: [
      {
        url: "stark-gym.vercel.app/images/CTA-01.jpg",
        width: 1200,
        height: 630,
        alt: "Stark Gym",
      },
    ],
    siteName: "Stark Gym",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f0f0f0]">
      <CallToArms />
      <ShopSection />
      <Featured />
      <HeroSection />
      <Location />
    </div>
  );
}
