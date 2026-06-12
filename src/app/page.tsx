import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import HowWeWork from '@/components/HowWeWork';
import ServicesPreview from '@/components/ServicesPreview';
import ProjectShowcase from '@/components/ProjectShowcase';
import AboutSummary from '@/components/AboutSummary';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <HowWeWork />
        <ServicesPreview />
        <ProjectShowcase />
        <AboutSummary />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
