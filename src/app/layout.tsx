import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Om Shankar Thakur - AI & ML Engineer",
  description: "Portfolio of Om Shankar Thakur, an AI Engineer specializing in NLP, RAG Systems, and Intelligent Automation.",
  keywords: ["AI Engineer", "ML", "Next.js", "Portfolio", "Generative AI", "NLP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(outfit.className, "antialiased bg-black text-white min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
