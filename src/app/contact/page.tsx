import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | City Power Electrical Services",
  description: "Contact City Power Electrical — call 416-877-3048 for 24/7 emergency service. Free estimates on all electrical work across the GTA.",
};

export default function ContactPage() {
  return <ContactClient />;
}
