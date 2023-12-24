"use client";

import Link from "next/link";
import { useWindowScroll } from "react-use";

export default function Topbar() {
  const { y } = useWindowScroll();
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}
