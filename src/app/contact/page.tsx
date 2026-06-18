import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ContactMap } from '@/components/ContactMap';

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <Contact />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
