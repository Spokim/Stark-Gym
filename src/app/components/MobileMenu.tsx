import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="text-white flex justify-between items-center h-full px-6">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HamburgerMenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent>
            <DropdownMenuGroup className="grid h-full gap-4 px-6 py-4 mt-6 bg-black text-white">
              <DropdownMenuItem asChild>
                <Link href="/">HOME</Link>
              </DropdownMenuItem>{" "}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/products">GYM MEMBERSHIP</Link>
              </DropdownMenuItem>{" "}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/collections">STORE</Link>
              </DropdownMenuItem>{" "}
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
      <Link href="/" className="text-white font-bold text-2xl ">
        STARK GYM
      </Link>
      <Link href="/cart">
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff" }} />
      </Link>
    </div>
  );
};

export default MobileMenu;

