import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | City Power Electrical Services",
  description: "Learn about City Power Electrical Services — over 15 years of licensed, insured electrical work across the GTA. Meet Sam, our founder.",
};

export default function AboutPage() {
  return <AboutClient />;
}
