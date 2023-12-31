import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import TopBar from "@/components/TopBar";
import ThemeProvider from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Static metadata
export const metadata: Metadata = {
  title: {
    default: "Capybara Blog",
    template: "%s | Capybara Blog",
  },
  description: "Generated for All Capybaras in the World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={clsx(
          "antialiased m-auto box-border dark:text-white/90 transition-colors duration-300",
          inter.className
        )}
      >
        <ThemeProvider>
          
          <main
            className={clsx(
              "md:max-w-4xl mt-5 m-auto pb-12 px-5 md:px-0",
              "min-h-[calc(100%-4rem)]",
              "box-border",
            )}
          >
            <TopBar />
            {children}
            <Footer />
          </main>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
