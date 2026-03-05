"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { residentialServiceDetails, commercialServiceDetails, specialtyServiceDetails } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { iconMap } from "@/components/Icons";
import s from "../home.module.css";

const footerStyles = {
  footer: s.footer, footerInner: s.footerInner, footerGrid: s.footerGrid,
  footerBrand: s.footerBrand, footerBrandText: s.footerBrandText, footerText: s.footerText,
  footerColTitle: s.footerColTitle, footerColItem: s.footerColItem,
  footerBottom: s.footerBottom, footerCopy: s.footerCopy, footerBack: s.footerBack,
};

const categories = [
  {
    title: "Residential",
    href: "/services/residential",
    desc: "From lighting and panel upgrades to complete rewiring, we keep your home safe and powered.",
    heroImg: "/images/residential-hero.jpg",
    services: residentialServiceDetails,
  },
  {
    title: "Commercial",
    href: "/services/commercial",
    desc: "Office buildouts, restaurant wiring, warehouse lighting, and commercial maintenance.",
    heroImg: "/images/commercial-hero.jpg",
    services: commercialServiceDetails,
  },
  {
    title: "Specialty",
    href: "/services/specialty",
    desc: "EV chargers, generators, smart home, solar-ready wiring, and energy solutions.",
    heroImg: "/images/specialty-hero.jpg",
    services: specialtyServiceDetails,
  },
];

function CategorySection({ cat, index }: { cat: typeof categories[number]; index: number }) {
  const ref = useInView();

  return (
    <section className={`${s.section} ${index % 2 === 1 ? s.sectionBgPale : ""}`} ref={ref.ref}>
      <div className={s.sectionInner}>
        <div style={fadeUpCoolors(ref.visible)}>
          <div className={s.overline}>{cat.title}</div>
          <h2 className={s.sectionTitle}>{cat.title} Electrical Services</h2>
          <p className={s.sectionDesc}>{cat.desc}</p>
        </div>
        <div style={fadeUpCoolors(ref.visible, 100)} className={s.svcOverviewGrid}>
          {cat.services.slice(0, 6).map((svc) => {
            const Icon = iconMap[svc.icon];
            return (
              <Link
                key={svc.title}
                href={`${cat.href}#${svc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={s.svcOverviewCard}
              >
                <div className={s.svcOverviewCardImage}>
                  <Image src={svc.img} alt={svc.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div className={s.svcOverviewCardBody}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: "var(--accent-dim)" }}>{Icon ? <Icon size={18} /> : null}</span>
                    <span className={s.svcOverviewCardTitle}>{svc.title}</span>
                  </div>
                  <p className={s.svcOverviewCardDesc}>{svc.intro.slice(0, 120)}...</p>
                </div>
              </Link>
            );
          })}
        </div>
        {cat.services.length > 6 && (
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href={cat.href} className={s.btnPrimary} style={{ display: "inline-block" }}>
              View All {cat.services.length} {cat.title} Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ServicesClient() {
  const heroRef = useInView(0.1);

  return (
    <div className={s.page}>
      <Navbar />

      <section className={s.pageHero} ref={heroRef.ref}>
        <div style={fadeUpCoolors(heroRef.visible)}>
          <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>Our Services</div>
          <h1 className={s.pageHeroTitle}>Complete Electrical Solutions</h1>
          <p className={s.pageHeroDesc}>
            From simple repairs to complex installations, we handle every electrical need with expertise and care. Over 32 services across residential, commercial, and specialty categories.
          </p>
        </div>
      </section>

      {categories.map((cat, i) => (
        <CategorySection key={cat.title} cat={cat} index={i} />
      ))}

      <CTA title="Not Sure What You Need?" desc="Call Sam for a free consultation. We will help you figure out the best solution for your project." />

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
