import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function WorkforcePage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <section className="mb-20 md:mb-28">
          <a href="/services" className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim hover:text-gold transition-colors mb-6 inline-block">
            ← Back to Services
          </a>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold block mb-4">02 // Workforce Supply</span>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] mb-8"
            style={{
              background: 'linear-gradient(to bottom, #E5E5E8 40%, rgba(229,229,232,0.25))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            The Right Person.<br />The Right Place.
          </h1>
          <p className="font-mono text-sm text-muted-dim border-l-2 border-gold pl-6 max-w-xl leading-relaxed">
            Vetted, skilled, and ready to mobilise. We put the right people on site — from general operatives to specialist trades — fast.
          </p>
        </section>

        {/* Hero image */}
        <div className="overflow-hidden h-56 md:h-80 mb-20 md:mb-28">
          <img
            className="img-bw"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600"
            alt="Construction workers on site"
          />
        </div>

        {/* What we do */}
        <section className="grid md:grid-cols-2 gap-[2px] mb-24"
          style={{ background: 'var(--color-charcoal-light)', border: '2px solid var(--color-charcoal-light)' }}>
          {[
            { title: 'General Operatives', body: 'Reliable, CSCS-carded general labourers for clearing, loading, traffic management, and ground support. Available at short notice.' },
            { title: 'Skilled Trades', body: 'Carpenters, steel fixers, groundworkers, concrete finishers, and more. All vetted and trade-certified before they step on your site.' },
            { title: 'Rapid Mobilisation', body: 'When your programme accelerates or a gap appears, we move fast. Short-notice placements fulfilled within 24–48 hours wherever possible.' },
            { title: 'CSCS & Compliance', body: 'Every operative we supply holds a valid CSCS card. We verify certifications, right-to-work status, and site induction records as standard.' },
            { title: 'Supervision & Gangs', body: 'Need a working gang with a chargehand? We supply structured teams with experienced on-site leadership built in.' },
            { title: 'Long-Term Contracts', body: 'For ongoing projects, we offer dedicated workforce agreements with fixed rates, named operatives, and consistent deployment.' },
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

        {/* Stats */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">
          {[
            { stat: '20', label: 'Active Workers' },
            { stat: '5', label: 'Active Projects' },
            { stat: '48hr', label: 'Avg. Mobilisation' },
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim mb-2">Need workers on site?</p>
            <p className="text-dark text-lg font-bold">Talk to us about your workforce requirements.</p>
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
