import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import JourneySection from "@/components/JourneySection"
import ProjectsSection from "@/components/ProjectsSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <JourneySection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
