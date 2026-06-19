import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function SecurityPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <section className="mb-20 md:mb-28">
          <a href="/services" className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim hover:text-gold transition-colors mb-6 inline-block">
            ← Back to Services
          </a>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold block mb-4">03 // Security Services</span>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] mb-8"
            style={{
              background: 'linear-gradient(to bottom, #E5E5E8 40%, rgba(229,229,232,0.25))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Your Site.<br />Locked Down.
          </h1>
          <p className="font-mono text-sm text-muted-dim border-l-2 border-gold pl-6 max-w-xl leading-relaxed">
            Professional on-site security — access control, perimeter monitoring, and 24/7 SIA-licensed personnel to protect your project at every stage.
          </p>
        </section>

        {/* Hero image */}
        <div className="overflow-hidden h-56 md:h-80 mb-20 md:mb-28">
          <img
            className="img-bw"
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1600"
            alt="Security surveillance cameras"
          />
        </div>

        {/* What we do */}
        <section className="grid md:grid-cols-2 gap-[2px] mb-24"
          style={{ background: 'var(--color-charcoal-light)', border: '2px solid var(--color-charcoal-light)' }}>
          {[
            { title: 'SIA-Licensed Officers', body: 'All security personnel hold valid SIA Door Supervisor or Security Guard licences. Uniformed, vetted, and site-ready on arrival.' },
            { title: 'Access Control', body: 'Manned entry points with visitor logging, contractor verification, and vehicle checks. We control who gets in — and who doesn\'t.' },
            { title: 'Perimeter Monitoring', body: 'Static and mobile patrols across your site perimeter during out-of-hours periods to deter theft, vandalism, and unauthorised access.' },
            { title: '24/7 Cover', body: 'Round-the-clock security presence for high-value or high-risk sites. Day shifts, night shifts, and weekend cover available.' },
            { title: 'Incident Response', body: 'Trained response to on-site incidents including medical emergencies, confrontation, and suspicious activity — with full incident reporting.' },
            { title: 'CCTV & Alarm Liaison', body: 'We work alongside your existing CCTV and alarm systems, acting as the human layer on top of your technology stack.' },
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
            { stat: '24/7', label: 'Site Coverage' },
            { stat: 'SIA', label: 'Licensed Officers' },
            { stat: '2020', label: 'Est.' },
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
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim mb-2">Need security on site?</p>
            <p className="text-dark text-lg font-bold">Get a security assessment for your project.</p>
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
