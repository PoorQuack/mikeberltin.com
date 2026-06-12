import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { HardHat, Users, Shield, Check } from 'lucide-react';

const services = [
  {
    id: 'logistics',
    icon: HardHat,
    title: 'Construction Logistics',
    description:
      'We manage the coordination of materials, transport, and on-site logistics to keep your project running efficiently.',
    features: [
      'Material coordination',
      'Transport planning',
      'On-site logistics management',
    ],
  },
  {
    id: 'workforce',
    icon: Users,
    title: 'Workforce Supply',
    description:
      'We provide reliable and skilled labourers ready to integrate into your project.',
    features: [
      'General labourers',
      'Skilled workers',
      'Flexible workforce solutions',
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Services',
    description:
      'Professional security personnel to ensure safety and control on-site.',
    features: [
      'Site security',
      'Access control',
      'Monitoring services',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Header */}
        <section className="relative py-24 md:py-36 bg-charcoal border-b border-panel-border overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,rgba(212,175,55,0.06),transparent_70%)]" />
          <FadeInSection className="relative max-w-7xl mx-auto px-8 text-center">
            <p className="section-kicker">Our Services</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              What we <span className="text-gold">deliver</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions for construction logistics, workforce
              supply, and site security — tailored to your project requirements.
            </p>
          </FadeInSection>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 md:py-32 border-b border-panel-border ${
              index % 2 === 0 ? 'bg-charcoal-light' : 'bg-charcoal-medium'
            }`}
          >
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <FadeInSection delay={100} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon size={28} className="text-gold" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-base"
                      >
                        <Check size={18} className="text-gold flex-shrink-0" />
                        <span className="text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </FadeInSection>
                <FadeInSection delay={200} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-[4/3] bg-panel border border-panel-border rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon size={120} className="text-gold/10" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent" />
                  </div>
                </FadeInSection>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-24 md:py-32 bg-charcoal border-t border-panel-border">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-6">
                Need a custom <span className="text-gold">solution</span>?
              </h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
                We tailor our services to match your specific project requirements.
              </p>
              <a href="/contact" className="btn-gold hover:scale-105 transition-all duration-300">
                Get in Touch
              </a>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
