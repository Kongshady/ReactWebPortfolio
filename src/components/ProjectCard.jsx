// Reusable project card component for portfolio projects
// Props: title, description, link

export default function ProjectCard({ title, description, link }) {
    return (
        <div className="bg-[#232733] rounded-lg shadow p-6">
            <h4 className="font-bold mb-2">{title}</h4>
            <p className="text-gray-400 mb-4">{description}</p>
            {link && (
                <a href={link} className="text-orange-400 hover:underline">View Project</a>
            )}
        </div>
    );
}
