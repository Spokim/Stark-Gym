import { Metadata } from "next";
import Card from "../components/ui/Card";
import Heading from "../components/ui/Heading";
import Link from "next/link";
import { storehelp } from "@/helpers/storehelp";

export const metadata: Metadata = {
  title: "Stark Gym | Get Strong, Get Fit, Get Results",
  description:
    "Join Stark Gym and unlock your full potential. We are dedicated to helping you achieve your fitness goals with state-of-the-art facilities, expert trainers, and a motivating environment.",
};

const page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center mb-8">
      <div>
        <Heading size="sm" className="text-left my-4">
          Coaching
        </Heading>
        <div className="flex flex-row gap-4">
          {storehelp().informationCoach.map((item, index) => (
            <Link
              href={{
                pathname: "/collections/store",
                query: {
                  image: `${item.image}`,
                  alt: `${item.alt}`,
                  text: `${item.text}`,
                  price: item.price,
                  textInput: "CHOACH",
                },
              }}
            >
              <Card
                image={item.image}
                alt={item.alt}
                text={item.text}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Heading size="sm" className="text-left my-4">
          Clothing
        </Heading>
        <div className="flex flex-row gap-4">
          {storehelp().informationCloths.map((item) => (
            <Link
              href={{
                pathname: "/collections/store",
                query: {
                  image: `${item.image}`,
                  alt: `${item.alt}`,
                  text: `${item.text}`,
                  price: item.price,
                  textInput: "SIZE",
                },
              }}
            >
              <Card
                image={item.image}
                alt={item.alt}
                text={item.text}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Heading size="sm" className="text-left my-4">
          Products
        </Heading>
        <div className="flex flex-row gap-4">
          {storehelp().informationProducts.map((item) => (
            <Link
              href={{
                pathname: "/collections/store",
                query: {
                  image: `${item.image}`,
                  alt: `${item.alt}`,
                  text: `${item.text}`,
                  price: item.price,
                  textInput: "PRODUCT",
                },
              }}
            >
              <Card
                image={item.image}
                alt={item.alt}
                text={item.text}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
