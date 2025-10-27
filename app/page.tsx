import { HeroSection } from '@/components/landing/sections/Hero';
import { AboutSection } from '@/components/landing/sections/AboutSection';
import { ProjectsShowcase } from '@/components/landing/sections/ProjectsShowcase';
import { BlueAcademyCTA } from '@/components/landing/sections/CTA';
import { TestimonialsSection } from '@/components/landing/sections/Testimonials';
import { CallToActionSection } from '@/components/landing/sections/BlueAcademy';


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsShowcase />
      <BlueAcademyCTA />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
}
