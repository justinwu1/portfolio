import TopAppBar from "@/components/TopAppBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechnicalArsenal />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
