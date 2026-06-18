import FadeInSection from './FadeInSection';
import { MessageSquare, ClipboardList, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We start by understanding your project requirements, timeline, and specific challenges. Every engagement begins with a clear conversation.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planning & Coordination',
    description:
      'Our team designs a tailored plan — mapping out logistics, workforce needs, or security protocols to align with your project goals.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Execution & Delivery',
    description:
      'We deploy the right people and resources on schedule, maintaining clear communication and adaptability throughout the project lifecycle.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 md:py-36 bg-charcoal-light border-b border-panel-border">
      <div className="max-w-7xl mx-auto px-8">
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="section-kicker">Our Process</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              How We <span className="text-gold">Work</span>
            </h2>
            <p className="text-dark text-lg md:text-xl max-w-2xl mx-auto">
              A simple three-step process designed to get your project the support it needs, fast.
            </p>
          </div>
        </FadeInSection>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Timeline connector line — desktop only */}
          <div className="hidden md:block absolute top-[72px] left-[16.66%] right-[16.66%] h-[2px] bg-gold/20" />

          {steps.map((step, i) => (
            <FadeInSection key={step.number} delay={i * 150}>
              <div className="relative text-center">
                {/* Icon with timeline dot */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-8 shadow-lg shadow-gold/20 z-10">
                  <step.icon size={28} className="text-dark" />
                </div>

                {/* Step number */}
                <span className="block text-sm font-bold text-gold mb-3 tracking-wider uppercase">
                  Step {step.number}
                </span>

                <h3 className="text-xl md:text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-dark text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
