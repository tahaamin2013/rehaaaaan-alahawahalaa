"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

export default function NextThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="className" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}