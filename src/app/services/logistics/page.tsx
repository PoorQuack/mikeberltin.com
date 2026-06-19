import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function LogisticsPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <section className="mb-20 md:mb-28">
          <a href="/services" className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim hover:text-gold transition-colors mb-6 inline-block">
            ← Back to Services
          </a>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold block mb-4">01 // Construction Logistics</span>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] mb-8"
            style={{
              background: 'linear-gradient(to bottom, #E5E5E8 40%, rgba(229,229,232,0.25))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Moving Sites.<br />Not Goalposts.
          </h1>
          <p className="font-mono text-sm text-muted-dim border-l-2 border-gold pl-6 max-w-xl leading-relaxed">
            End-to-end coordination of materials, plant, and transport — engineered to keep your site moving without interruption, delay, or waste.
          </p>
        </section>

        {/* Hero image */}
        <div className="overflow-hidden h-56 md:h-80 mb-20 md:mb-28">
          <img
            className="img-bw"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600"
            alt="Logistics trucks and freight"
          />
        </div>

        {/* What we do */}
        <section className="grid md:grid-cols-2 gap-[2px] mb-24"
          style={{ background: 'var(--color-charcoal-light)', border: '2px solid var(--color-charcoal-light)' }}>
          {[
            { title: 'Materials Management', body: 'Just-in-time delivery scheduling for all materials, ensuring nothing sits idle and nothing arrives late. Coordinated with your programme.' },
            { title: 'Plant & Equipment', body: 'Crane, hoist, and heavy plant scheduling aligned to your structural programme. We manage access windows so your assets earn, not wait.' },
            { title: 'Transport Coordination', body: 'Managed fleets for bulk haulage, waste removal, and specialist delivery. Route-planned for urban and rural sites across the UK.' },
            { title: 'Supply Chain Oversight', body: 'Single point of contact across multiple suppliers. We track orders, chase delays, and flag risks before they become problems on site.' },
            { title: 'Site Access Planning', body: 'Traffic management, vehicle sequencing, and neighbour liaison to ensure smooth access even on the most constrained sites.' },
            { title: 'Logistics Reporting', body: 'Weekly movement reports, waste manifests, and delivery logs provided as standard — keeping your project auditable end to end.' },
          ].map((item) => (
            <div key={item.title}
              className="relative p-8 md:p-12 transition-all duration-300 group"
              style={{ background: 'var(--color-charcoal)' }}>
              <div className="absolute top-[10px] left-[10px] w-2 h-2 rounded-full"
                style={{ background: 'var(--color-panel-border)' }} />
              <h3 className="text-lg md:text-xl font-black uppercase mb-3 tracking-tight group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="font-mono text-sm leading-relaxed opacity-70">{item.body}</p>
            </div>
          ))}
        </section>

        {/* Why it matters */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">
          {[
            { stat: '5', label: 'Active Projects' },
            { stat: '2020', label: 'Est.' },
            { stat: '24/7', label: 'Site Support' },
          ].map((s) => (
            <div key={s.label} className="border border-panel-border p-8 text-center">
              <div className="text-5xl font-black text-gold mb-2">{s.stat}</div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-muted-dim">{s.label}</div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="border-t border-panel-border pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim mb-2">Ready to streamline your site?</p>
            <p className="text-dark text-lg font-bold">Speak to our logistics team today.</p>
          </div>
          <a href="/contact"
            className="px-8 py-4 font-mono text-xs tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300">
            Get in Touch →
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
