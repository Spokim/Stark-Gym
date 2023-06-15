"use client";
import Link from "next/link";
import Heading from "../components/ui/Heading";
import Image from "next/image";
import * as Form from "@radix-ui/react-form";
import { Button } from "../components/ui/Button";
import { useContext, useState } from "react";
import Paragraph from "../components/ui/Paragraph";
import { gymcard } from "@/helpers/gymcard";
import { ShoppingCartContext } from "./ShoppingCartContext";

const GymMembership = () => {
  const { setItemsInShoppingCart } = useContext(ShoppingCartContext);
  const [counter, setCounter] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>("/1DayPass.jpg");
  const [showFullHeight, setShowFullHeight] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowFullHeight(!showFullHeight);
  };

  const handleButtonClickCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItemsInShoppingCart(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const action = e.currentTarget.textContent;
    if (action === "-" && counter >= 2) {
      setCounter(counter - 1);
    } else if (action === "+" && counter < 9) {
      setCounter(counter + 1);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    const selectedOptionIndex = e.target.selectedIndex;
    if (selectedOptionIndex >= 3) {
      setShowFullHeight(true);
    } else {
      setShowFullHeight(false);
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const clickedImageAlt = e.currentTarget.getAttribute("alt");

    const selectedImage = gymcard().find(
      (image) => image.alt === clickedImageAlt
    );
    if (selectedImage) {
      setSelectedOption(selectedImage.src);
    }
  };

  let passPrice = "";
  switch (selectedOption) {
    case "/1DayPass.jpg":
      passPrice = `$${(15.0 * counter).toFixed(2)}`;
      break;
    case "/1WeekPass.jpg":
      passPrice = `$${(29.95 * counter).toFixed(2)}`;
      break;
    case "/1MonthPass.jpg":
      passPrice = `$${(49.95 * counter).toFixed(2)}`;
      break;
    case "/3MonthsPass.jpg":
      passPrice = `$${(144.95 * counter).toFixed(2)}`;
      break;
    case "/6MonthsPass.jpg":
      passPrice = `$${(274.95 * counter).toFixed(2)}`;
      break;
    case "/12MonthsPass.jpg":
      passPrice = `$${(499.95 * counter).toFixed(2)}`;
      break;
    default:
      break;
  }

  return (
    <div className="grid grid-flow-col p-5">
      <div
        className={`hidden md:flex md:flex-col items-center justify-start ${
          showFullHeight ? "flex-col-reverse justify-end" : null
        } md:h-[448px] overflow-hidden`}
      >
        <div className="hidden md:block md:w-[197px]">
          <button
            className="flex justify-center w-full bg-red-500 text-white"
            onClick={handleButtonClick}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {gymcard().map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={parseInt(image.width, 10)}
              height={parseInt(image.height, 10)}
              className={
                image.src === selectedOption
                  ? "max-h-[135px] max-w-[197] p-2 border-2 my-2 border-red-500 hover:cursor-pointer"
                  : "max-h-[135px] max-w-[197] p-2 my-2 hover:cursor-pointer"
              }
              onClick={handleImageClick}
            />
          ))}
          <button
            className="flex justify-center w-full bg-red-500 text-white"
            onClick={handleButtonClick}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-stretch max-w-full mt-4 gap-8">
        <div className="flex flex-1 justify-center items-center">
          <Link href="/products">
            <Image
              src={selectedOption}
              alt=""
              width="1024"
              height="700"
              className="max-w-sm w-full"
            />
          </Link>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <Heading className="hidden md:block">GYM PASSES</Heading>
          <Heading size="sm" className="md:hidden">
            GYM PASSES
          </Heading>
          <Paragraph>{passPrice}</Paragraph>
          <Form.Root className="grid grid-cols-[1fr_4rem] gap-8 w-full pt-8 border-t-2">
            <Form.Field className="grid" name="gym-pass">
              <Form.Label>GYM PASSES</Form.Label>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="/1DayPass.jpg">1 Day Pass</option>
                <option value="/1WeekPass.jpg">1 Week Pass</option>
                <option value="/1MonthPass.jpg">1 Month Pass</option>
                <option value="/3MonthsPass.jpg">3 Months Pass</option>
                <option value="/6MonthsPass.jpg">6 Months Pass</option>
                <option value="/12MonthsPass.jpg">12 Months Pass</option>
              </select>
            </Form.Field>
            <Form.Field name="quantity">
              <Form.Label>Quantity</Form.Label>
              <div className="flex">
                <Button
                  variant="quantity"
                  size="xxs"
                  onClick={(e) => handleClick(e)}
                >
                  -
                </Button>
                <input
                  type="text"
                  value={counter}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    if (!isNaN(newValue) && newValue < 10) {
                      setCounter(newValue);
                    } else if (newValue > 9) {
                      setCounter(9);
                    }
                  }}
                  readOnly
                  className="h-11 w-[20px] p-1"
                ></input>
                <Button
                  variant="quantity"
                  size="xxs"
                  onClick={(e) => handleClick(e)}
                >
                  +
                </Button>
              </div>
            </Form.Field>
            <Form.Submit asChild>
              <Button onClick={handleButtonClickCart}>ADD TO CART</Button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </div>
  );
};

export default GymMembership;
