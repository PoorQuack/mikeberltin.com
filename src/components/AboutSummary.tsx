import FadeInSection from './FadeInSection';

export default function AboutSummary() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '500+', label: 'Skilled Personnel' },
  ];

  return (
    <section id="about" className="py-30 md:py-38 bg-charcoal-light border-b border-panel-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <FadeInSection>
            <div>
              <p className="section-kicker">About Mikeberltin</p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
                Excellence is not
                <br />
                a goal — it is the
                <br />
                <span className="text-gold">standard</span>
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-8">
              <p className="text-dark text-lg leading-relaxed">
                Mikeberltin delivers integrated construction logistics, skilled
                workforce supply, and professional security services across the
                UK. We partner with contractors, developers, and infrastructure
                projects that demand precision, reliability, and absolute
                discretion.
              </p>
              <p className="text-dark text-lg leading-relaxed">
                Every engagement is backed by rigorous vetting, real-time
                coordination, and a leadership team with decades of combined field
                experience. We do not cut corners — we build frameworks that last.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-panel-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="text-3xl md:text-4xl font-black text-gold">
                      {stat.value}
                    </span>
                    <p className="text-muted-dim text-xs font-medium uppercase tracking-wider mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <a href="/about" className="btn-gold hover:scale-105 transition-all duration-300">
                  Learn More About Us
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
