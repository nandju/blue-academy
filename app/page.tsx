import { HeroSection } from '@/components/landing/home/sections/Hero';
import { AboutSection } from '@/components/landing/home/sections/AboutSection';
import { ProjectsShowcase } from '@/components/landing/home/sections/ProjectsShowcase';
import { BlueAcademyCTA } from '@/components/landing/home/sections/CTA';
import { TestimonialsSection } from '@/components/landing/home/sections/Testimonials';
import { CallToActionSection } from '@/components/landing/home/sections/BlueAcademy';


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
