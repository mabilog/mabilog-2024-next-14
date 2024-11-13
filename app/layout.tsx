import type { Metadata } from "next";
import "./styles/globals.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

// import localFont from "@next/font/local";
// const itcBook = localFont({
//   src: "./fonts/ITC Avant Garde Gothic Pro-Book.otf",
// });

export const metadata: Metadata = {
  title: "Gabriel Angelo Mabilog's personal website",
  description:
    "Skilled Full Stack Developer with expertise in React, Next.js, and Shopify. A reliable, team-focused asset for high-quality web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
