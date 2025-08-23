// About section for portfolio homepage
export default function AboutSection() {
    return (
        <section id="about" className="px-8 py-12 md:py-20 bg-[#1f232b]">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-xl font-bold mb-4">About me</h3>
                    <p className="text-gray-300 mb-6">Hi, I’m Mikko 👋 I’m a developer who loves turning ideas into digital experiences. I build both mobile and web apps, and I’m also into front-end design—making sure that what I create doesn’t just work, but also looks and feels great. I enjoy blending functionality with creativity, whether it’s coding a feature that makes life easier or designing an interface that feels effortless to use. Outside of projects, I’m always learning, experimenting, and pushing myself to create cleaner, smarter, and more engaging work.</p>
                    <div className="flex gap-8 mb-8">
                        <div className='text-center'>
                            <div className="text-2xl font-bold text-orange-400">5</div>
                            <div className="text-gray-400 text-sm">Completed Projects</div>
                        </div>
                        <div className='text-center'>
                            <div className="text-2xl font-bold text-orange-400">2</div>
                            <div className="text-gray-400 text-sm">Client satisfaction</div>
                        </div>
                        <div className='text-center'>
                            <div className="text-2xl font-bold text-orange-400">1</div>
                            <div className="text-gray-400 text-sm">Year/s of experience</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="text-orange-400 text-2xl">&#128187;</span>
                        <span>Website Development</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-orange-400 text-2xl">&#128241;</span>
                        <span>Mobile App Development</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-orange-400 text-2xl">&#128187;</span>
                        <span>Website Hosting</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
