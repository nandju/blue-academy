import { HeroSection } from '@/components/landing/sections/Hero';
import BlueAcademy from '@/components/landing/sections/BlueAcademy';
import Testimonials from '@/components/landing/sections/Testimonials';
import { AboutSection } from '@/components/landing/sections/AboutSection';
import { ProjectsShowcase } from '@/components/landing/sections/ProjectsShowcase';
import { BlueAcademyCTA } from '@/components/landing/sections/CTA';


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsShowcase />
      <BlueAcademyCTA />
    </div>
  );
}
