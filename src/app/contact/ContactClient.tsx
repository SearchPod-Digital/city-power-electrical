"use client";

import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { contact } from "@/lib/data";
import QuoteForm from "@/components/QuoteForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { iconMap } from "@/components/Icons";
import s from "../home.module.css";

export default function ContactClient() {
  const heroRef = useInView(0.1);
  const infoRef = useInView();
  const formRef = useInView();

  const footerStyles = {
    footer: s.footer, footerInner: s.footerInner, footerGrid: s.footerGrid,
    footerBrand: s.footerBrand, footerBrandText: s.footerBrandText, footerText: s.footerText,
    footerColTitle: s.footerColTitle, footerColItem: s.footerColItem,
    footerBottom: s.footerBottom, footerCopy: s.footerCopy, footerBack: s.footerBack,
  };
  const quoteStyles = {
    form: s.form, heading: s.formHeading, fieldGroup: s.fieldGroup,
    label: s.formLabel, input: s.formInput, select: s.formSelect,
    textarea: s.formTextarea, checkboxRow: s.checkboxRow, checkbox: s.formCheckbox,
    checkboxLabel: s.checkboxLabel, submit: s.formSubmit, row: s.formRow,
  };

  return (
    <div className={s.page}>
      <Navbar />

      <section className={s.pageHero} ref={heroRef.ref}>
        <div style={fadeUpCoolors(heroRef.visible)}>
          <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>Contact</div>
          <h1 className={s.pageHeroTitle}>Get In Touch</h1>
          <p className={s.pageHeroDesc}>Call, email, or fill out the form below. Sam will get back to you within 1 hour.</p>
        </div>
      </section>

      <section className={s.section} ref={infoRef.ref}>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(infoRef.visible)} className={s.emergencyBanner}>
            <div className={s.emergencyBannerTitle}>24/7 Emergency Electrical Service</div>
            <div className={s.emergencyBannerText}>
              Electrical emergency? Call us now &mdash; we respond any time, day or night, 365 days a year.
            </div>
            <a href={`tel:${contact.phoneFull}`} className={s.btnPrimary} style={{ display: "inline-block", marginTop: 16 }}>
              {contact.phone}
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 20, marginBottom: 48 }}>
            {[
              { icon: "phone", title: "Phone", text: contact.phone, sub: "Available 24/7" },
              { icon: "mail", title: "Email", text: contact.email, sub: "Response within 1 hour" },
              { icon: "mapPin", title: "Service Area", text: "Greater Toronto Area", sub: "38+ cities across Ontario" },
              { icon: "shield", title: "License", text: contact.license, sub: "Fully insured" },
            ].map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
              <div key={item.title} style={fadeUpCoolors(infoRef.visible, 60 + i * 40)} className={s.contactCard}>
                <div className={s.contactCardIcon}>{Icon ? <Icon size={24} /> : item.icon}</div>
                <div>
                  <div className={s.contactCardTitle}>{item.title}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{item.text}</div>
                  <div className={s.contactCardText}>{item.sub}</div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={s.quoteSection} ref={formRef.ref}>
        <div className={s.quoteInner}>
          <div style={fadeUpCoolors(formRef.visible)}>
            <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>Free Quote</div>
            <h2 style={{ fontSize: "clamp(1.5rem, 1.25rem + 1.5vw, 2.25rem)", fontWeight: 800, marginBottom: 32, color: "#fff" }}>
              Request a Free Estimate
            </h2>
          </div>
          <div style={fadeUpCoolors(formRef.visible, 100)}>
            <QuoteForm styles={quoteStyles} />
          </div>
        </div>
      </section>

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
