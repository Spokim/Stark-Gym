import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";

const HeroSection = () => {
  return (
    <div className="max-w-6xl w-11/12 mx-auto mt-12 p-5 bg-white rounded-md">
      <Heading className="hidden md:block md:mb-2">Stark Gym</Heading>
      <Heading size="sm" className="md:hidden">
        Stark Gym
      </Heading>
      <Paragraph className="max-w-full text-center">Why choose us?</Paragraph>
      <div className="grid grid-flow-row md:grid-flow-col gap-12">
        <div>
          <Paragraph className="text-center font-bold">
            Specialized Expertise:
          </Paragraph>
          <Paragraph>
            Benefit from our trainers&apos; expertise in muscle building and strength
            training for personalized programs and effective results. Our team
            stays up to date with the latest research and techniques to ensure
            you receive the most cutting-edge guidance in your fitness journey.
          </Paragraph>
        </div>
        <div>
          <Paragraph className="text-center font-bold">
            State-of-the-Art Equipment:
          </Paragraph>
          <Paragraph>
            Access cutting-edge equipment designed for muscle and strength
            training, maximizing your workout efficiency. Our gym regularly
            updates and maintains our equipment to provide you with a top-notch
            training experience.
          </Paragraph>
        </div>
        <div>
          <Paragraph className="text-center font-bold">
            Motivating Environment and Community:
          </Paragraph>
          <Paragraph>
            Join a supportive community of like-minded individuals, enjoying
            group sessions and workshops to stay motivated and inspired on your
            fitness journey. Our community fosters a positive atmosphere where
            you can connect with others, share progress, and celebrate
            achievements, creating lasting friendships along the way.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
