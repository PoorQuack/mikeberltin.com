import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Globe } from "lucide-react";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-panel-border overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-8 z-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-10 pb-12">

          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <div className="relative inline-block">
              <img src="/logo.svg" alt="MCL Mikeberltin" className="h-14 w-auto" />
            </div>
            <ul className="space-y-2 text-gold text-sm">
              <li><a href="/services/logistics" className="hover:text-white transition-colors">Construction Logistics</a></li>
              <li><a href="/services/workforce" className="hover:text-white transition-colors">Workforce Supply</a></li>
              <li><a href="/services/security" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">About Us</h4>
            <ul className="space-y-3 text-gold text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">Company History</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Meet the Team</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Helpful Links</h4>
            <ul className="space-y-3 text-gold text-sm">
              <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="mailto:support@mikeberltin.com" className="hover:text-white transition-colors">Support</a></li>
              <li className="relative flex items-center gap-2">
                <a href="/contact" className="hover:text-white transition-colors">Live Chat</a>
                <span className="w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse" />
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-4 text-gold text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#3ca2fa] shrink-0" />
                <a
                  href="mailto:info@mikeberltin.com"
                  className="hover:text-white transition-colors select-text"
                >
                  info@mikeberltin.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#3ca2fa] shrink-0" />
                <a
                  href="tel:+447411187131"
                  className="hover:text-white transition-colors select-text"
                >
                  +44 7411 187131
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#3ca2fa] shrink-0 mt-0.5" />
                <span className="select-text leading-relaxed">
                  39 Kingsland Avenue, Kingsthorpe<br />
                  Northampton, NN2 7PP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright + social */}
        <div className="border-t border-panel-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gold text-xs">
              &copy; 2026 Mikeberltin. All rights reserved.
            </p>
            <div className="flex space-x-5 text-gold">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="Website" className="hover:text-white transition-colors"><Globe size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* MIKEBERLTIN text hover effect — full width, responsive */}
      <div className="hidden lg:block w-full h-[18rem] relative z-10">
        <TextHoverEffect text="[MIKEBERLTIN]" className="z-10" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
