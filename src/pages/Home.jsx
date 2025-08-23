import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#181c23] text-white font-sans">
            {/* Header & Navigation */}
            <header className="flex justify-between items-center px-8 py-6">
                <div className="text-lg font-bold tracking-wide">Mikko Jardenico</div>
                <nav className="space-x-8 hidden md:block">
                    <a href="#home" className="hover:text-orange-400">Home</a>
                    <a href="#about" className="hover:text-orange-400">About</a>
                    <a href="#projects" className="hover:text-orange-400">Projects</a>
                    <a href="#contact" className="hover:text-orange-400">Contacts</a>
                </nav>
            </header>

            <HeroSection />

            <AboutSection />
            <SkillsSection />

            <ProjectsSection />

            <ContactSection />
        </div>
    );
}
