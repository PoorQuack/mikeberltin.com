'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const THREAD_COUNT = 12;

export default function AboutPage() {
  const weaveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = weaveRef.current;
    if (!container) return;

    for (let i = 0; i < THREAD_COUNT; i++) {
      const v = document.createElement('div');
      v.className = 'about-thread about-thread-v';
      v.style.left = `${(i / THREAD_COUNT) * 100}%`;
      v.style.transitionDelay = `${i * 0.08}s`;
      container.appendChild(v);

      const h = document.createElement('div');
      h.className = 'about-thread about-thread-h';
      h.style.top = `${(i / THREAD_COUNT) * 100}%`;
      h.style.transitionDelay = `${i * 0.08}s`;
      container.appendChild(h);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      container.querySelectorAll<HTMLElement>('.about-thread-v').forEach(t => {
        t.style.transform = `translateX(${x}px)`;
      });
      container.querySelectorAll<HTMLElement>('.about-thread-h').forEach(t => {
        t.style.transform = `translateY(${y}px)`;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />

      {/* Woven grid background */}
      <div className="about-fibrous-bg" />
      <div ref={weaveRef} className="about-weave-lines" />

      <main className="about-main">
        {/* Header */}
        <header className="about-header" data-reveal>
          <span className="about-mono">Structure &amp; Purpose</span>
          <h1 className="about-h1">
            BUILT<br />INTO<br />EVERY SITE.
          </h1>
          <div className="about-hero-layout">
            <div />
            <p className="about-hero-statement" data-reveal>
              We see every project as a structure — workforce, logistics, and security interlocked under one dependable partner. No gaps. No friction. Just delivery.
            </p>
          </div>
        </header>

        {/* Philosophy / Foundation */}
        <section className="about-philosophy" data-reveal>
          <div className="about-philosophy-image">
            <img
              className="img-bw"
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
              alt="Construction site"
            />
          </div>
          <div className="about-philosophy-content" data-reveal>
            <span className="about-mono">01 — The Foundation</span>
            <h2 className="about-h2">Who We Are</h2>
            <p className="about-body">
              Mikeberltin is an integrated construction services provider operating across the UK. We supply the skilled workforce, the logistics backbone, and the security infrastructure that keep sites running — on time, on budget, and without incident.
            </p>
            <p className="about-body" style={{ marginTop: '1.5rem' }}>
              Every engagement starts with understanding your project. Every deployment ends with results you can measure.
            </p>
          </div>
        </section>

        {/* Grid tapestry — values */}
        <section className="about-grid-tapestry" data-reveal>
          <div className="about-grid-item">
            <span className="about-mono">Reliability</span>
            <h3 className="about-h3">We Show Up</h3>
            <p className="about-grid-body">Committed personnel, confirmed timelines, zero excuses. When you need us, we are there — fully prepared.</p>
          </div>
          <div className="about-grid-item">
            <span className="about-mono">Precision</span>
            <h3 className="about-h3">Right Resource, Right Time</h3>
            <p className="about-grid-body">Vetted workers and coordinated logistics placed exactly where they are needed — minimising downtime and maximising output.</p>
          </div>
          <div className="about-grid-item">
            <span className="about-mono">Accountability</span>
            <h3 className="about-h3">Built to Last</h3>
            <p className="about-grid-body">We stand behind every placement and every operation. Clear reporting, direct communication, full ownership of outcomes.</p>
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="about-footer" data-reveal>
          <div>
            <a href="/contact" className="about-cta-link">WORK WITH US.</a>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="about-mono">Mikeberltin Ltd.</span>
            <p className="about-footer-copy">Northampton, United Kingdom<br />info@mikeberltin.com</p>
          </div>
        </footer>
      </main>
      <Footer />
    </>
  );
}

