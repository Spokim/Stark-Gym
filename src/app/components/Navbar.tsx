import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-black h-16">
      <div className="h-full md:hidden">
        <MobileMenu />
      </div>
      <div className="h-full hidden md:block">
        <DesktopMenu pathName={pathName} />
      </div>
    </nav>
  );
};

export default Navbar;
