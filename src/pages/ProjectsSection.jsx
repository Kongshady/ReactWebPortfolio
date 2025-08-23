// Projects section for portfolio homepage
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {
    return (
        <section id="projects" className="px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-8">Projects</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="RedSync PH"
                        description="A mobile application for hemophilia patients to manage their condition."
                        link="#"
                    />
                    <ProjectCard
                        title="Project Title"
                        description="Short project description goes here."
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
}
