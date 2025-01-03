import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Pixelify_Sans } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/navbar";
import { Toaster } from "sonner";
import { SITE_URL } from "@/lib/constant";
import { createMetadata } from "@/lib/metadata";
import type { Viewport } from "next";
import tailwindConfig from "@/../tailwind.config";

export const metadata: Metadata = createMetadata({
  title: {
    template: "%s | reFind",
    default: "reFind",
  },
  description: "A modern link sharing platform for developers",
  metadataBase: new URL(SITE_URL),
});

export const viewport: Viewport = {
  themeColor: "#1A1C28",
};

type LayoutProps = {
  children: React.ReactNode;
};

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${pixelifySans.variable}`}
    >
      <body className="antialiased font-mono bg-primary-background text-zinc-50 min-h-[200rem]">
        <NavBar />
        <main className="mt-24">{children}</main>
        <Toaster closeButton />
      </body>
    </html>
  );
}
