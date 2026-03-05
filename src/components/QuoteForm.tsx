"use client";

import { useState, FormEvent } from "react";
import { serviceTypeOptions, serviceNeededOptions } from "@/lib/data";

interface QuoteFormProps {
  styles: {
    form: string;
    heading?: string;
    fieldGroup: string;
    label: string;
    input: string;
    select: string;
    textarea: string;
    checkboxRow: string;
    checkbox: string;
    checkboxLabel: string;
    submit: string;
    success?: string;
    row?: string;
  };
}

export default function QuoteForm({ styles: s }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={s.success || s.form}>
        <h3 className={s.heading || ""}>Thank You!</h3>
        <p>We&rsquo;ve received your quote request. Sam will get back to you within 1 hour.</p>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {s.heading && <h3 className={s.heading}>Request a Free Quote</h3>}

      <div className={s.row || s.fieldGroup}>
        <div className={s.fieldGroup}>
          <label className={s.label}>Name *</label>
          <input className={s.input} type="text" placeholder="Your full name" required />
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Email *</label>
          <input className={s.input} type="email" placeholder="you@email.com" required />
        </div>
      </div>

      <div className={s.row || s.fieldGroup}>
        <div className={s.fieldGroup}>
          <label className={s.label}>Phone *</label>
          <input className={s.input} type="tel" placeholder="(416) 000-0000" required />
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Address / City</label>
          <input className={s.input} type="text" placeholder="City or full address" />
        </div>
      </div>

      <div className={s.row || s.fieldGroup}>
        <div className={s.fieldGroup}>
          <label className={s.label}>Service Type *</label>
          <select className={s.select} required defaultValue="">
            <option value="" disabled>Select type</option>
            {serviceTypeOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Service Needed *</label>
          <select className={s.select} required defaultValue="">
            <option value="" disabled>Select service</option>
            {serviceNeededOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={s.row || s.fieldGroup}>
        <div className={s.fieldGroup}>
          <label className={s.label}>Preferred Date</label>
          <input className={s.input} type="date" />
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Preferred Time</label>
          <select className={s.select} defaultValue="">
            <option value="">Any time</option>
            <option value="morning">Morning (8am&ndash;12pm)</option>
            <option value="afternoon">Afternoon (12pm&ndash;5pm)</option>
            <option value="evening">Evening (5pm&ndash;8pm)</option>
          </select>
        </div>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Description / Message</label>
        <textarea className={s.textarea} rows={4} placeholder="Describe your project or issue..." />
      </div>

      <div className={s.checkboxRow}>
        <input className={s.checkbox} type="checkbox" id="emergency" />
        <label className={s.checkboxLabel} htmlFor="emergency">
          This is an emergency (24/7 response)
        </label>
      </div>

      <button type="submit" className={s.submit}>
        Submit Quote Request
      </button>
    </form>
  );
}
