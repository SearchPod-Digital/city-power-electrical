"use client";

import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { testimonials } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import s from "../home.module.css";

export default function TestimonialsClient() {
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
          <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>Reviews</div>
          <h1 className={s.pageHeroTitle}>What Our Clients Say</h1>
          <p className={s.pageHeroDesc}>Real reviews from real customers across the Greater Toronto Area.</p>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.sectionInner}>
          <div className={s.ratingOverview}>
            <div className={s.ratingBig}>5.0</div>
            <div className={s.ratingStars}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
            <div className={s.ratingCount}>Based on {testimonials.length} reviews</div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.sectionBgPale}`} ref={gridRef.ref}>
        <div className={s.sectionInner}>
          <div className={s.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={t.name} style={fadeUpCoolors(gridRef.visible, 60 + i * 60)} className={s.testimonialCard}>
                <div className={s.testimonialQuote}>&ldquo;</div>
                <div className={s.testimonialStars}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className={s.testimonialStar}>{"\u2605"}</span>
                  ))}
                </div>
                <p className={s.testimonialText}>{t.text}</p>
                <div className={s.testimonialName}>{t.name}</div>
                <div className={s.testimonialLoc}>{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Experience the Difference?" desc="Join hundreds of satisfied customers. Get your free estimate today." />

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
