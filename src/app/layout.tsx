import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shibu | Designer & Developer",
  description: "Web Developer crafting minimal, intentional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} antialiased font-mono bg-[#0a0a0a] text-[#ededed] selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
