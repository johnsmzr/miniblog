// 这是一个客户端组件！
"use client";

import { ThemeProvider as Provider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider attribute="class" enableSystem={false}>
      {children}
    </Provider>
  );
}
