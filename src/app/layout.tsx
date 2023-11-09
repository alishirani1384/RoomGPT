import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import couch from "@/assets/couch.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoomGPT",
  description: "This is room gpt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " bg-[#17181c] flex flex-col min-h-screen"}
      >
        <header className="w-full">
          <div className="container border-b p-5 mx-auto flex items-center justify-between">
            <Link href={"/"} className="flex items-center gap-3">
              <Image width={50} height={50} src={couch} alt="couch logo" />
              <h3 className="text-white md:text-3xl text-2xl font-bold">
                RoomGPT
              </h3>
            </Link>
            <button className="bg-blue-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3">
              Log in
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
