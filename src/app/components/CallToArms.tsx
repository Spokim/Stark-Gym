import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";

const CallToArms = () => {
  return (
    <div className="relative overflow-hidden w-screen max-w-full h-screen max-h-full">
      <Image
        priority
        src="/CTA-01.jpg"
        alt="Strong man posing with weights inside a gym"
        fill={true}
        sizes="
          (max-width: 768px) 0px,
          (min-width: 768px) 100vw"
        className="w-full h-auto object-cover hidden md:block"
      />
      <Image
        src="/CTA-02.png"
        alt="Dumbell weights inside a gym"
        fill={true}
        sizes="
          (max-width: 768px) 100vw,
          (min-width: 768px) 0px"
        className="w-full h-auto object-cover md:hidden"
      />
      <div className="absolute bottom-0 right-1/2 w-[45.833333%] xl:right-1/2 xl:w-[36rem] mx-auto mb-24">
        {" "}
        {/*absolute bottom-24*   */}
        <Link
          href="/products"
          className={buttonVariants({
            variant: "nav",
            className: "text-white bg-black",
          })}
        >
          GET STARTED
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CallToArms;
