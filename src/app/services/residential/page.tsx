import type { Metadata } from "next";
import ServiceCategoryClient from "./ServiceCategoryClient";

export const metadata: Metadata = {
  title: "Residential Electrical Services | City Power Electrical",
  description: "Expert residential electrical services in the GTA — pot lights, panel upgrades, wiring, outlets, basement finishing, and smoke detectors.",
};

export default function ResidentialPage() {
  return <ServiceCategoryClient />;
}
