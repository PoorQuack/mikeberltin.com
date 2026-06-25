import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const openings = [
  {
    title: 'Site Logistics Coordinator',
    type: 'Full-Time',
    location: 'Northampton / On-Site',
    description:
      'Manage day-to-day materials flow, plant scheduling, and delivery coordination across active construction sites. CSCS card required.',
  },
  {
    title: 'Security Officer (SIA Licensed)',
    type: 'Full-Time / Part-Time',
    location: 'Various UK Sites',
    description:
      'Static guarding and mobile patrol duties for construction sites and commercial premises. Valid SIA Door Supervisor or Security Guard licence required.',
  },
  {
    title: 'Workforce Supply Consultant',
    type: 'Full-Time',
    location: 'Northampton (Office-Based)',
    description:
      'Source, vet, and place skilled construction operatives with our clients. Experience in trades recruitment or workforce management preferred.',
  },
  {
    title: 'Transport & Haulage Planner',
    type: 'Full-Time',
    location: 'Northampton / Remote',
    description:
      'Plan and optimise vehicle routes for bulk haulage, waste removal, and specialist delivery. Knowledge of UK road transport regulations essential.',
  },
  {
    title: 'General Operative (CSCS)',
    type: 'Temporary / Contract',
    location: 'Various UK Sites',
    description:
      'Support site activities including materials handling, site clearance, and labouring. CSCS card required. Ongoing placements available.',
  },
];

const values = [
  { title: 'Reliability', body: 'We show up, we deliver, and we take ownership — every time.' },
  { title: 'Integrity', body: 'Honest communication with clients, partners, and our own people.' },
  { title: 'Growth', body: 'We invest in the development of everyone on our team.' },
  { title: 'Safety First', body: 'No compromise on the wellbeing of our workforce and sites.' },
];

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <section className="mb-20 md:mb-28">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold block mb-4">
            Careers // Join the Team
          </span>
          <h1
            className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] mb-8"
            style={{
              background: 'linear-gradient(to bottom, #E5E5E8 40%, rgba(229,229,232,0.25))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Build Something<br />Worth Showing Up For.
          </h1>
          <p className="font-mono text-sm text-muted-dim border-l-2 border-gold pl-6 max-w-xl leading-relaxed">
            We're looking for reliable, driven people who take pride in their work. From site operatives to consultants, there's a place for you at Mikeberltin.
          </p>
        </section>

        {/* Values */}
        <section
          className="grid md:grid-cols-2 gap-[2px] mb-24"
          style={{ background: 'var(--color-charcoal-light)', border: '2px solid var(--color-charcoal-light)' }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="relative p-8 md:p-12 transition-all duration-300 group"
              style={{ background: 'var(--color-charcoal)' }}
            >
              <div
                className="absolute top-[10px] left-[10px] w-2 h-2 rounded-full"
                style={{ background: 'var(--color-panel-border)' }}
              />
              <h3 className="text-lg md:text-xl font-black uppercase mb-3 tracking-tight group-hover:text-gold transition-colors">
                {v.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed opacity-70">{v.body}</p>
            </div>
          ))}
        </section>

        {/* Current openings */}
        <section className="mb-24">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-10">Current Openings</h2>
          <div className="divide-y divide-panel-border border-t border-panel-border">
            {openings.map((job, i) => (
              <div key={i} className="py-8 grid md:grid-cols-[2fr_1fr_2fr_auto] gap-4 items-center group">
                <div>
                  <h3 className="text-base font-bold group-hover:text-gold transition-colors">{job.title}</h3>
                  <p className="font-mono text-xs text-muted-dim mt-1">{job.location}</p>
                </div>
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-gold border border-gold px-3 py-1 w-fit">
                  {job.type}
                </span>
                <p className="font-mono text-sm leading-relaxed opacity-70">{job.description}</p>
                <a
                  href={`mailto:info@mikeberltin.com?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 whitespace-nowrap"
                >
                  Apply →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-panel-border pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim mb-2">Don't see the right role?</p>
            <p className="text-dark text-lg font-bold">Send us a speculative application.</p>
          </div>
          <a
            href="mailto:info@mikeberltin.com?subject=Speculative Application"
            className="px-8 py-4 font-mono text-xs tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Send CV →
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
