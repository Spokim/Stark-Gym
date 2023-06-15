import Image from "next/image";
import Heading from "./ui/Heading";
import { Button } from "./ui/Button";

const Location = () => {
  return (
    <div className="relative mt-12 max-w-6xl w-11/12 mx-auto rounded-md">
      <div className="bg-white md:absolute md:top-8 md:left-4">
        <div className="flex flex-col items-center justify-center text-center p-5">
          <Heading size="sm">STARK GYM</Heading>
          <p>XX Stark Road <br />
          Strong city, Strongest Country.</p>
          <p className="mt-4 mb-2">
            Mon - Fri: 4am - 11pm <br /> Sat - Sun: 6am - 11pm
          </p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Beerenberg%2C+Svalbard+and+Jan+Mayen"><Button>Directions</Button></a>
        </div>
      </div>
      <Image
        src="/Facade.jpg"
        width={1280}
        height={640}
        alt="AI-generated art of a futuristic building with a parking space."
      />
    </div>
  );
};

export default Location;