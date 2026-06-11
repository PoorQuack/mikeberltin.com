export default function AboutSummary() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '500+', label: 'Skilled Personnel' },
  ];

  return (
    <section id="about" className="relative py-30 md:py-38 bg-charcoal border-b border-panel-border overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-0ca3e2b6a0d6?w=1920&q=80')`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="section-kicker">About Mikeberltin</p>
            <h2 className="section-title">
              Excellence is not
              <br />
              a goal — it is the
              <br />
              <span className="text-gold">standard</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-muted text-lg leading-relaxed">
              Mikeberltin delivers integrated construction logistics, skilled
              workforce supply, and professional security services across the
              UK. We partner with contractors, developers, and infrastructure
              projects that demand precision, reliability, and absolute
              discretion.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Every engagement is backed by rigorous vetting, real-time
              coordination, and a leadership team with decades of combined field
              experience. We do not cut corners — we build frameworks that last.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-panel-border">
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
        </div>
      </div>
    </section>
  );
}
