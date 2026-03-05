import Link from "next/link";

interface ServiceCardStyles {
  card: string;
  icon: string;
  title: string;
  desc: string;
  cta?: string;
}

interface ServiceCardProps {
  styles: ServiceCardStyles;
  service: { icon: string; title: string; desc: string };
  quoteHref?: string;
  style?: React.CSSProperties;
}

export default function ServiceCard({ styles: s, service, quoteHref, style }: ServiceCardProps) {
  return (
    <div className={s.card} style={style}>
      <div className={s.icon}>{service.icon}</div>
      <h3 className={s.title}>{service.title}</h3>
      <p className={s.desc}>{service.desc}</p>
      {quoteHref && s.cta && (
        <Link href={quoteHref} className={s.cta} style={{ textDecoration: "none" }}>
          Get Quote
        </Link>
      )}
    </div>
  );
}
