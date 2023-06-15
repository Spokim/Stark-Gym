import Link from "next/link";
import Heading from "./ui/Heading";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4  items-center max-w-6xl w-11/12 mx-auto bg-white md:bg-transparent rounded-md">
      <Link
        href="/collections"
        className="bg-white hover:bg-transparent p-5 rounded-md"
      >
        <Heading size="sm">Coaching</Heading>
        <span className="text-red-500 flex justify-center">VIEW ALL</span>
        <Image
          src="/Coaching.png"
          alt=""
          width={400}
          height={400}
          className="rounded-md"
        ></Image>
      </Link>
      <Link
        href="/collections"
        className="bg-white hover:bg-transparent p-5 rounded-md"
      >
        <Heading size="sm">Clothing</Heading>
        <span className="text-red-500 flex justify-center">VIEW ALL</span>
        <Image
          src="/Cloths.png"
          alt=""
          width={400}
          height={400}
          className="rounded-md"
        ></Image>
      </Link>
      <Link
        href="/collections"
        className="bg-white hover:bg-transparent p-5 rounded-md"
      >
        <Heading size="sm">Products</Heading>
        <span className="text-red-500 flex justify-center">VIEW ALL</span>
        <Image
          src="/Products.png"
          alt=""
          width={400}
          height={400}
          className="rounded-md"
        ></Image>
      </Link>
    </div>
  );
};

export default Featured;
