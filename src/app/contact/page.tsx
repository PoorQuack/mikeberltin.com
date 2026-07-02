'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const serviceOptions = [
  { value: 'logistics', label: 'Construction Logistics' },
  { value: 'workforce', label: 'Workforce Supply' },
  { value: 'security', label: 'Security Services' },
  { value: 'other', label: 'General Enquiry' },
];

export default function ContactPage() {
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0') + ':' +
        now.getSeconds().toString().padStart(2, '0')
      );
    };
    tick();
    const id = setInterval(tick, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      const plates = document.querySelectorAll<HTMLElement>('.cx-brass-plate');
      const x = (window.innerWidth / 2 - e.pageX) / 60;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      plates.forEach(p => {
        p.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(id);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Nav />

      <div className="cx-coords">REF_ID: MBL-2024 // UK</div>
      <div className="cx-timestamp">SYSTEM_TIME: {time}</div>

      <main className="cx-container">

        {/* Header */}
        <header className="cx-header">
          <h1 className="cx-h1">
            Contact
            <span className="cx-title-fill" aria-hidden>Contact</span>
          </h1>
          <p className="cx-subtitle">
            Establish a direct line with our team. Response time: sub-24 hours.
          </p>
        </header>

        {/* Info panels */}
        <aside className="cx-info-panel">
          <div className="cx-brass-plate cx-module">
            <div className="cx-rivet cx-r-tl" />
            <div className="cx-rivet cx-r-tr" />
            <div className="cx-rivet cx-r-bl" />
            <div className="cx-rivet cx-r-br" />
            <span className="cx-label">Direct Frequency</span>
            <a href="mailto:info@mikeberltin.com" className="cx-data-value">info@mikeberltin.com</a>
            <a href="tel:+447411187131" className="cx-data-value">+44 7411 187131</a>
          </div>

          <div className="cx-brass-plate cx-module">
            <div className="cx-rivet cx-r-tl" />
            <div className="cx-rivet cx-r-tr" />
            <span className="cx-label">Coordinates</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=39+Kingsland+Avenue+Kingsthorpe+Northampton+NN2+7PP"
              target="_blank"
              rel="noopener noreferrer"
              className="cx-data-value"
              style={{ display: 'block', cursor: 'pointer', userSelect: 'text' }}
            >
              <span style={{ display: 'block' }}>39 Kingsland Avenue</span>
              <span style={{ display: 'block', opacity: 0.8 }}>Kingsthorpe, Northampton</span>
              <span style={{ display: 'block', opacity: 0.8 }}>NN2 7PP</span>
              <span style={{ display: 'block', opacity: 0.45, fontSize: '0.9rem' }}>52.2623° N, 0.8921° W</span>
            </a>
          </div>

          <div className="cx-brass-plate cx-module" style={{ background: 'transparent', border: '1px dashed #9c7a3c' }}>
            <span className="cx-label">Operational Status</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="cx-status-dot" />
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Lines Active — 24/7</span>
            </div>
          </div>
        </aside>

        {/* Form */}
        <section className="cx-form-module">
          <div className="cx-patina" style={{ top: '-20px', right: '-20px' }} />
          <div className="cx-patina" style={{ bottom: '20px', left: '10%' }} />

          <form onSubmit={(e) => e.preventDefault()} className="cx-form">
            <div className="cx-field">
              <input type="text" id="cx-name" required />
              <label htmlFor="cx-name">Full Name</label>
            </div>
            <div className="cx-field">
              <input type="email" id="cx-email" required />
              <label htmlFor="cx-email">Email Address</label>
            </div>
            <div className="cx-field">
              <input type="text" id="cx-company" />
              <label htmlFor="cx-company">Company / Project</label>
            </div>
            <div className="cx-field" ref={serviceRef}>
              <input type="hidden" id="cx-service" name="cx-service" value={service} required />
              <button
                type="button"
                className="cx-select"
                onClick={() => setServiceOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={serviceOpen}
              >
                {serviceOptions.find((o) => o.value === service)?.label ?? ''}
                <ChevronDown
                  size={16}
                  className={`cx-select-chevron ${serviceOpen ? 'cx-select-chevron-open' : ''}`}
                />
              </button>
              {serviceOpen && (
                <ul className="cx-select-list" role="listbox">
                  {serviceOptions.map((opt) => (
                    <li
                      key={opt.value}
                      role="option"
                      aria-selected={service === opt.value}
                      className={`cx-select-option ${service === opt.value ? 'cx-select-option-active' : ''}`}
                      onClick={() => {
                        setService(opt.value);
                        setServiceOpen(false);
                      }}
                    >
                      {opt.label}
                    </li>
                  ))}
                </ul>
              )}
              <label
                htmlFor="cx-service"
                className="cx-select-label"
                style={service ? { top: '-16px', fontSize: '0.7rem', opacity: 1 } : undefined}
              >
                Service Required
              </label>
            </div>
            <div className="cx-field cx-field-full">
              <textarea id="cx-message" rows={5} required />
              <label htmlFor="cx-message">Project Details</label>
            </div>
            <button type="submit" className="cx-submit">
              Send Enquiry
            </button>
          </form>
        </section>

      </main>
      <Footer />
    </>
  );
}
