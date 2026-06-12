import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { ShieldCheck, Zap, Award, Users, Clock, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Header */}
        <section className="relative py-24 md:py-36 bg-charcoal border-b border-panel-border overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,rgba(212,175,55,0.06),transparent_70%)]" />
          <FadeInSection className="relative max-w-7xl mx-auto px-8 text-center">
            <p className="section-kicker">About Us</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              About <span className="text-gold">Mikeberltin</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Mikeberltin is focused on delivering reliable workforce, logistics, and security services for construction and industrial environments.
            </p>
          </FadeInSection>
        </section>

        {/* Our Approach */}
        <section className="py-24 md:py-32 bg-charcoal-light border-b border-panel-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInSection>
                <div>
                  <p className="section-kicker mb-2">How We Work</p>
                  <h2 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight mb-8">
                    Our <span className="text-gold">Approach</span>
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-10">
                    We combine industry expertise with a hands-on mindset to deliver services that keep projects moving. Every engagement starts with understanding your needs and ends with results you can count on.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ShieldCheck size={24} className="text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Reliability</h3>
                        <p className="text-muted text-sm">We show up when we say we will. No excuses, no delays.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap size={24} className="text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Efficiency</h3>
                        <p className="text-muted text-sm">Streamlined processes that reduce waste and keep budgets on track.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award size={24} className="text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">Professionalism</h3>
                        <p className="text-muted text-sm">Certified personnel, clear communication, and high standards in every interaction.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeInSection>
              <FadeInSection delay={200}>
                <div className="relative aspect-[4/3] bg-panel border border-panel-border rounded-2xl overflow-hidden flex items-center justify-center">
                  <ShieldCheck size={160} className="text-gold/10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent" />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-24 md:py-32 bg-charcoal-medium border-b border-panel-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInSection delay={200} className="lg:order-2">
                <div>
                  <p className="section-kicker mb-2">What We Stand For</p>
                  <h2 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight mb-8">
                    Our <span className="text-gold">Mission</span>
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    To be the dependable partner behind every successful construction and industrial project. We exist to remove friction — supplying the people, logistics, and security that keep sites productive and safe.
                  </p>
                  <p className="text-muted text-lg leading-relaxed">
                    Supporting projects with dependable services means being available, being prepared, and being accountable. That is the standard we hold ourselves to every day.
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection className="lg:order-1">
                <div className="relative aspect-[4/3] bg-panel border border-panel-border rounded-2xl overflow-hidden flex items-center justify-center">
                  <Target size={160} className="text-gold/10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent" />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 md:py-32 bg-charcoal-light border-b border-panel-border">
          <div className="max-w-7xl mx-auto px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <p className="section-kicker">The Difference</p>
                <h2 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight mb-6">
                  Why <span className="text-gold">Choose Us</span>
                </h2>
                <p className="text-muted text-lg max-w-2xl mx-auto">
                  Three reasons clients trust Mikeberltin with their most demanding projects.
                </p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeInSection delay={100}>
                <div className="bg-panel border border-panel-border rounded-2xl p-10 text-center h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users size={28} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Experienced Team</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Decades of combined experience in construction, logistics, and security operations across the UK.
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection delay={200}>
                <div className="bg-panel border border-panel-border rounded-2xl p-10 text-center h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock size={28} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fast Response</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Rapid mobilisation and same-day deployment when your project timeline demands it.
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection delay={300}>
                <div className="bg-panel border border-panel-border rounded-2xl p-10 text-center h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Zap size={28} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Flexible Solutions</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Services tailored to your project size, timeline, and budget — not rigid packages.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-6">
                Partner with <span className="text-gold">us</span>
              </h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
                Let us show you why clients trust Mikeberltin with their most demanding projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="/contact" className="btn-gold hover:scale-105 transition-all duration-300">
                  Contact Us
                </a>
                <a href="/services" className="btn-outline hover:scale-105 transition-all duration-300">
                  View Services
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
