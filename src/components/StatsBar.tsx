import FadeInSection from './FadeInSection';

const stats = [
  { value: '15+', label: 'Years Building' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '500+', label: 'Skilled Personnel' },
  { value: '24/7', label: 'Availability' },
];

export default function StatsBar() {
  return (
    <section className="relative bg-gold border-y border-gold-dark/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-dark/20">
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 100} className="py-10 md:py-14 text-center">
              <div className="text-3xl md:text-5xl font-black text-dark tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-dark/70 mt-2">
                {stat.label}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
