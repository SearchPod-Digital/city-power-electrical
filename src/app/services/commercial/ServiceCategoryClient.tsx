"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { commercialServiceDetails } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { iconMap } from "@/components/Icons";
import s from "../../home.module.css";

const footerStyles = {
  footer: s.footer, footerInner: s.footerInner, footerGrid: s.footerGrid,
  footerBrand: s.footerBrand, footerBrandText: s.footerBrandText, footerText: s.footerText,
  footerColTitle: s.footerColTitle, footerColItem: s.footerColItem,
  footerBottom: s.footerBottom, footerCopy: s.footerCopy, footerBack: s.footerBack,
};

function ServiceSection({ svc, index }: { svc: typeof commercialServiceDetails[number]; index: number }) {
  const ref = useInView();
  const Icon = iconMap[svc.icon];
  const reversed = index % 2 === 1;

  return (
    <div
      id={svc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
      style={fadeUpCoolors(ref.visible, 60)}
      ref={ref.ref}
      className={`${s.svcDetailRow} ${reversed ? s.svcDetailRowReverse : ""}`}
    >
      <div>
        <div className={s.svcDetailIcon}>{Icon ? <Icon size={24} /> : null}</div>
        <h2 className={s.svcDetailTitle}>{svc.title}</h2>
        <p className={s.svcDetailIntro}>{svc.intro}</p>
        <ul className={s.svcFeatureList}>
          {svc.features.map((f) => (
            <li key={f} className={s.svcFeatureItem}>{f}</li>
          ))}
        </ul>
        <p className={s.svcDetailText}>{svc.detail}</p>
        <Link href="/contact" className={s.svcQuoteLink}>Get a Free Quote &rarr;</Link>
      </div>
      <div className={s.svcDetailImage}>
        <Image src={svc.img} alt={svc.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}

export default function ServiceCategoryClient() {
  const heroRef = useInView(0.1);

  return (
    <div className={s.page}>
      <Navbar />

      <div className={s.svcHeroSplit} ref={heroRef.ref}>
        <div className={s.svcHeroText}>
          <div className={s.svcBreadcrumb}>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span style={{ color: "var(--accent)" }}>Commercial</span>
          </div>
          <h1 style={fadeUpCoolors(heroRef.visible)} className={s.svcHeroTitle}>
            Commercial Electrical Services
          </h1>
          <p style={fadeUpCoolors(heroRef.visible, 100)} className={s.svcHeroDesc}>
            Powering businesses across the GTA. Offices, restaurants, warehouses, retail spaces, and industrial facilities — fully licensed for commercial and industrial electrical work.
          </p>
          <div style={fadeUpCoolors(heroRef.visible, 200)}>
            <Link href="/contact" className={s.btnPrimary} style={{ display: "inline-block", marginTop: 20 }}>
              Request a Commercial Quote
            </Link>
          </div>
        </div>
        <div className={s.svcHeroImage}>
          <Image src="/images/commercial-hero.jpg" alt="Commercial electrician working in office" fill sizes="50vw" style={{ objectFit: "cover" }} priority />
        </div>
      </div>

      <section className={s.section}>
        <div className={s.sectionInner}>
          {commercialServiceDetails.map((svc, i) => (
            <ServiceSection key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </section>

      <section className={`${s.section} ${s.sectionBgPale}`}>
        <div className={s.sectionInner} style={{ textAlign: "center" }}>
          <h2 className={s.sectionTitle}>Explore More Services</h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/services/residential" className={s.btnPrimary} style={{ display: "inline-block" }}>Residential Services</Link>
            <Link href="/services/specialty" className={s.btnOutline} style={{ display: "inline-block", color: "var(--c2)", borderColor: "var(--c2)" }}>Specialty Services</Link>
          </div>
        </div>
      </section>

      <CTA title="Need Commercial Electrical Work?" desc="Free estimates on all commercial projects. Fully licensed for commercial and industrial work across Ontario." />

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
