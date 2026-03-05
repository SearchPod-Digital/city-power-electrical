import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "All Services | City Power Electrical Services",
  description: "Residential, commercial, and specialty electrical services across the GTA. Panel upgrades, EV chargers, pot lights, smart home, and more.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
