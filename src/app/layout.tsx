"use client";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";
import { ShoppingCartProvider } from "./components/ShoppingCartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-[#f0f0f0] antialiased">
        <ShoppingCartProvider>
          <Navbar />

          <main>{children}</main>
          <Footbar />
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
/*
    const [itemsInShoppingCart, setItemsInShoppingCart] =
    useState<boolean>(false);

  const handleShoppingCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItemsInShoppingCart(true);
  };
  */
