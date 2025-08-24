// Projects section for portfolio homepage
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {
    return (
        <section id="projects" className="px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-8">My Completed Projects</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="RedSync PH"
                        description="A mobile application for hemophilia patients to manage their condition."
                        link="#"
                        github="#"
                        image="https://via.placeholder.com/400x200/FF5733/FFFFFF?text=RedSync+PH"
                    />
                    <ProjectCard
                        title="MarianTBI Curriculum Monitoring"
                        description="A web application for monitoring and managing curriculum content."
                        link="#"
                        github="#"
                        image="https://via.placeholder.com/400x200/2980B9/FFFFFF?text=MarianTBI+Curriculum"
                    />
                    <ProjectCard
                        title="Portfolio Website"
                        description="Short project description goes here."
                        link="#"
                        github="#"
                        image="https://via.placeholder.com/400x200/27AE60/FFFFFF?text=Portfolio+Website"
                    />
                    <ProjectCard
                        title="Sample App"
                        description="Short project description goes here."
                        link="#"
                        github="#"
                        image="https://via.placeholder.com/400x200/F1C40F/333333?text=Sample+App"
                    />
                </div>
            </div>
        </section>
    );
}
