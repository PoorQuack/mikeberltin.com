import { Users, Zap, Award, Shield } from 'lucide-react';

const trustPoints = [
  {
    icon: Users,
    title: 'Reliable Workforce',
    description:
      'Every operative is CSCS/CPCS certified, fully vetted, and ready to deploy across demanding construction environments.',
  },
  {
    icon: Zap,
    title: 'Fast Response Times',
    description:
      'We mobilise teams within hours — not days. When your deadline is at risk, we are the partner who shows up.',
  },
  {
    icon: Award,
    title: 'Industry Experience',
    description:
      'Over 15 years of combined field expertise across logistics, labour supply, and on-site security operations.',
  },
  {
    icon: Shield,
    title: 'Professional Service',
    description:
      'SIA-licensed security, ISO-aligned logistics, and a management team that treats every project like its own.',
  },
];

const logoPlaceholders = [
  { name: 'Partner One' },
  { name: 'Partner Two' },
  { name: 'Partner Three' },
  { name: 'Partner Four' },
  { name: 'Partner Five' },
  { name: 'Partner Six' },
];

export default function TrustSection() {
  return (
    <section className="py-30 md:py-38 bg-charcoal border-y border-panel-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="section-kicker">Trusted By Industry Leaders</p>
          <h2 className="section-title">
            Why choose <span className="text-gold">Mikeberltin</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We do not just supply people — we deliver peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="group bg-charcoal-medium border border-panel-border rounded-2xl p-8
                         transition-all duration-500 ease-out
                         hover:border-gold/30 hover:bg-panel-hover hover:-translate-y-1
                         hover:shadow-[0_0_60px_rgba(212,175,55,0.08)]"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6
                              transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110">
                <point.icon size={28} className="text-gold transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-gold">
                {point.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Placeholder company logos */}
        <div className="pt-16 border-t border-panel-border">
          <p className="text-muted-dim text-xs font-semibold uppercase tracking-[0.2em] text-center mb-10">
            Trusted by leading contractors and developers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {logoPlaceholders.map((logo) => (
              <div
                key={logo.name}
                className="w-24 h-12 bg-panel border border-panel-border rounded-lg
                           flex items-center justify-center opacity-30 hover:opacity-50
                           transition-all duration-300"
                title={logo.name}
              >
                <span className="text-muted-dim text-[10px] font-semibold uppercase tracking-widest">
                  {logo.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
