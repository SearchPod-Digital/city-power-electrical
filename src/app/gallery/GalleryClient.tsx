"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useInView, fadeUpCoolors } from "@/lib/hooks";
import { galleryItems } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import s from "../home.module.css";

type FilterKey = "All" | "Residential" | "Commercial" | "Specialty";
const filters: FilterKey[] = ["All", "Residential", "Commercial", "Specialty"];

export default function GalleryClient() {
  const heroRef = useInView(0.1);
  const gridRef = useInView();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

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
          <div className={s.overline} style={{ color: "rgba(252,211,77,0.7)" }}>Our Work</div>
          <h1 className={s.pageHeroTitle}>Project Gallery</h1>
          <p className={s.pageHeroDesc}>See examples of our electrical work across the Greater Toronto Area.</p>
        </div>
      </section>

      <section className={s.section} ref={gridRef.ref}>
        <div className={s.sectionInner}>
          <div style={fadeUpCoolors(gridRef.visible)} className={s.tabRow}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${s.tab} ${activeFilter === f ? s.tabActive : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className={s.galleryGrid}>
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                style={fadeUpCoolors(gridRef.visible, 40 + i * 30)}
                className={s.galleryCard}
                onClick={() => openLightbox(i)}
              >
                <div className={s.galleryImageWrap}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <div className={s.galleryCaption}>
                  <div className={s.galleryCaptionTitle}>{item.title}</div>
                  <div className={s.galleryCaptionSub}>{item.category} &middot; {item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Like What You See?" desc="Get a free estimate for your next electrical project. Same-day service available." />

      {/* Lightbox */}
      {lightbox !== null && (
        <div className={s.lightboxOverlay} onClick={closeLightbox}>
          <button className={s.lightboxClose} onClick={closeLightbox} aria-label="Close">&times;</button>
          <div className={s.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              width={1200}
              height={800}
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "85vh" }}
            />
            <div className={s.lightboxCaption}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{filtered[lightbox].title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                {filtered[lightbox].category} &middot; {filtered[lightbox].location}
              </div>
            </div>
          </div>
          <div className={s.lightboxNav}>
            <button
              className={s.lightboxArrow}
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : filtered.length - 1); }}
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              className={s.lightboxArrow}
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < filtered.length - 1 ? lightbox + 1 : 0); }}
              aria-label="Next"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}

      <Footer styles={footerStyles} basePath="" designLabel="City Power Electrical Services" />
    </div>
  );
}
