'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const services = [
  {
    num: '01 //',
    id: 'logistics',
    href: '/services/logistics',
    title: 'Construction Logistics',
    desc: 'End-to-end coordination of materials, plant, and transport — engineered to keep your site moving without interruption.',
  },
  {
    num: '02 //',
    id: 'workforce',
    href: '/services/workforce',
    title: 'Workforce Supply',
    desc: 'Vetted, skilled, and ready to mobilise. We put the right people on site — general labourers to specialist trades.',
  },
  {
    num: '03 //',
    id: 'security',
    href: '/services/security',
    title: 'Security Services',
    desc: 'Professional on-site security — access control, perimeter monitoring, and 24/7 personnel to protect your project.',
  },
];

export default function ServicesPage() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const blob = blobRef.current;
      if (!blob) return;
      const x = (e.clientX / window.innerWidth) * 50;
      const y = (e.clientY / window.innerHeight) * 50;
      blob.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Nav />

      {/* Fluid background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          ref={blobRef}
          className="absolute w-[600px] h-[600px] opacity-[0.12] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
          style={{
            background: 'linear-gradient(135deg, #3A3A3D, #B0B0B5, #E5E5E8)',
            filter: 'blur(80px)',
            animation: 'blobMove 25s infinite alternate ease-in-out',
            top: '10%',
            left: '5%',
          }}
        />
      </div>

      <main className="pt-24 max-w-7xl mx-auto px-8">

        {/* Header */}
        <section className="pt-24 md:pt-36 mb-24 md:mb-36">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-dim mb-5 block">
            Capabilities // 2024
          </span>
          <h1
            className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-[-0.04em]"
            style={{
              background: 'linear-gradient(to bottom, #E5E5E8 40%, rgba(229,229,232,0.2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            What We<br />Deliver.
          </h1>
        </section>

        {/* Services Flow */}
        <section className="services-flow">
          {services.map((s) => (
            <a
              key={s.id}
              href={s.href}
              className="service-row group"
            >
              <div className="service-num">{s.num}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="merc-orb" />
            </a>
          ))}
        </section>

        {/* Footer CTA */}
        <section className="services-footer-cta">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-dim block mb-10">
            Ready to mobilise your next project?
          </span>
          <a href="/contact" className="services-cta-btn">
            Start the Conversation
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
