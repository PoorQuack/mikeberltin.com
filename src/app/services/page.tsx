import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { HardHat, Users, Shield, Check } from 'lucide-react';

const services = [
  {
    id: 'logistics',
    icon: HardHat,
    title: 'Construction Logistics',
    description:
      'End-to-end site logistics management including material coordination, plant hire, waste management, and traffic planning for projects of any scale.',
    features: [
      'Site Management & Coordination',
      'Plant & Equipment Hire',
      'Waste Logistics & Disposal',
      'Traffic Management Planning',
      'Delivery Scheduling',
      'Site Security Coordination',
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
  },
  {
    id: 'workforce',
    icon: Users,
    title: 'Workforce Supply',
    description:
      'Vetted, certified labourers and skilled trades deployed at short notice. From groundworkers to steel fixers — we supply the people who get it built.',
    features: [
      'General Labourers',
      'Skilled Trades (Carpenters, Bricklayers)',
      'Groundworkers',
      'Steel Fixers & Concrete Specialists',
      'CSCS/CPCS Certified Operatives',
      'Same-Day Deployment Available',
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-0ca3e2b6a0d6?w=1200&q=80',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Services',
    description:
      'SIA-licensed security personnel for construction sites, commercial premises, and events. Static guarding, mobile patrols, and CCTV monitoring.',
    features: [
      'SIA Licensed Security Officers',
      'Construction Site Security',
      'Mobile Patrol Services',
      'CCTV Monitoring & Response',
      'Access Control & Gatehouse',
      '24/7 Emergency Coverage',
    ],
    image: 'https://images.unsplash.com/photo-1558005137-d9616659d5c9?w=1200&q=80',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Header */}
        <section className="relative py-24 md:py-36 bg-surface-secondary border-b border-panel-border overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586528116321-2e0b5ae3b6a7?w=1920&q=80')`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-8 text-center">
            <p className="section-kicker">Our Services</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              What we <span className="text-gold">deliver</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions for construction logistics, workforce
              supply, and site security — tailored to your project requirements.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8 space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-gold" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check size={18} className="text-gold flex-shrink-0" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] bg-surface-card border border-panel-border rounded-2xl overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon size={64} className="text-gold/40" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-surface-secondary border-t border-panel-border">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-6">
              Need a custom <span className="text-gold">solution</span>?
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              We tailor our services to match your specific project requirements.
            </p>
            <a href="/#contact" className="btn-gold hover:scale-105 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
