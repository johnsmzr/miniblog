"use client";

import clsx from "clsx";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import SwitchTheme from "./SwitchTheme";
import Image from "next/image";

const navItems = [
  {
    title: "Category",
    href: "/category",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Github",
    href: "https://github.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function TopBar() {
  const { y } = useWindowScroll();
  return (
    <nav className="flex items-center justify-between py-6 px-2 text-2xl">
      {/* home */}
      <Link
        href="/"
        className="flex items-center hover:scale-110 transform duration-300"
      >
        <Image
          src="/avatar.jpg"
          alt="Capybara Blog"
          width={80}
          height={80}
          className=" rounded-full overflow-hidden mr-2 hover:opacity-90"
        />
        <span className="mr-10 px-4 py-2 hover:scale-110 hover:bg-gray-200 rounded-md transform duration-300">Home</span>
      </Link>

      {/* nav items link */}
      <div className="flex-1 max-w-xl md:flex justify-end hidden">
        {navItems.map((navItems) => (
          <Link
            key={navItems.title}
            className="mr-10 px-4 py-2 hover:scale-110 hover:bg-gray-200 rounded-md transform duration-300"
            {...navItems}
          >
            {navItems.title}
          </Link>
        ))}
        {/* change dark/light mode */}
        <SwitchTheme className="mr-10 px-4 py-2 hover:scale-110 hover:bg-gray-200 rounded-md transform duration-300"/>
      </div>
    </nav>
  );
}
