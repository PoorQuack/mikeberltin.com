'use client';

import { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [time, setTime] = useState('');

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
            <a href="tel:+442000000000" className="cx-data-value">+44 20 0000 0000</a>
          </div>

          <div className="cx-brass-plate cx-module">
            <div className="cx-rivet cx-r-tl" />
            <div className="cx-rivet cx-r-tr" />
            <span className="cx-label">Coordinates</span>
            <div className="cx-data-value">London, United Kingdom</div>
            <div className="cx-data-value" style={{ opacity: 0.6, fontSize: '0.9rem' }}>51.5074° N, 0.1278° W</div>
          </div>

          <div className="cx-brass-plate cx-module" style={{ background: 'transparent', border: '1px dashed #9c7a3c' }}>
            <span className="cx-label">Operational Status</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="cx-status-dot" />
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Lines Active — 24/7</span>
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
            <div className="cx-field">
              <select id="cx-service" defaultValue="" className="cx-select" required>
                <option value="" disabled />
                <option value="logistics">Construction Logistics</option>
                <option value="workforce">Workforce Supply</option>
                <option value="security">Security Services</option>
                <option value="other">General Enquiry</option>
              </select>
              <label htmlFor="cx-service" className="cx-select-label">Service Required</label>
            </div>
            <div className="cx-field cx-field-full">
              <textarea id="cx-message" rows={5} required />
              <label htmlFor="cx-message">Project Details</label>
            </div>
            <button type="submit" className="cx-submit">
              Initiate Transmission
            </button>
          </form>
        </section>

      </main>
      <Footer />
    </>
  );
}
