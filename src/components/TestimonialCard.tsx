interface TestimonialCardStyles {
  card: string;
  avatar?: string;
  stars: string;
  star: string;
  text: string;
  name: string;
  location: string;
  quote?: string;
}

interface TestimonialCardProps {
  styles: TestimonialCardStyles;
  testimonial: { name: string; location: string; text: string; stars: number };
  style?: React.CSSProperties;
}

export default function TestimonialCard({ styles: s, testimonial: t, style }: TestimonialCardProps) {
  return (
    <div className={s.card} style={style}>
      {s.avatar && (
        <div className={s.avatar}>{t.name.charAt(0)}</div>
      )}
      {s.quote && <div className={s.quote}>&ldquo;</div>}
      <div className={s.stars}>
        {Array.from({ length: t.stars }).map((_, j) => (
          <span key={j} className={s.star}>{"\u2605"}</span>
        ))}
      </div>
      <p className={s.text}>{t.text}</p>
      <div className={s.name}>{t.name}</div>
      <div className={s.location}>{t.location}</div>
    </div>
  );
}
