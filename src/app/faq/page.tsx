import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | City Power Electrical Services",
  description: "Frequently asked questions about City Power Electrical — licensing, service areas, pricing, EV chargers, emergency service, and more.",
};

export default function FAQPage() {
  return <FAQClient />;
}
