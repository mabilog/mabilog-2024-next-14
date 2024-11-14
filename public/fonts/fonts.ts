import localFont from "next/font/local";

export const avantGarde = localFont({
  src: [
    {
      path: "./ITC Avant Garde Gothic Pro-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ITC Avant Garde Gothic Pro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./ITC Avant Garde Gothic Pro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avantGarde",
});

export const sofia = localFont({
  src: [
    {
      path: "./Sofia Pro Regular Az.oft",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Sofia Pro Semi Bold Az.oft",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sofia",
});
