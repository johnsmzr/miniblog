import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Capybara Blog", template: "%s | Capybara Blog" },
  description: "Generated for All Capybaras in the World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={inter.className}>
        <main
          className={clsx(
            "md:max-w-4xl mt-5 m-auto pb-12 px-5 md:px-0",
            "min-h-[calc(100%-4rem)]",
            "box-border"
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
