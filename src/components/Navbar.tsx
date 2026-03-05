"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { contact, residentialServices, commercialServices, specialtyServices, areasByRegion } from "@/lib/data";
import { iconMap } from "@/components/Icons";
import s from "@/app/home.module.css";

const companyItems = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

function ServiceMegaItem({ icon, title, href, onClick }: { icon: string; title: string; href: string; onClick: () => void }) {
  const Icon = iconMap[icon];
  return (
    <Link href={href} className={s.megaServiceItem} onClick={onClick}>
      <span className={s.megaServiceIcon}>{Icon ? <Icon size={20} /> : null}</span>
      <span className={s.megaServiceTitle}>{title}</span>
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!openMenu) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openMenu]);

  const toggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <nav className={s.nav} ref={navRef}>
      <Link href="/" className={s.navBrand} style={{ textDecoration: "none" }}>
        <Image src="/images/logo-icon.png" alt="City Power Electrical Services" width={90} height={90} style={{ borderRadius: 10 }} />
        <span className={s.navBrandText}>
          <span style={{ display: "block", fontSize: 20, fontWeight: 800 }}>City Power</span>
          <span style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--c4, #475569)" }}>Electrical Services</span>
        </span>
      </Link>

      <div className={s.navLinks}>
        <Link href="/" className={s.navLink}>Home</Link>

        {/* Services mega */}
        <div className={s.megaTrigger}>
          <button
            className={s.navLink}
            onClick={() => toggle("services")}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit", color: "inherit", padding: 0 }}
          >
            Services <span className={s.megaArrow} style={{ transform: openMenu === "services" ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>&#9662;</span>
          </button>
          <div className={`${s.megaPanel} ${openMenu === "services" ? s.megaPanelOpen : ""}`}>
            <div className={s.megaPanelInner}>
              <div className={s.megaCol}>
                <div className={s.megaColTitle}>Residential</div>
                {residentialServices.map((svc) => (
                  <ServiceMegaItem key={svc.title} icon={svc.icon} title={svc.title} href="/services/residential" onClick={closeMenu} />
                ))}
              </div>
              <div className={s.megaCol}>
                <div className={s.megaColTitle}>Commercial</div>
                {commercialServices.map((svc) => (
                  <ServiceMegaItem key={svc.title} icon={svc.icon} title={svc.title} href="/services/commercial" onClick={closeMenu} />
                ))}
              </div>
              <div className={s.megaCol}>
                <div className={s.megaColTitle}>Specialty</div>
                {specialtyServices.map((svc) => (
                  <ServiceMegaItem key={svc.title} icon={svc.icon} title={svc.title} href="/services/specialty" onClick={closeMenu} />
                ))}
              </div>
              <div className={s.megaEmergency}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>&#9889;</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "#fff" }}>24/7 Emergency</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 16, lineHeight: 1.5 }}>
                  Electrical emergency? We respond fast, day or night.
                </div>
                <a href={`tel:${contact.phoneFull}`} className={s.megaEmergencyBtn}>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Areas mega */}
        <div className={s.megaTrigger}>
          <button
            className={s.navLink}
            onClick={() => toggle("areas")}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit", color: "inherit", padding: 0 }}
          >
            Areas <span className={s.megaArrow} style={{ transform: openMenu === "areas" ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>&#9662;</span>
          </button>
          <div className={`${s.megaPanel} ${openMenu === "areas" ? s.megaPanelOpen : ""}`}>
            <div className={s.megaPanelInner} style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
              {Object.entries(areasByRegion).map(([region, cities]) => (
                <div key={region} className={s.megaCol}>
                  <div className={s.megaColTitle}>{region}</div>
                  {cities.map((city) => (
                    <Link key={city} href="/areas" className={s.megaAreaCity} onClick={closeMenu}>
                      {city}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company dropdown */}
        <div className={s.megaTrigger}>
          <button
            className={s.navLink}
            onClick={() => toggle("company")}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit", color: "inherit", padding: 0 }}
          >
            Company <span className={s.megaArrow} style={{ transform: openMenu === "company" ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>&#9662;</span>
          </button>
          <div className={`${s.companyDropdown} ${openMenu === "company" ? s.companyDropdownOpen : ""}`}>
            {companyItems.map((item) => (
              <Link key={item.label} href={item.href} className={s.companyDropdownItem} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <a href={`tel:${contact.phoneFull}`} className={s.navCta}>
          {contact.phone}
        </a>
        <Link href="/contact" className={s.navCtaQuote}>
          Get a Quote
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={s.hamburger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        <span style={{ width: 24, height: 2, background: "currentColor", transition: "all 300ms", transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
        <span style={{ width: 24, height: 2, background: "currentColor", transition: "all 300ms", opacity: mobileOpen ? 0 : 1 }} />
        <span style={{ width: 24, height: 2, background: "currentColor", transition: "all 300ms", transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 80, left: 0, right: 0, bottom: 0,
          background: "#fff", padding: "24px", zIndex: 99,
          display: "flex", flexDirection: "column", gap: 4, overflowY: "auto",
        }}>
          <Link href="/" onClick={() => setMobileOpen(false)}
            style={{ display: "block", padding: "12px 0", fontSize: 18, fontWeight: 600, textDecoration: "none", color: "#1a1a1a" }}>
            Home
          </Link>

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "Services" ? null : "Services")}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                width: "100%", padding: "12px 0", fontSize: 18, fontWeight: 600,
                background: "none", border: "none", cursor: "pointer", color: "#1a1a1a", fontFamily: "inherit",
              }}
            >
              Services
              <span style={{ fontSize: 12, transition: "transform 200ms", transform: mobileAccordion === "Services" ? "rotate(180deg)" : "none" }}>&#9662;</span>
            </button>
            {mobileAccordion === "Services" && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                {[
                  { label: "All Services", href: "/services" },
                  { label: "Residential", href: "/services/residential" },
                  { label: "Commercial", href: "/services/commercial" },
                  { label: "Specialty", href: "/services/specialty" },
                ].map((child) => (
                  <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "8px 0", fontSize: 15, textDecoration: "none", color: "#666" }}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Areas accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "Areas" ? null : "Areas")}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                width: "100%", padding: "12px 0", fontSize: 18, fontWeight: 600,
                background: "none", border: "none", cursor: "pointer", color: "#1a1a1a", fontFamily: "inherit",
              }}
            >
              Areas
              <span style={{ fontSize: 12, transition: "transform 200ms", transform: mobileAccordion === "Areas" ? "rotate(180deg)" : "none" }}>&#9662;</span>
            </button>
            {mobileAccordion === "Areas" && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                <Link href="/areas" onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "8px 0", fontSize: 15, textDecoration: "none", color: "#666" }}>
                  All Service Areas
                </Link>
                {Object.keys(areasByRegion).map((region) => (
                  <Link key={region} href="/areas" onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "8px 0", fontSize: 15, textDecoration: "none", color: "#666" }}>
                    {region}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "Company" ? null : "Company")}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                width: "100%", padding: "12px 0", fontSize: 18, fontWeight: 600,
                background: "none", border: "none", cursor: "pointer", color: "#1a1a1a", fontFamily: "inherit",
              }}
            >
              Company
              <span style={{ fontSize: 12, transition: "transform 200ms", transform: mobileAccordion === "Company" ? "rotate(180deg)" : "none" }}>&#9662;</span>
            </button>
            {mobileAccordion === "Company" && (
              <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                {companyItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "8px 0", fontSize: 15, textDecoration: "none", color: "#666" }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              style={{
                textAlign: "center", display: "block", padding: "14px 24px",
                borderRadius: 8, fontWeight: 700, textDecoration: "none",
                background: "var(--accent, #EAB308)", color: "#1a1a1a",
              }}>
              Get a Free Quote
            </Link>
            <a href={`tel:${contact.phoneFull}`}
              style={{
                textAlign: "center", display: "block", padding: "14px 24px",
                borderRadius: 8, fontWeight: 700, textDecoration: "none",
                background: "var(--c2, #1E40AF)", color: "#fff",
              }}>
              Call {contact.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
