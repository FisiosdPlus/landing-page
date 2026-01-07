import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <Testimonials />
      <Team />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}