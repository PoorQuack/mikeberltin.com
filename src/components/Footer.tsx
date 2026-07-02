"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
} from "lucide-react";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

export default function Footer() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "/about" },
        { label: "Meet the Team", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Our Services", href: "/services" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "/faq" },
        { label: "Support", href: "mailto:support@mikeberltin.com" },
        {
          label: "Live Chat",
          href: "/contact",
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "info@mikeberltin.com",
      href: "mailto:info@mikeberltin.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+44 7411 187131",
      href: "tel:+447411187131",
    },
    {
      icon: <MapPin size={20} className="text-[#3ca2fa]" />,
      text: "39 Kingsland Avenue, Kingsthorpe, Northampton, NN2 7PP",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <FooterBackgroundGradient />
      <div className="lg:block hidden absolute inset-0 z-[1]">
        <TextHoverEffect text="MIKEBERLTIN" />
      </div>
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="MCL Mikeberltin" className="h-14 md:h-16 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-gold">
              Construction logistics, workforce supply, and security services for the UK construction industry.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors text-gold text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors text-gold text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors text-gold text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-gold">
            &copy; {new Date().getFullYear()} Mikeberltin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
