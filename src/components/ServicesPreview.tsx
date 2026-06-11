import { HardHat, Users, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: HardHat,
    title: 'Construction Logistics',
    description:
      'Efficient coordination of materials, transport, and on-site logistics.',
    href: '/services#logistics',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    icon: Users,
    title: 'Workforce Supply',
    description:
      'Reliable, skilled labourers ready for construction and industrial projects.',
    href: '/services#workforce',
    image: 'https://images.unsplash.com/photo-1504328345606-0ca3e2b6a0d6?w=800&q=80',
  },
  {
    icon: Shield,
    title: 'Security Services',
    description:
      'Professional on-site security personnel ensuring safety and control.',
    href: '/services#security',
    image: 'https://images.unsplash.com/photo-1558005137-d9616659d5c9?w=800&q=80',
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-30 md:py-38 bg-charcoal-light border-b border-panel-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="section-kicker">What We Offer</p>
          <h2 className="section-title">
            Tailored services for
            <br />
            demanding <span className="text-gold">environments</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive solutions that keep your projects on schedule, on budget, and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group flex flex-col bg-charcoal-medium border border-panel-border rounded-2xl overflow-hidden
                         shadow-lg transition-all duration-500 ease-out
                         hover:border-gold/40 hover:shadow-[0_0_80px_rgba(212,175,55,0.15)]
                         hover:-translate-y-2"
            >
              {/* Card image with dark overlay */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center
                                  transition-all duration-500 group-hover:bg-gold/30 group-hover:scale-110">
                    <service.icon size={32} className="text-gold transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/services" className="btn-outline hover:scale-105 transition-all duration-300">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
