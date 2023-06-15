import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stark Gym | Get Strong, Get Fit, Get Results",
  description:
    "Join Stark Gym and unlock your full potential. We are dedicated to helping you achieve your fitness goals with state-of-the-art facilities, expert trainers, and a motivating environment.",
};

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center max-w-6xl w-11/12 mx-auto p-5">
      We apologize for any inconvenience caused. At the moment, our focus is on
      Front-End development, and as a result, Back-End implementation has not
      been prioritized. However, we acknowledge the importance of Back-End
      functionality and plan to address it in the future. Thank you for your
      understanding, and we appreciate your patience.
    </div>
  );
};

export default page;
