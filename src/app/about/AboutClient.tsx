"use client";

import Link from "next/link";
import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { contact, metrics } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { iconMap } from "@/components/Icons";
import s from "../home.module.css";

export default function AboutClient() {
  const heroRef = useInView(0.1);
  const storyRef = useInView();
  const valuesRef = useInView();
  const teamRef = useInView();

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
          <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>About Us</div>
          <h1 className={s.pageHeroTitle}>Powering Ontario Since 2009</h1>
          <p className={s.pageHeroDesc}>Over 15 years of trusted electrical work for homes, businesses, and industries across the Greater Toronto Area.</p>
        </div>
      </section>

      <section className={s.section} ref={storyRef.ref}>
        <div className={s.sectionInner}>
          <div className={s.aboutGrid}>
            <div style={fadeUpCoolors(storyRef.visible)}>
              <div className={s.overline}>Our Story</div>
              <h2 className={s.sectionTitle}>Built on Trust, Powered by Expertise</h2>
              <p className={s.sectionDesc} style={{ maxWidth: "100%" }}>
                City Power Electrical Services was founded by Sam with a simple mission: provide honest, high-quality electrical work at fair prices. What started as a one-person operation has grown into a trusted team serving 38+ cities across Ontario.
              </p>
              <p className={s.sectionDesc} style={{ maxWidth: "100%" }}>
                We hold ECRA/ESA license {contact.license} and carry full liability insurance. Every job is completed to code, inspected, and cleaned up thoroughly. From a single outlet repair to a complete commercial buildout, we treat every project with the same care and professionalism.
              </p>
              <p className={s.sectionDesc} style={{ maxWidth: "100%" }}>
                Our 24/7 emergency service means you are never left in the dark. With over 5,000 completed projects and hundreds of 5-star reviews, City Power is the name homeowners and businesses trust.
              </p>
            </div>
            <div style={fadeUpCoolors(storyRef.visible, 150)} className={s.aboutImage}>
              &#9889;
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.sectionBgPale}`} ref={valuesRef.ref}>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(valuesRef.visible)}>
            <div className={s.overline}>Our Values</div>
            <h2 className={s.sectionTitle}>What We Stand For</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 20 }}>
            {[
              { icon: "shield", title: "Safety First", desc: "Every project meets or exceeds the Ontario Electrical Safety Code. No shortcuts, ever." },
              { icon: "dollar", title: "Honest Pricing", desc: "Free estimates, transparent quotes, and no hidden fees. The price we quote is the price you pay." },
              { icon: "star", title: "Quality Workmanship", desc: "We use premium materials and proven techniques. Our work is built to last decades." },
              { icon: "clock", title: "Reliability", desc: "We show up on time, every time. 24/7 emergency service with same-day availability." },
              { icon: "sparkles", title: "Clean & Respectful", desc: "We treat your property like our own. Full cleanup after every job, guaranteed." },
              { icon: "clipboard", title: "Continuous Learning", desc: "We stay current with the latest electrical codes, technologies, and best practices." },
            ].map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
              <div key={item.title} style={fadeUpCoolors(valuesRef.visible, 60 + i * 40)} className={s.valueCard}>
                <div className={s.valueIcon}>{Icon ? <Icon size={28} /> : item.icon}</div>
                <div className={s.valueTitle}>{item.title}</div>
                <div className={s.valueDesc}>{item.desc}</div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={s.section} ref={teamRef.ref}>
        <div className={s.sectionInner} style={{ maxWidth: 700, textAlign: "center" }}>
          <div style={fadeUpCoolors(teamRef.visible)}>
            <div className={s.overline}>Meet the Founder</div>
            <h2 className={s.sectionTitle}>Sam &mdash; Master Electrician</h2>
          </div>
          <div style={fadeUpCoolors(teamRef.visible, 100)}>
            <div style={{ width: 120, height: 120, borderRadius: "50%", background: "linear-gradient(135deg, var(--c3), var(--c5))", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
              &#9889;
            </div>
            <p style={{ fontSize: 16, color: "var(--c4)", lineHeight: 1.7, marginBottom: 24 }}>
              With over 15 years of hands-on experience, Sam has built City Power Electrical from the ground up. A licensed master electrician ({contact.license}), Sam personally oversees every project to ensure it meets his exacting standards. His commitment to quality, honesty, and customer service has earned City Power hundreds of 5-star reviews across the GTA.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${contact.phoneFull}`} className={s.btnPrimary} style={{ display: "inline-block" }}>
                Call {contact.phone}
              </a>
              <Link href="/contact" className={s.btnOutline} style={{ display: "inline-block", color: "var(--c2)", borderColor: "var(--c2)" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA title="Ready to Work With Us?" desc="Get a free estimate today. No obligation, no hidden fees." />

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
