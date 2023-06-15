"use client";
import Featured from "@/app/components/Featured";
import { ShoppingCartContext } from "@/app/components/ShoppingCartContext";
import StoreField from "@/app/components/StoreField";
import { Button } from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";
import Paragraph from "@/app/components/ui/Paragraph";
import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";

const Page: React.FC = () => {
  const { setItemsInShoppingCart } = useContext(ShoppingCartContext);
  const [counter, setCounter] = useState<number>(1);

  const searchParams = useSearchParams();
  const filePathImage = searchParams.get("image");
  const filePathText = searchParams.get("text");
  const filePathCost = parseFloat(searchParams.get("price")!);
  const filePathTextInput = searchParams.get("textInput")!;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const action = e.currentTarget.textContent;
    if (action === "-" && counter >= 2) {
      setCounter(counter - 1);
    } else if (action === "+" && counter < 9) {
      setCounter(counter + 1);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItemsInShoppingCart(true);
  };

  // To update the price depending on the quantity
  let x = filePathCost * counter;

  return (
    <div>
      <Heading className="hidden md:block">PRODUCTS</Heading>
      <Heading size="sm" className="md:hidden">
        PRODUCTS
      </Heading>
      <div className="flex flex-col md:flex-row md:items-stretch mb-8 mt-4 max-w-6xl w-11/12 mx-auto md:gap-8">
        <div className="flex flex-col justify-center items-center p-5">
          {filePathImage && (
            <Link href="/products" as={"image"}>
              <Image
                src={`${filePathImage}`}
                alt=""
                width="1024"
                height="700"
                className="max-w-sm w-full"
              />
            </Link>
          )}
          <Paragraph className="font-bold md:my-4">{filePathText}</Paragraph>
        </div>
        <div className="flex flex-col flex-1 items-center p-5">
          <Paragraph>{`$${x.toFixed(2)}`}</Paragraph>
          <Form.Root className="grid grid-cols-[1fr_4rem] gap-8 w-full mt-8">
            <StoreField text={filePathTextInput} />
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
              <Button onClick={handleButtonClick}>ADD TO CART</Button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default Page;
