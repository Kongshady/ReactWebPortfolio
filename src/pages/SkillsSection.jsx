import { useEffect, useState } from 'react';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', percent: 90, icon: '🌐' },
            { name: 'CSS3', percent: 85, icon: '🎨' },
            { name: 'JavaScript', percent: 80, icon: '⚡' },
            { name: 'React', percent: 75, icon: '⚛️' },
            { name: 'Tailwind CSS', percent: 70, icon: '💨' }
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', percent: 70, icon: '🟢' },
            { name: 'PHP', percent: 65, icon: '🐘' },
            { name: 'Python', percent: 60, icon: '🐍' },
            { name: 'Java', percent: 55, icon: '☕' }
        ]
    },
    {
        title: 'Mobile & Tools',
        skills: [
            { name: 'Flutter', percent: 80, icon: '📱' },
            { name: 'WordPress', percent: 70, icon: '📝' },
            { name: 'Photoshop', percent: 65, icon: '🖼️' }
        ]
    }
];

export default function SkillsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleCategories, setVisibleCategories] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const skillsElement = document.getElementById('skills');
        if (skillsElement) {
            observer.observe(skillsElement);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            skillCategories.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleCategories(prev => [...prev, index]);
                }, index * 200);
            });
        }
    }, [isVisible]);

    return (
        <section id='skills' className="px-4 py-16 md:py-20 bg-[#181c23] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 text-white transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                        Technical Skills
                    </h3>
                    <p className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        My expertise across different technologies and frameworks, constantly evolving with industry trends.
                    </p>
                </div>

                {/* Skills Categories */}
                <div className="space-y-12 md:space-y-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div 
                            key={category.title}
                            className={`transition-all duration-1000 transform ${
                                visibleCategories.includes(categoryIndex) 
                                    ? 'opacity-100 translate-x-0' 
                                    : 'opacity-0 translate-x-12'
                            }`}
                        >
                            {/* Category Title */}
                            <h4 className="text-xl md:text-2xl font-semibold text-orange-400 mb-6 text-center md:text-left">
                                {category.title}
                            </h4>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skill.name}
                                        className={`group transition-all duration-700 delay-${skillIndex * 100} transform hover:scale-105 ${
                                            visibleCategories.includes(categoryIndex)
                                                ? 'opacity-100 translate-y-0'
                                                : 'opacity-0 translate-y-8'
                                        }`}
                                    >
                                        {/* Skill Item */}
                                        <div className="relative">
                                            {/* Skill Header */}
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-2xl transform transition-transform group-hover:scale-125">
                                                        {skill.icon}
                                                    </span>
                                                    <span className="text-white font-medium text-lg">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <span className="text-orange-400 font-bold text-lg">
                                                    {skill.percent}%
                                                </span>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="relative">
                                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transition-all duration-1500 ease-out transform origin-left"
                                                        style={{ 
                                                            width: visibleCategories.includes(categoryIndex) 
                                                                ? `${skill.percent}%` 
                                                                : '0%',
                                                            transitionDelay: `${skillIndex * 150}ms`
                                                        }}
                                                    />
                                                </div>
                                                {/* Glow effect */}
                                                <div 
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-30 blur-sm transition-all duration-1500 ease-out"
                                                    style={{ 
                                                        width: visibleCategories.includes(categoryIndex) 
                                                            ? `${skill.percent}%` 
                                                            : '0%',
                                                        transitionDelay: `${skillIndex * 150}ms`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating Skills Tags */}
                <div className={`mt-16 transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Responsive Design', 'API Integration', 'Database Design', 'Version Control', 'Agile Development'].map((tag, index) => (
                            <span
                                key={tag}
                                className={`px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-pulse' : ''}`}
                                style={{ 
                                    animationDelay: `${index * 200}ms`,
                                    animationDuration: '2s'
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
