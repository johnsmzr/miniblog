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
    <html lang="zh-CN" className={inter.className}>
      <body className="antialiased max-w-3xl m-auto px-2 min-h-[calc(100%-4rem)] border-box">
        <ThemeProvider>
          <main>
            <TopBar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
