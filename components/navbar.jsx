import Link from "next/link";
import MainNav from "./main-nav";
import Container from "./ui/container";
import { Flower } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8 ">
          <Link href="/" className="flex gap-1">
            <Flower/>
            <span className="font-bold text-xl">Rosseta</span>
          </Link>
          <MainNav />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
