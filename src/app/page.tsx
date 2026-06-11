import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import TrustSection from '@/components/TrustSection';
import AboutSummary from '@/components/AboutSummary';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServicesPreview />
        <TrustSection />
        <AboutSummary />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
