"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/catalogue",
      label: "Catalogo",
      active: pathname === "/catalogue",
    },
    {
        href: "/contact",
        label: "Contacto",
        active: pathname === "/contact",
      },
  ];

  return (
    <ul className="flex items-center space-x-4 lg:space-x-6 ml-auto">
      {routes.map((route) => (
        <Link href={route.href} key={route.href} className={ twMerge( 'font-semibold text-sm ' ,route.active ? 'text-[#82d1cb]' : 'text-black')}>
          {route.label}
        </Link>
      ))}
    </ul>
  );
};

export default MainNav;
