"use client";

import clsx from "clsx";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import SwitchTheme from "./SwitchTheme";
import Image from "next/image";

const navItems = [
  { children: "Category", href: "/category" },
  { children: "About", href: "/about" },
  { children: "Github", href: "https://github.com" },
];

export default function TopBar() {
  const { y } = useWindowScroll();
  return (
    <nav className="flex items-center justify-between py-6 px-2 text-2xl">
      {/* home link */}

      <Link href="/" className="flex items-center">
        <Image
          src="/avatar.jpg"
          alt="Capybara Blog"
          width={80}
          height={80}
          className=" rounded-full overflow-hidden mr-2"
        />
        <span>Home</span>
      </Link>

      {/* nav items link */}
      <div className={clsx("flex-1 max-w-xl", "md:flex justify-end", "hidden")}>
        {navItems.map((navItems) => (
          <Link
            key={navItems.href}
            className={clsx(
              "mr-10",
              "border-b-2 border-transparent hover:border-current"
            )}
            {...navItems}
          />
        ))}
        {/* change light/dark theme */}
        <SwitchTheme />
      </div>
    </nav>
  );
}
