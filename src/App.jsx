import './App.css';
import Navbar          from './components/Navbar';
import HeroSection     from './components/HeroSection';
import MeSection       from './components/MeSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';

/**
 * App
 * Root component — assembles the full single-page portfolio.
 *
 * Layout:
 *   <Navbar />              ← fixed top bar
 *   <div.container>
 *     <div.hero>            ← max-width wrapper for all sections
 *       <HeroSection />     ← typing animation + terminal window
 *       <MeSection />       ← about cards
 *       <ExperienceSection />
 *       <ProjectsSection />
 *       <ContactSection />
 *     </div>
 *     <Footer />
 *   </div>
 */
export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero">
          <HeroSection />
        </div>
      </div>
      <MeSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
