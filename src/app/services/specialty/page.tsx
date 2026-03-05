import type { Metadata } from "next";
import ServiceCategoryClient from "./ServiceCategoryClient";

export const metadata: Metadata = {
  title: "Specialty Electrical Services | City Power Electrical",
  description: "Specialty electrical services — EV charger installation, pool & spa wiring, generator hookups, smart home automation, and energy audits.",
};

export default function SpecialtyPage() {
  return <ServiceCategoryClient />;
}
