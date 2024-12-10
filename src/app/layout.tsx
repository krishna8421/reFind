import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
