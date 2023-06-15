"use client";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Footbar = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row justify-around bg-black text-white p-5">
      <div>
        MENU
        <div className="flex flex-col mt-4 text-[#f0f0f080]">
          <Link href="/">Home</Link>
          <Link href="/products">Gym Membership</Link>
          <Link href="/collections">Store</Link>
        </div>
      </div>
      <div>
        BE IN THE KNOW
        <div className="mt-4 text-[#f0f0f080]">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email">
              Promotions, new products and sales,
              <br /> directly to your inbox.
            </label>
            <div className="flex w-full">
              <input
                id="email"
                type="email"
                placeholder="Your email"
                onInput={handleEmailInput}
                value={email}
                className="text-black"
              />
              <button type="submit" className="bg-red-500 text-white p-1">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        FOLLOW US
        <div className="flex gap-4 mt-4">
          <a href="www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebook}
              size="xl"
              style={{ color: "#6d786d" }}
            />
          </a>
          <a href="www.instagram.com">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ color: "#6d786d" }}
            />
          </a>
          <a href="www.youtube.com">
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              style={{ color: "#6d786d" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footbar;
