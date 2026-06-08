import Nav from "@/components/Nav";
import HeroRow from "@/components/HeroRow";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-6 py-12 pb-28 md:pb-12">
        <div className="grid auto-rows-min grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-12">
          <HeroRow />
          <ExperienceSection />
          <SkillsSection />
          {/* <ProjectsSection /> */}
          <EducationSection />
        </div>
        {/* <ContactCTA /> */}
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
