import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
