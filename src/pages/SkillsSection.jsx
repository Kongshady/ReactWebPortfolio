import { useEffect, useState } from 'react';

const skillTags = [
    'HTML', 'CSS', 'Adobe Photoshop', 'REACT', 'Flutter', 'Java', 'JavaScript'
];

const skillBars = [
    { name: 'HTML5', percent: 80 },
    { name: 'CSS', percent: 75 },
    { name: 'Photoshop', percent: 60 },
    { name: 'REACT', percent: 50 },
    { name: 'Flutter', percent: 80 },
    { name: 'Java', percent: 50 },
    { name: 'JavaScript', percent: 50 },
];

export default function SkillsSection() {
    const [showTags, setShowTags] = useState(false);
    const [showBars, setShowBars] = useState(false);
    useEffect(() => {
        const tagTimeout = setTimeout(() => setShowTags(true), 200);
        const barTimeout = setTimeout(() => setShowBars(true), 600);
        return () => {
            clearTimeout(tagTimeout);
            clearTimeout(barTimeout);
        };
    }, []);
    return (
        <section id='skills' className="px-4 py-12 md:py-16 bg-[#181c23]">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-2 text-white">Skill Area</h3>
                <p className="text-gray-400 mb-8">A concise showcase of my technical and creative abilities, highlighting key tools and proficiency levels used to deliver polished, user‑focused projects.</p>
                {/* Skill tags with animation */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {skillTags.map((tag, i) => (
                        <span
                            key={tag}
                            className={`bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow transition-all duration-700 ease-out transform ${showTags ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Skill progress bars with animation */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillBars.map((skill, i) => (
                        <div
                            key={skill.name}
                            className={`bg-[#232733] rounded-xl p-5 shadow-lg transition-all duration-700 ease-out transform ${showBars ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                            style={{ transitionDelay: `${i * 120}ms` }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-white font-medium text-lg">{skill.name}</span>
                                <span className="text-orange-400 font-bold text-lg">{skill.percent}%</span>
                            </div>
                            <div className="w-full h-4 bg-[#181c23] rounded-full overflow-hidden">
                                <div
                                    className={`h-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-700 transition-all duration-1000`}
                                    style={{ width: showBars ? `${skill.percent}%` : '0%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
