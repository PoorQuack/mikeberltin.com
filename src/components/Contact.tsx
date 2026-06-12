'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function Contact() {
  return (
    <section id="contact" className="py-30 md:py-38 bg-charcoal border-b border-panel-border">
      <div className="max-w-7xl mx-auto px-8">
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="section-kicker">Get In Touch</p>
            <h2 className="section-title">
              Start the <span className="text-gold">conversation</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Tell us about your project and we will respond within hours.
            </p>
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact info */}
          <FadeInSection className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Email</p>
                  <p className="text-muted text-sm">info@mikeberltin.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Phone</p>
                  <p className="text-muted text-sm">Available on request</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Location</p>
                  <p className="text-muted text-sm">London, United Kingdom</p>
                </div>
              </div>

              <div className="pt-6 border-t border-panel-border">
                <p className="text-muted-dim text-xs leading-relaxed">
                  Available 24/7 for urgent deployments.
                  <br />
                  All enquiries handled with discretion.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Contact form */}
          <FadeInSection delay={200} className="lg:col-span-2">
            <form
              className="grid sm:grid-cols-2 gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2" htmlFor="service">
                  Service Interest
                </label>
                <select
                  id="service"
                  className="w-full bg-charcoal-medium border border-panel-border rounded-xl px-5 py-4 text-sm text-muted
                             focus:outline-none focus:border-gold/40 transition-all duration-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="logistics">Construction Logistics</option>
                  <option value="workforce">Workforce Supply</option>
                  <option value="security">Security Services</option>
                  <option value="other">Other / General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-charcoal-medium border border-panel-border rounded-xl px-5 py-4 text-sm text-dark
                             placeholder:text-muted-light focus:outline-none focus:border-gold/40 transition-all duration-300"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full bg-charcoal-medium border border-panel-border rounded-xl px-5 py-4 text-sm text-dark
                             placeholder:text-muted-light focus:outline-none focus:border-gold/40 transition-all duration-300"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-charcoal-medium border border-panel-border rounded-xl px-5 py-4 text-sm text-dark
                             placeholder:text-muted-light focus:outline-none focus:border-gold/40 transition-all duration-300"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full bg-charcoal-medium border border-panel-border rounded-xl px-5 py-4 text-sm text-dark
                             placeholder:text-muted-light focus:outline-none focus:border-gold/40 transition-all duration-300"
                  placeholder="+44 20 0000 0000"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-charcoal-medium border border-panel-border rounded-xl px-5 py-4 text-sm text-dark
                             placeholder:text-muted-light focus:outline-none focus:border-gold/40 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <div className="sm:col-span-2 pt-4">
                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto hover:scale-105 transition-all duration-300"
                >
                  Send Enquiry
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
