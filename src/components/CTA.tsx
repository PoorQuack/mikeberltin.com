import { ArrowRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 bg-charcoal-light border-y border-panel-border overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(0, 0, 0, 0.08) 20px,
            rgba(0, 0, 0, 0.08) 21px
          )`,
        }}
      />

      <FadeInSection className="relative max-w-4xl mx-auto px-8 text-center">
        <p className="section-kicker mb-4">Let&apos;s Build</p>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
          Ready to turn your
          <br />
          vision into <span className="text-gold">reality</span>?
        </h2>
        <p className="text-dark text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          We bring passion, precision, and people to every project.
          Tell us what you are building and we will show you how we can help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="/contact"
            className="group btn-gold text-base px-10 py-5 hover:scale-105 transition-all duration-300"
          >
            Start a Project
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="/services"
            className="btn-outline hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
        <p className="text-muted-dim text-xs font-medium mt-8">
          Available 24/7 for urgent deployments
        </p>
      </FadeInSection>
    </section>
  );
}
