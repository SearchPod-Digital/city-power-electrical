"use client";

import Link from "next/link";
import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { contact, areasByRegion, areas } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import s from "../home.module.css";

export default function AreasClient() {
  const heroRef = useInView(0.1);
  const gridRef = useInView();

  const footerStyles = {
    footer: s.footer, footerInner: s.footerInner, footerGrid: s.footerGrid,
    footerBrand: s.footerBrand, footerBrandText: s.footerBrandText, footerText: s.footerText,
    footerColTitle: s.footerColTitle, footerColItem: s.footerColItem,
    footerBottom: s.footerBottom, footerCopy: s.footerCopy, footerBack: s.footerBack,
  };

  return (
    <div className={s.page}>
      <Navbar />

      <section className={s.pageHero} ref={heroRef.ref}>
        <div style={fadeUpCoolors(heroRef.visible)}>
          <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>Service Areas</div>
          <h1 className={s.pageHeroTitle}>Wide-Radius Service Across Ontario</h1>
          <p className={s.pageHeroDesc}>From Wasaga Beach to London, Toronto to Cobourg &mdash; we bring expert electrical service to your door.</p>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.sectionInner}>
          <div className={s.areaMetric}>
            <div className={s.areaMetricItem}>
              <div className={s.areaMetricValue}>{areas.length}+</div>
              <div className={s.areaMetricLabel}>Cities Served</div>
            </div>
            <div className={s.areaMetricItem}>
              <div className={s.areaMetricValue}>4</div>
              <div className={s.areaMetricLabel}>Regions Covered</div>
            </div>
            <div className={s.areaMetricItem}>
              <div className={s.areaMetricValue}>24/7</div>
              <div className={s.areaMetricLabel}>Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.sectionBgPale}`} ref={gridRef.ref}>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(gridRef.visible)}>
            <h2 className={s.sectionTitle}>Our Coverage by Region</h2>
          </div>
          <div className={s.regionGrid}>
            {Object.entries(areasByRegion).map(([region, cities], i) => (
              <div key={region} style={fadeUpCoolors(gridRef.visible, 60 + i * 60)} className={s.regionCard}>
                <div className={s.regionTitle}>{region}</div>
                <div className={s.regionCities}>
                  {cities.map((city) => (
                    <span key={city} className={s.regionCity}>{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className={s.sectionDesc} style={{ marginTop: 32, textAlign: "center", maxWidth: "100%" }}>
            Don&apos;t see your city? Contact us &mdash; we likely serve your area too. Our coverage is always expanding.
          </p>
        </div>
      </section>

      <CTA title="Need an Electrician in Your Area?" desc={`We serve ${areas.length}+ cities. Call or email for a free estimate.`} />

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
