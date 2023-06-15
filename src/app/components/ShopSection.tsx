"use client";
import Link from "next/link";
import Heading from "./ui/Heading";
import Image from "next/image";
import * as Form from "@radix-ui/react-form";
import { Button } from "./ui/Button";
import React, { useContext, useState } from "react";
import Paragraph from "./ui/Paragraph";
import { ShoppingCartContext } from "./ShoppingCartContext";

const ShopSection = () => {
  const { setItemsInShoppingCart } = useContext(ShoppingCartContext);
  const [counter, setCounter] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>("/1DayPass.jpg");

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
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItemsInShoppingCart(true);
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
    <div className="relative -top-12 max-w-6xl w-11/12 mx-auto p-5 bg-white rounded-md">
      <Heading className="hidden md:block">GYM PASSES</Heading>
      <Heading size="sm" className="md:hidden">
        GYM PASSES
      </Heading>
      <div className="flex flex-col md:flex-row md:items-stretch max-w-full mt-4 gap-8">
        <div className="flex flex-1 justify-center items-center">
          <Link href="/products" as={"image"}>
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
          <Paragraph>{passPrice}</Paragraph>
          <Form.Root className="grid grid-cols-[1fr_4rem] gap-8 w-full mt-8">
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
            <Form.Field className="" name="quantity">
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
              <Button onClick={handleButtonClick}>ADD TO CART</Button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
