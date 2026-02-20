import { Header } from './home/Header';
import { HeroSection } from './home/HeroSection';
import { TrustBar } from './home/TrustBar';
import { AboutSection } from './home/AboutSection';
import { ServicesSection } from './home/ServicesSection';
import { WhySection } from './home/WhySection';
import { ProjectsSection } from './home/ProjectsSection';
import { CTASection } from './home/CTASection';
import { Footer } from './home/Footer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F5F3EE] scroll-smooth">
      <Header />
      <HeroSection />
      <TrustBar />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="why">
        <WhySection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
