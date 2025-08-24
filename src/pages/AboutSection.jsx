// About section for portfolio homepage
export default function AboutSection() {
    return (
        <section id="about" className="px-4 py-12 md:py-20 bg-[#23272f]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Timeline with icons and services */}
                <div className="flex flex-col items-start h-full relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-1 bg-orange-400 rounded-full opacity-60" style={{ height: '90%' }}></div>
                    {/* Timeline items */}
                    <div className="flex items-center mb-12 relative z-10" style={{ marginTop: '2.5rem' }}>
                        <div className="w-8 h-8 flex items-center justify-center bg-[#23272f] border-2 border-orange-400 rounded-full mr-6">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <span className="text-lg text-white font-medium">Website Development</span>
                    </div>
                    <div className="flex items-center mb-12 relative z-10">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#23272f] border-2 border-orange-400 rounded-full mr-6">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>
                        </div>
                        <span className="text-lg text-white font-medium">App Development</span>
                    </div>
                    <div className="flex items-center relative z-10">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#23272f] border-2 border-orange-400 rounded-full mr-6">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 7v10M16 7v10" /></svg>
                        </div>
                        <span className="text-lg text-white font-medium">Website Hosting</span>
                    </div>
                </div>

                {/* Right: About and stats */}
                <div className="flex flex-col justify-center h-full">
                    <h3 className="text-3xl font-bold text-white mb-4">About me</h3>
                    <p className="text-gray-300 mb-8">Hi, I’m Mikko 👋 I’m a developer who loves turning ideas into digital experiences. I build both mobile and web apps, and I’m also into front-end design—making sure that what I create doesn’t just work, but also looks and feels great. I enjoy blending functionality with creativity, whether it’s coding a feature that makes life easier or designing an interface that feels effortless to use. Outside of projects, I’m always learning, experimenting, and pushing myself to create cleaner, smarter, and more engaging work.</p>
                    <div className="flex gap-10 mb-2">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-orange-400">4</div>
                            <div className="text-gray-400 text-sm md:text-base mt-1">Completed Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-orange-400">95 <span className="text-2xl md:text-3xl text-orange-400 font-bold align-top">%</span></div>
                            <div className="text-gray-400 text-sm md:text-base mt-1">Client satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-orange-400">1 </div>
                            <div className="text-gray-400 text-sm md:text-base mt-1">Years of experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
