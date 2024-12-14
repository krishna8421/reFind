import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import { ThemeProvider } from "./theme-provider";
import NavBar from "@/components/navbar";
import { Toaster } from "sonner";
import { SITE_URL } from "@/lib/constant";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: {
    template: "%s | reFind",
    default: "reFind",
  },
  description: "A modern link sharing platform for developers",
  metadataBase: new URL(SITE_URL),
});

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
          <Toaster closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
