// Projects section for portfolio homepage
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {
    return (
        <section id="projects" className="px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-2">My Completed Projects</h3>
                <p className="text-gray-400 mb-8">Projects I completed while at university.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="RedSync PH"
                        description="A mobile application for hemophilia patients to manage their condition."
                        link="#"
                        github="#"
                        image="/images/placeholder.jpg"
                    />
                    <ProjectCard
                        title="MarianTBI Curriculum Monitoring"
                        description="A web application for monitoring and managing curriculum content."
                        link="#"
                        github="#"
                        image="/images/placeholder.jpg"
                    />
                    <ProjectCard
                        title="Fitmed Web Application"
                        description="A web application for fitness and health management."
                        link="#"
                        github="#"
                        image="/images/placeholder.jpg"
                    />
                    <ProjectCard
                        title="LabClass"
                        description="A web application for managing laboratory classes and schedules."
                        link="#"
                        github="#"
                        image="/images/placeholder.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
