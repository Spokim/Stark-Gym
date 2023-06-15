import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { useContext } from "react";

interface DesktopMenuProps {
  pathName: string;
}

const DesktopMenu = ({ pathName }: DesktopMenuProps) => {
  const { itemsInShoppingCart } = useContext(ShoppingCartContext);
  return (
    <div className="flex justify-between items-center h-full px-6">
      <Link href="/" className="text-white font-bold text-2xl ">
        STARK GYM
      </Link>
      <div>
        <Link
          href="/"
          className={buttonVariants({
            variant: pathName === "/" ? "navActive" : "nav",
          })}
        >
          HOME
        </Link>
        <Link
          href="/products"
          className={buttonVariants({
            variant: pathName === "/products" ? "navActive" : "nav",
          })}
        >
          GYM MEMBERSHIP
        </Link>
        <Link
          href="/collections"
          className={buttonVariants({
            variant: pathName === "/collections" ? "navActive" : "nav",
          })}
        >
          STORE
        </Link>
      </div>
      <div className="w-36 flex justify-end">
        <Link href="/cart">
          {itemsInShoppingCart && (
            <span className="absolute h-[10px] w-[10px] rounded bg-red-500">
              {" "}
            </span>
          )}
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff" }} />
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
