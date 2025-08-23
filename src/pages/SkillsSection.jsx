// Modern skills section with tags and progress bars
const skillTags = [
    'HTML', 'CSS', 'Adobe Photoshop', 'OpenCart', 'WordPress', 'Dreamweaver', 'jQuery', 'Java', 'JavaScript', 'Management', 'Leadership'
];

const skillBars = [
    { name: 'WordPress', percent: 80 },
    { name: 'OpenCart', percent: 70 },
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 90 },
];

export default function SkillsSection() {
    return (
        <section className="px-8 py-12 md:py-16 bg-[#181c23]">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-2 text-white">Skill Area</h3>
                <p className="text-gray-400 mb-8">A showcase of my technical and creative skills. You can update these values and tags as needed.</p>
                {/* Skill tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {skillTags.map(tag => (
                        <span key={tag} className="bg-[#b71c1c] text-white px-4 py-1 rounded-full text-sm font-semibold shadow">{tag}</span>
                    ))}
                </div>
                {/* Skill progress bars */}
                <div className="space-y-6">
                    {skillBars.map(skill => (
                        <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                                <span className="text-white font-medium">{skill.name}</span>
                                <span className="text-[#b71c1c] font-bold">{skill.percent}%</span>
                            </div>
                            <div className="w-full h-3 bg-[#232733] rounded-full">
                                <div
                                    className="h-3 rounded-full bg-gradient-to-r from-[#b71c1c] to-[#ff5252]"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
