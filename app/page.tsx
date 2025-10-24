import { HeroSection } from '@/components/landing/sections/Hero';
import BlueAcademy from '@/components/landing/sections/BlueAcademy';
import Testimonials from '@/components/landing/sections/Testimonials';
import CTA from '@/components/landing/sections/CTA';
import { AboutSection } from '@/components/landing/sections/AboutSection';
import { ProjectsShowcase } from '@/components/landing/sections/ProjectsShowcase';


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsShowcase />
    </div>
  );
}
