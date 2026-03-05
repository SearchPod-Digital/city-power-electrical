import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | City Power Electrical Services",
  description: "Read what our customers say about City Power Electrical — 5-star reviews from homeowners and businesses across the GTA.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
