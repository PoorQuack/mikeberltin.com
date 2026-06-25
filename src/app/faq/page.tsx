import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: 'What services does Mikeberltin offer?',
    answer:
      'We provide three core services: Construction Logistics, Workforce Supply, and Security. Each is tailored to the demands of the construction and built-environment sector across the UK.',
  },
  {
    question: 'What areas do you operate in?',
    answer:
      'We operate across the UK, with projects spanning urban and rural sites. Our transport coordination covers nationwide haulage and specialist delivery routes.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Contact us via the Get in Touch form on our Contact page, or call us directly on +44 7411 187131. Our team will respond within one business day.',
  },
  {
    question: 'Are your workers fully vetted and certified?',
    answer:
      'Yes. All operatives supplied through our Workforce division are CSCS-carded, reference-checked, and compliant with site health and safety requirements before deployment.',
  },
  {
    question: 'What security services do you provide?',
    answer:
      'Our security division covers static guarding, mobile patrols, and access control for construction sites and commercial premises. All officers hold valid SIA licences.',
  },
  {
    question: 'Can you manage logistics for large-scale developments?',
    answer:
      'Absolutely. We have experience coordinating materials management, plant scheduling, and traffic management for major developments. We scale our team to match your programme.',
  },
  {
    question: 'Do you provide 24/7 support?',
    answer:
      'Yes. Our site support line is available around the clock for active projects. Emergency contacts are provided at project kick-off.',
  },
  {
    question: 'How do I apply for a job at Mikeberltin?',
    answer:
      'Visit our Careers page to see current openings and submit an application. We welcome experienced operatives and office-based professionals alike.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <section className="mb-20 md:mb-28">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold block mb-4">
            FAQ // Frequently Asked Questions
          </span>
          <h1
            className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] mb-8"
            style={{
              background: 'linear-gradient(to bottom, #E5E5E8 40%, rgba(229,229,232,0.25))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Got Questions?<br />We Have Answers.
          </h1>
          <p className="font-mono text-sm text-muted-dim border-l-2 border-gold pl-6 max-w-xl leading-relaxed">
            Everything you need to know about working with Mikeberltin — from services and staffing to quotes and site support.
          </p>
        </section>

        {/* FAQ list */}
        <section className="divide-y divide-panel-border border-t border-panel-border mb-24">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8 grid md:grid-cols-[1fr_2fr] gap-6 group">
              <h3 className="text-base font-bold leading-snug group-hover:text-gold transition-colors pr-4">
                {faq.question}
              </h3>
              <p className="font-mono text-sm leading-relaxed opacity-70">{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="border-t border-panel-border pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-dim mb-2">Still have questions?</p>
            <p className="text-dark text-lg font-bold">Our team is happy to help.</p>
          </div>
          <a
            href="/contact"
            className="px-8 py-4 font-mono text-xs tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Get in Touch →
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
