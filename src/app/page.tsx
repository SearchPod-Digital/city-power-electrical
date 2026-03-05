"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, useCounter, fadeUpCoolors } from "@/lib/hooks";
import {
  contact, residentialServices, commercialServices, specialtyServices,
  areasByRegion, testimonials, metrics as metricsData, faqs,
} from "@/lib/data";
import QuoteForm from "@/components/QuoteForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { iconMap } from "@/components/Icons";
import s from "./home.module.css";

type TabKey = "Residential" | "Commercial" | "Specialty";

function MetricCard({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(value, 2000, active);
  return (
    <div>
      <div className={s.metricValue}>{count}{suffix}</div>
      <div className={s.metricLabel}>{label}</div>
    </div>
  );
}

export default function Home2() {
  const hero = useInView(0.1);
  const servicesMinRef = useInView();
  const whyRef = useInView();
  const metricsRef = useInView();
  const testimonialRef = useInView();
  const coverageRef = useInView();
  const quoteRef = useInView();
  const faqRef = useInView();
  const [bentoTab, setBentoTab] = useState<TabKey>("Residential");

  const tabServices = { Residential: residentialServices, Commercial: commercialServices, Specialty: specialtyServices };

  const quoteStyles = {
    form: s.form, heading: s.formHeading, fieldGroup: s.fieldGroup,
    label: s.formLabel, input: s.formInput, select: s.formSelect,
    textarea: s.formTextarea, checkboxRow: s.checkboxRow, checkbox: s.formCheckbox,
    checkboxLabel: s.checkboxLabel, submit: s.formSubmit, row: s.formRow,
  };

  const footerStyles = {
    footer: s.footer, footerInner: s.footerInner, footerGrid: s.footerGrid,
    footerBrand: s.footerBrand, footerBrandText: s.footerBrandText, footerText: s.footerText,
    footerColTitle: s.footerColTitle, footerColItem: s.footerColItem,
    footerBottom: s.footerBottom, footerCopy: s.footerCopy, footerBack: s.footerBack,
  };

  return (
    <div className={s.page}>
      <Navbar />

      {/* Hero */}
      <section className={s.hero} ref={hero.ref}>
        <div className={s.heroInner}>
          <div>
            <div style={fadeUpCoolors(hero.visible)}>
              <span className={s.heroBadge}>24/7 EMERGENCY SERVICE</span>
            </div>
            <h1 style={fadeUpCoolors(hero.visible, 100)} className={s.heroTitle}>
              Your Trusted <span className={s.heroHighlight}>Electrical</span> Partner in the GTA
            </h1>
            <p style={fadeUpCoolors(hero.visible, 200)} className={s.heroDesc}>
              Fully licensed and insured with over 15 years of experience. Residential, commercial, and industrial electrical services you can count on.
            </p>
            <div style={fadeUpCoolors(hero.visible, 300)} className={s.heroActions}>
              <a href={`tel:${contact.phoneFull}`} className={s.btnPrimary}>{contact.phone}</a>
              <Link href="/contact" className={s.btnOutline}>Get a Free Quote</Link>
            </div>
            <div style={fadeUpCoolors(hero.visible, 400)} className={s.heroTrust}>
              <div className={s.heroTrustItem}><span className={s.heroTrustIcon}>&#9889;</span> 24/7 Emergency</div>
              <div className={s.heroTrustItem}><span className={s.heroTrustIcon}>&#9989;</span> ESA Certified</div>
              <div className={s.heroTrustItem}><span className={s.heroTrustIcon}>&#11088;</span> 15+ Years Experience</div>
              <div className={s.heroTrustItem}><span className={s.heroTrustIcon}>&#128736;</span> Free Estimates</div>
            </div>
          </div>
          <div style={fadeUpCoolors(hero.visible, 300)} className={s.heroImage}>
            <Image src="/images/hero-electrician.jpg" alt="Licensed electrician at work" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
          </div>
        </div>
      </section>

      {/* Services — Bento Grid */}
      <section className={s.section} ref={servicesMinRef.ref}>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(servicesMinRef.visible)}>
            <div className={s.overline}>At a Glance</div>
            <h2 className={s.sectionTitle}>What We Do Best</h2>
          </div>
          <div style={fadeUpCoolors(servicesMinRef.visible, 80)} className={s.tabRow}>
            {(["Residential", "Commercial", "Specialty"] as TabKey[]).map((tab) => (
              <button key={tab} className={`${s.tab} ${bentoTab === tab ? s.tabActive : ""}`} onClick={() => setBentoTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className={s.bentoGrid}>
            {tabServices[bentoTab].map((svc, i) => {
              const Icon = iconMap[svc.icon];
              return (
                <Link
                  key={svc.title}
                  href="/contact"
                  style={{ ...fadeUpCoolors(servicesMinRef.visible, 80 + i * 30), textDecoration: "none" }}
                  className={`${s.bentoCell} ${i === 0 ? s.bentoCellLarge : ""}`}
                >
                  <span className={s.bentoIcon}>{Icon ? <Icon size={i === 0 ? 28 : 22} /> : null}</span>
                  <span className={s.bentoTitle}>{svc.title}</span>
                  {i === 0 && <span className={s.bentoDesc}>{svc.desc}</span>}
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/services" className={s.btnPrimary} style={{ display: "inline-block" }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className={`${s.section} ${s.sectionWithLines}`} ref={whyRef.ref}>
        <svg className={s.sectionLines} viewBox="0 0 1200 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120 H40 L60 100 H140 L160 120 H200" stroke="#EAB308" strokeWidth="1" fill="none" />
          <path d="M1000 680 H1060 L1080 700 H1140 L1160 680 H1200" stroke="#EAB308" strokeWidth="1" fill="none" />
          <path d="M1150 60 V100 L1170 120 V180" stroke="#EAB308" strokeWidth="1" fill="none" />
          <circle cx="200" cy="120" r="2" fill="#EAB308" />
          <circle cx="1000" cy="680" r="2" fill="#EAB308" />
          <circle cx="1150" cy="60" r="2" fill="#EAB308" />
        </svg>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(whyRef.visible)}>
            <div className={s.overline}>Why Choose Us</div>
            <h2 className={s.sectionTitle}>The City Power Difference</h2>
          </div>
          {[
            { icon: "shield", title: "Licensed & ESA Certified", desc: `${contact.license}. All work meets or exceeds Ontario Electrical Safety Code. Full liability insurance for your protection.`, img: "/images/feature-licensed.jpg" },
            { icon: "clock", title: "24/7 Same-Day Service", desc: "Emergency calls answered any time, day or night, 365 days a year. Most jobs completed same day with no extra after-hours charges.", img: "/images/feature-emergency.jpg" },
            { icon: "checkBadge", title: "Transparent & Fair Pricing", desc: "No hidden fees, ever. Free estimates provided upfront before any work begins. We quote it, we stick to it.", img: "/images/feature-pricing.jpg" },
            { icon: "sparkles", title: "Clean & Professional", desc: "We treat your home like our own. Thorough cleanup after every job, with courtesy and respect for your property.", img: "/images/feature-clean.jpg" },
          ].map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
            <div key={item.title} style={fadeUpCoolors(whyRef.visible, 80 + i * 80)} className={`${s.featureRow} ${i % 2 === 1 ? s.featureRowReverse : ""}`}>
              <div>
                <div className={s.featureIcon}>{Icon ? <Icon size={36} /> : item.icon}</div>
                <h3 className={s.featureTitle}>{item.title}</h3>
                <p className={s.featureDesc}>{item.desc}</p>
              </div>
              <div className={s.featureImage}>
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Metrics */}
      <div className={s.metricsBar} ref={metricsRef.ref}>
        <svg className={s.sectionLines} viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 H60 L80 50 H160" stroke="#EAB308" strokeWidth="1" fill="none" />
          <path d="M1040 150 H1120 L1140 170 H1200" stroke="#EAB308" strokeWidth="1" fill="none" />
          <circle cx="160" cy="50" r="2.5" fill="#EAB308" />
          <circle cx="1040" cy="150" r="2.5" fill="#EAB308" />
        </svg>
        <div className={s.metricsGrid}>
          {metricsData.map((m) => (
            <MetricCard key={m.label} value={m.value} suffix={m.suffix} label={m.label} active={metricsRef.visible} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section id="reviews" className={s.section} ref={testimonialRef.ref}>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(testimonialRef.visible)}>
            <div className={s.overline}>Testimonials</div>
            <h2 className={s.sectionTitle}>What Our Clients Say</h2>
          </div>
          <div className={s.testimonialGrid}>
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={t.name} style={fadeUpCoolors(testimonialRef.visible, 80 + i * 80)} className={s.testimonialCard}>
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
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/testimonials" className={s.btnPrimary} style={{ display: "inline-block" }}>
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className={`${s.section} ${s.sectionBgPale}`} ref={faqRef.ref}>
        <div className={s.sectionInner} style={{ maxWidth: 800 }}>
          <div style={fadeUpCoolors(faqRef.visible)}>
            <div className={s.overline}>FAQ</div>
            <h2 className={s.sectionTitle}>Common Questions</h2>
          </div>
          <div style={fadeUpCoolors(faqRef.visible, 100)}>
            <FAQ styles={{ faqList: s.faqList, faqItem: s.faqItem, faqQuestion: s.faqQuestion, faqAnswer: s.faqAnswer }} items={faqs.slice(0, 4)} />
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/faq" className={s.btnPrimary} style={{ display: "inline-block" }}>
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="areas" className={s.section} ref={coverageRef.ref}>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(coverageRef.visible)}>
            <div className={s.overline}>Coverage Area</div>
            <h2 className={s.sectionTitle}>Serving 38+ Cities Across Ontario</h2>
            <p className={s.sectionDesc}>
              From Wasaga Beach &amp; Orillia in the north, to Downtown Toronto, east to Cobourg &amp; Peterborough, west to London &amp; Hamilton.
            </p>
          </div>
          <div style={fadeUpCoolors(coverageRef.visible, 100)} className={s.regionGrid}>
            {Object.entries(areasByRegion).map(([region, cities]) => (
              <div key={region} className={s.regionCard}>
                <div className={s.regionTitle}>{region}</div>
                <div className={s.regionCities}>
                  {cities.map((city) => (
                    <span key={city} className={s.regionCity}>{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/areas" className={s.btnPrimary} style={{ display: "inline-block" }}>
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className={s.quoteSection} ref={quoteRef.ref}>
        <div className={s.quoteInner}>
          <div style={fadeUpCoolors(quoteRef.visible)}>
            <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>Free Quote</div>
            <h2 style={{ fontSize: "clamp(1.5rem, 1.25rem + 1.5vw, 2.25rem)", fontWeight: 800, marginBottom: 32, color: "#fff" }}>
              Need an Electrician? <span className={s.heroHighlight}>Get a Quote.</span>
            </h2>
          </div>
          <div style={fadeUpCoolors(quoteRef.visible, 100)}>
            <QuoteForm styles={quoteStyles} />
          </div>
        </div>
      </section>

      <CTA />

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
