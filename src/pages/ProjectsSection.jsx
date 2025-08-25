// Projects section for portfolio homepage
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState('completed');

    const completedProjects = [
        {
            title: "RedSync PH",
            description: "A mobile application for hemophilia patients to manage their condition.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        },
        {
            title: "MarianTBI Curriculum Monitoring",
            description: "A web application for monitoring and managing curriculum content.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        },
        {
            title: "Fitmed Web Application",
            description: "A web application for fitness and health management.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        },
        {
            title: "LabClass",
            description: "A web application for managing laboratory classes and schedules.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        },
        {
            title: "BayadRent Davao",
            description: "A web application for managing rental properties in Davao.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        }
    ];

    const upcomingProjects = [
        {
            title: "E-Commerce Platform",
            description: "A modern e-commerce platform with React and Node.js backend.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        },
        {
            title: "AI Chat Assistant",
            description: "An AI-powered chat assistant using modern machine learning APIs.",
            link: "#",
            github: "#",
            image: "/images/placeholder.jpg"
        }
    ];

    const currentProjects = activeTab === 'completed' ? completedProjects : upcomingProjects;

    return (
        <section id="projects" className="px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-2">My Projects</h3>
                <p className="text-gray-400 mb-8">A collection of my completed and upcoming projects.</p>
                
                {/* Tab Bar */}
                <div className="flex mb-8 border-b border-gray-700">
                    <button
                        className={`px-6 py-3 font-medium transition-colors ${
                            activeTab === 'completed'
                                ? 'text-orange-400 border-b-2 border-orange-400'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setActiveTab('completed')}
                    >
                        Completed Projects
                    </button>
                    <button
                        className={`px-6 py-3 font-medium transition-colors ${
                            activeTab === 'upcoming'
                                ? 'text-orange-400 border-b-2 border-orange-400'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setActiveTab('upcoming')}
                    >
                        Upcoming Projects
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {currentProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            github={project.github}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
