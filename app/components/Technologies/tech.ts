import { StaticImageData } from "next/image";
import { NextJs, Shopify, Webflow } from "../svg";

import shopifySS from "@/public/Shopify.png";
import webflowSS from "@/public/Webflow.png";
import nextjsSS from "@/public/Nextjs.png";

export interface Tech {
  name: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  svg: React.FC;
  text: string;
  reverse?: boolean;
}

const techs: Tech[] = [
  {
    name: "Webflow",
    image: {
      src: webflowSS,
      alt: "Webflow screenshot",
    },
    svg: Webflow,
    text: "Platform that lets you create, optimize, and scale web experiences with a visual interface and code generation",
  },
  {
    name: "Shopify",
    image: {
      src: shopifySS,
      alt: "Shopify screenshot",
    },
    svg: Shopify,
    text: "Liquid is a Ruby-based language for creating flexible web apps with dynamic content. Learn how to use Liquid for Shopify themes and other hosted web applications.",
    reverse: true,
  },
  {
    name: "Next.js",
    image: {
      src: nextjsSS,
      alt: "Nextjs screenshot",
    },
    svg: NextJs,
    text: "Next.js is a popular open-source React framework that provides a set of powerful tools and optimizations for building server-rendered and statically generated web applications",
  },
];

export default techs;
