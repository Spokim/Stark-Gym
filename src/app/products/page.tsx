"use client";
import { Metadata } from "next";
import GymMembership from "../components/GymMembership";
import Paragraph from "../components/ui/Paragraph";
import Featured from "../components/Featured";

export const metadata: Metadata = {
  title: "Stark Gym | Get Strong, Get Fit, Get Results",
  description:
    "Join Stark Gym and unlock your full potential. We are dedicated to helping you achieve your fitness goals with state-of-the-art facilities, expert trainers, and a motivating environment.",
};
const page = () => {
  return (
    <div className="flex flex-col mb-4 ">
      <GymMembership />
      <Paragraph className="mx-auto p-5 my-4 bg-white">
        Stark Gym presents a refreshing approach to fitness with our flexible
        month-to-month memberships, free from contracts and initiation fees.
        Embracing the ethos of strength and muscle, we provide a training haven
        that caters to your hardcore needs. Since our establishment in 1975,
        Stark Gym has firmly positioned itself as a top destination for serious
        fitness enthusiasts.
      </Paragraph>
      <Featured />
    </div>
  );
};

export default page;
