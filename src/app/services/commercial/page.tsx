import type { Metadata } from "next";
import ServiceCategoryClient from "./ServiceCategoryClient";

export const metadata: Metadata = {
  title: "Commercial Electrical Services | City Power Electrical",
  description: "Commercial electrical services in the GTA — office buildout, restaurant wiring, warehouse electrical, retail lighting, and fire alarm systems.",
};

export default function CommercialPage() {
  return <ServiceCategoryClient />;
}
