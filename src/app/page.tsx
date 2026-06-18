'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const beam = beamRef.current?.querySelector('.main-beam') as HTMLElement;
      if (!beam) return;
      const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
      beam.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseLeave = () => {
      const beam = beamRef.current?.querySelector('.main-beam') as HTMLElement;
      if (beam) beam.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    const container = beamRef.current;
    container?.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      container?.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="cable cable-left" />
        <div className="cable cable-right" />

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-content reveal">
            <h1>
              HEAVY<br />
              <span className="accent">LIFTING</span><br />
              THE FUTURE.
            </h1>
            <div className="hero-meta">
              Integrated workforce management, global logistics, and high-tier site security for the world&apos;s most ambitious structural projects.
            </div>
          </div>

          <div className="riveted-panel reveal delay-1">
            <div className="rivet r-tl" />
            <div className="rivet r-tr" />
            <div className="rivet r-bl" />
            <div className="rivet r-br" />
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-gold mb-4">
              [ SYSTEM_STATUS ]
            </div>
            <div className="text-xl font-bold mb-5">
              DEPLOYMENT READINESS: <span className="text-gold">98.4%</span>
            </div>
            <div className="h-px bg-panel-border mb-5" />
            <div className="flex justify-between font-mono text-xs tracking-wider text-muted-dim">
              <span>ACTIVE SITES: <span className="text-dark">142</span></span>
              <span>PERSONNEL: <span className="text-dark">12.4k</span></span>
            </div>
          </div>
        </section>

        {/* Pillars Beam */}
        <div className="beam-container reveal delay-2" ref={beamRef}>
          <div className="visual-anchor" />
          <div className="main-beam">
            <div className="beam-segment">
              <span className="segment-label">PILLAR_01 // FORCE</span>
              <h2 className="segment-title">WORKFORCE</h2>
              <div className="segment-data">4,200<span className="data-unit">OP/HR</span></div>
            </div>
            <div className="beam-segment">
              <span className="segment-label">PILLAR_02 // FLOW</span>
              <h2 className="segment-title">LOGISTICS</h2>
              <div className="segment-data">850<span className="data-unit">TON/DY</span></div>
            </div>
            <div className="beam-segment">
              <span className="segment-label">PILLAR_03 // SHIELD</span>
              <h2 className="segment-title">SECURITY</h2>
              <div className="segment-data">24/7<span className="data-unit">UAV/S</span></div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <section className="details-grid">
          <div className="detail-item">
            <div className="rivet r-tl" />
            <h3>Precision Logistics</h3>
            <p>Automated supply chain management ensuring materials arrive precisely when the crane is ready. Zero downtime, zero waste.</p>
          </div>
          <div className="detail-item">
            <div className="rivet r-tl" />
            <h3>Elite Workforce</h3>
            <p>Specialized labour certification and real-time tracking to ensure the right skill is at the right joint, every time.</p>
          </div>
          <div className="detail-item">
            <div className="rivet r-tl" />
            <h3>Ironclad Security</h3>
            <p>Surveillance-as-a-Service using mesh networking and perimeter thermal imaging. Your site is a fortress.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}