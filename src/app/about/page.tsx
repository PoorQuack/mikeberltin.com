import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Award, Users, Clock, Shield } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never compromise on quality or safety standards.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work alongside our clients as an extension of their team.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'When we commit to a deadline, we deliver. Every time.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honest communication and transparent operations always.',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '500+', label: 'Skilled Personnel' },
  { value: '98%', label: 'Client Retention' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-24 md:py-36 bg-surface-secondary border-b border-panel-border overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-0ca3e2b6a0d6?w=1920&q=80')`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-kicker">About Us</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
                  Building trust through
                  <span className="text-gold"> execution</span>
                </h1>
                <p className="text-muted text-lg md:text-xl leading-relaxed">
                  Mikeberltin delivers integrated construction logistics,
                  skilled workforce supply, and professional security services
                  across the UK.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group bg-surface-card border border-panel-border rounded-2xl p-8 text-center
                               transition-all duration-300 hover:border-gold/30 hover:-translate-y-1"
                  >
                    <span className="font-display text-3xl md:text-4xl font-black text-gold block">
                      {stat.value}
                    </span>
                    <span className="text-muted-dim text-xs uppercase tracking-wider mt-2 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-32 bg-surface border-b border-panel-border">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-gold">Story</span>
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                Founded with a clear vision to address the gaps in construction
                site support services, Mikeberltin has grown from a small
                logistics provider to a comprehensive partner for contractors
                and developers across the United Kingdom.
              </p>
              <p>
                Our leadership team brings together decades of hands-on
                experience in construction management, workforce coordination,
                and security operations. This expertise allows us to anticipate
                challenges before they arise and deliver solutions that keep
                projects on schedule and within budget.
              </p>
              <p>
                Today, we serve clients ranging from regional builders to major
                infrastructure developers. What unites them is their demand for
                reliability — and that is exactly what we deliver.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 bg-surface-secondary border-b border-panel-border">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <p className="section-kicker">Our Values</p>
              <h2 className="section-title">What drives us</h2>
              <p className="section-subtitle mx-auto">
                Four principles that shape every decision we make.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group bg-surface-card border border-panel-border rounded-2xl p-8 text-center
                             transition-all duration-500 ease-out
                             hover:border-gold/30 hover:bg-surface-elevated hover:-translate-y-1
                             hover:shadow-[0_0_60px_rgba(212,175,55,0.08)]"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6
                                  transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110">
                    <value.icon size={28} className="text-gold transition-transform duration-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-gold">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-6">
              Partner with <span className="text-gold">us</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Let us show you why clients trust Mikeberltin with their most
              demanding projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="/#contact" className="btn-gold hover:scale-105 transition-all duration-300">
                Contact Us
              </a>
              <a href="/services" className="btn-outline hover:scale-105 transition-all duration-300">
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
