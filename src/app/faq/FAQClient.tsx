"use client";

import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { faqs } from "@/lib/data";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import s from "../home.module.css";

export default function FAQClient() {
  const heroRef = useInView(0.1);
  const faqRef = useInView();

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
          <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>FAQ</div>
          <h1 className={s.pageHeroTitle}>Frequently Asked Questions</h1>
          <p className={s.pageHeroDesc}>Everything you need to know about our electrical services, licensing, and process.</p>
        </div>
      </section>

      <section className={s.section} ref={faqRef.ref}>
        <div className={s.sectionInner} style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={fadeUpCoolors(faqRef.visible)}>
            <FAQ
              styles={{ faqList: s.faqList, faqItem: s.faqItem, faqQuestion: s.faqQuestion, faqAnswer: s.faqAnswer }}
              items={faqs}
            />
          </div>
        </div>
      </section>

      <CTA title="Still Have Questions?" desc="Call Sam directly or send us a message. We are happy to help." />

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
