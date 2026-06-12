import FadeInSection from './FadeInSection';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'High-Rise Logistics',
    location: 'Central London',
    category: 'Construction Logistics',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    size: 'large',
  },
  {
    title: 'Industrial Workforce',
    location: 'Manchester',
    category: 'Workforce Supply',
    image: 'https://images.unsplash.com/photo-1504328345606-0ca3e2b6a0d6?w=800&q=80',
    size: 'small',
  },
  {
    title: 'Site Security Protocol',
    location: 'Birmingham',
    category: 'Security Services',
    image: 'https://images.unsplash.com/photo-1558005137-d9616659d5c9?w=800&q=80',
    size: 'small',
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="section-kicker">Built to Last</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Projects that<br />
                <span className="text-gold">speak</span> for themselves
              </h2>
            </div>
            <a
              href="/services"
              className="btn-outline hover:scale-105 transition-all duration-300 self-start md:self-auto"
            >
              View All Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Large featured card */}
          <FadeInSection className="md:row-span-2">
            <a
              href="/services"
              className="group block relative h-full min-h-[400px] md:min-h-full rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${projects[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                  {projects[0].title}
                </h3>
                <p className="text-white/70 text-sm">{projects[0].location}</p>
              </div>
            </a>
          </FadeInSection>

          {/* Smaller cards */}
          {projects.slice(1).map((project, i) => (
            <FadeInSection key={project.title} delay={(i + 1) * 150}>
              <a
                href="/services"
                className="group block relative h-64 md:h-72 rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-black text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">{project.location}</p>
                </div>
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
