import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | City Power Electrical Services",
  description: "Browse our portfolio of electrical work — panel upgrades, pot lights, EV chargers, commercial projects, and more across the GTA.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
