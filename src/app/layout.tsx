import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import { ThemeProvider } from "./theme-provider";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | reFind",
    default: "reFind - A modern link sharing platform for developers",
  },
  description: "A modern link sharing platform for developers",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-zinc-50 dark:bg-zinc-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
