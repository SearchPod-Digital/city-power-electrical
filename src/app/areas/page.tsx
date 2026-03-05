import type { Metadata } from "next";
import AreasClient from "./AreasClient";

export const metadata: Metadata = {
  title: "Service Areas | City Power Electrical Services",
  description: "City Power Electrical serves 38+ cities across Ontario — Toronto, Mississauga, Brampton, Markham, Hamilton, Barrie, London, and more.",
};

export default function AreasPage() {
  return <AreasClient />;
}
