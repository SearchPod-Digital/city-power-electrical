import Link from "next/link";
import { contact } from "@/lib/data";
import s from "@/app/home.module.css";

interface CTAProps {
  title?: string;
  desc?: string;
}

export default function CTA({
  title = "Ready to Get Started?",
  desc = "Call Sam for a free estimate. Same-day service available 24/7.",
}: CTAProps) {
  return (
    <section className={s.ctaSection}>
      <svg className={s.ctaLines} viewBox="0 0 1200 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top-left */}
        <path d="M0 60 H180 L200 40 H320" stroke="#EAB308" strokeWidth="1.5" fill="none" />
        {/* Bottom-left */}
        <path d="M0 340 H120 L140 360 H260" stroke="#EAB308" strokeWidth="1.5" fill="none" />
        {/* Top-right */}
        <path d="M880 40 H1000 L1020 60 H1200" stroke="#EAB308" strokeWidth="1.5" fill="none" />
        {/* Bottom-right */}
        <path d="M940 360 H1060 L1080 340 H1200" stroke="#EAB308" strokeWidth="1.5" fill="none" />
        {/* Mid-left */}
        <path d="M0 200 H100 L120 180 H220" stroke="#EAB308" strokeWidth="1.5" fill="none" />
        {/* Mid-right */}
        <path d="M980 200 H1080 L1100 220 H1200" stroke="#EAB308" strokeWidth="1.5" fill="none" />
        {/* Endpoint dots */}
        <circle cx="320" cy="40" r="3" fill="#EAB308" />
        <circle cx="260" cy="360" r="3" fill="#EAB308" />
        <circle cx="880" cy="40" r="3" fill="#EAB308" />
        <circle cx="940" cy="360" r="3" fill="#EAB308" />
        <circle cx="220" cy="180" r="3" fill="#EAB308" />
        <circle cx="980" cy="200" r="3" fill="#EAB308" />
      </svg>
      <div className={s.ctaInner}>
        <h2 className={s.ctaTitle}>{title}</h2>
        <p className={s.ctaDesc}>{desc}</p>
        <div>
          <a href={`tel:${contact.phoneFull}`} className={s.ctaBtnWhite}>{contact.phone}</a>
          <Link href="/contact" className={s.ctaBtnOutline}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
