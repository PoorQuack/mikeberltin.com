'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-panel-border py-5 shadow-sm'
          : 'bg-white/95 backdrop-blur-sm py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <a href="/" className="relative group">
          <span className="text-2xl font-black tracking-[0.2em] uppercase text-gold">
            MIKEBERLTIN
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/50 group-hover:bg-gold transition-colors duration-300" />
        </a>

        <ul className="hidden md:flex gap-12">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-[0.1em] uppercase text-muted hover:text-gold transition-all duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-dark hover:text-gold hover:scale-110 transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-0 bg-white/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 sm:gap-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xl sm:text-2xl font-bold text-dark hover:text-gold transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
