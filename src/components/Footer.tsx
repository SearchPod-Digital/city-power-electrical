import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/data";

interface FooterStyles {
  footer: string;
  footerInner: string;
  footerGrid: string;
  footerBrand: string;
  footerBrandText: string;
  footerText: string;
  footerColTitle: string;
  footerColItem: string;
  footerBottom: string;
  footerCopy: string;
  footerBack: string;
  footerLink?: string;
}

interface FooterProps {
  styles: FooterStyles;
  basePath: string;
  designLabel: string;
}

export default function Footer({ styles: s, basePath, designLabel }: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div className={s.footerGrid}>
          <div>
            <Link href="/" className={s.footerBrand} style={{ textDecoration: "none" }}>
              <Image src="/images/logo-icon.png" alt="City Power Electrical Services" width={80} height={80} style={{ borderRadius: 10 }} />
              <span className={s.footerBrandText}>
                <span style={{ display: "block", fontSize: 18, fontWeight: 800 }}>City Power</span>
                <span style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>Electrical Services</span>
              </span>
            </Link>
            <p className={s.footerText}>
              Licensed &amp; insured electrical contractor serving Ontario.{" "}
              {contact.license}.
            </p>
          </div>
          <div>
            <h4 className={s.footerColTitle}>Services</h4>
            {[
              { label: "Residential", href: "/services/residential" },
              { label: "Commercial", href: "/services/commercial" },
              { label: "Specialty", href: "/services/specialty" },
              { label: "All Services", href: "/services" },
            ].map((item) => (
              <Link key={item.label} href={`${basePath}${item.href}`} className={s.footerLink || s.footerColItem} style={{ display: "block", textDecoration: "none" }}>
                <div className={s.footerColItem}>{item.label}</div>
              </Link>
            ))}
          </div>
          <div>
            <h4 className={s.footerColTitle}>Quick Links</h4>
            {[
              { label: "About Us", href: "/about" },
              { label: "Gallery", href: "/gallery" },
              { label: "Service Areas", href: "/areas" },
              { label: "FAQ", href: "/faq" },
              { label: "Reviews", href: "/testimonials" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link key={item.label} href={`${basePath}${item.href}`} className={s.footerLink || s.footerColItem} style={{ display: "block", textDecoration: "none" }}>
                <div className={s.footerColItem}>{item.label}</div>
              </Link>
            ))}
          </div>
          <div>
            <h4 className={s.footerColTitle}>Contact</h4>
            <div className={s.footerColItem}>{contact.name} &mdash; {contact.phone}</div>
            <div className={s.footerColItem}>{contact.email}</div>
            <div className={s.footerColItem}>24/7 Emergency Service</div>
            <div className={s.footerColItem}>{contact.license}</div>
          </div>
        </div>
        <div className={s.footerBottom}>
          <div className={s.footerCopy}>&copy; {new Date().getFullYear()} {contact.company}. All rights reserved.</div>
          <Link href="/" className={s.footerBack}>&larr; {designLabel}</Link>
        </div>
      </div>
    </footer>
  );
}
