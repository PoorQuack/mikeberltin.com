import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 bg-charcoal-light border-y border-panel-border overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(212, 175, 55, 0.3) 20px,
            rgba(212, 175, 55, 0.3) 21px
          )`,
        }}
      />

      {/* Gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(212,175,55,0.04),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
          Ready to work with a
          <br />
          <span className="text-gold">reliable</span> partner?
        </h2>
        <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          We respond within hours, not days. Let us know what you need and we
          will mobilise the right team.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="#contact"
            className="group btn-gold text-base px-10 py-5 hover:scale-105 transition-all duration-300"
          >
            Get in touch today
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <p className="text-muted-dim text-xs font-medium">
            Available 24/7 for urgent deployments
          </p>
        </div>
      </div>
    </section>
  );
}
