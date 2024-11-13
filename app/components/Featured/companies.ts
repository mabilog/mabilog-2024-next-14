import { Molsoft, Ssense, Walter } from "../svg";

export interface Company {
  name: string;
  svg: React.FC;
  url: string;
}

const companies: Company[] = [
  {
    name: "Walter",
    svg: Walter,
    url: "https://www.walterinteractive.com",
  },
  {
    name: "Molsoft",
    svg: Molsoft,
    url: "https://www.molsoft.io",
  },
  {
    name: "Ssense",
    svg: Ssense,
    url: "https://www.Ssense.com",
  },
];

export default companies;
