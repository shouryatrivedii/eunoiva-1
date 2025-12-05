import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import CtaStrip from './components/CtaStrip';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <CtaStrip />
      <Footer />
    </div>
  );
}

export default App;
