// Hero section for portfolio homepage
export default function HeroSection() {
    return (
        <section id="home" className="relative flex flex-col md:flex-row items-center justify-center px-8 py-16 md:py-28 gap-16 bg-gradient-to-br from-[#181c23] via-[#232733] to-[#181c23]">
            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-900 to-orange-500 opacity-10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-orange-500 to-orange-900 opacity-10 rounded-full blur-2xl -z-10"></div>

            {/* Profile & Info */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
                <div className="mb-6">
                    <span className="inline-block w-3 h-3 bg-orange-400 rounded-full mr-2 align-middle"></span>
                    <span className="text-lg text-orange-400 font-semibold tracking-wide">Portfolio</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Hello<span className="text-orange-400">.</span></h2>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">I'm Mikko</h1>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-400">Front End Developer</h3>
                <p className="text-gray-300 mb-8 max-w-md">I create modern web and mobile experiences with a focus on clean design, performance, and usability. Let's build something amazing together.</p>
                <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-8">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow font-semibold transition">Got a project?</button>
                    <button className="border border-orange-400 text-orange-400 px-6 py-2 rounded shadow font-semibold hover:bg-orange-400 hover:text-[#181c23] transition">Download CV</button>
                </div>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start text-gray-400 text-base mt-2">
                    <span className="bg-[#232733] px-3 py-1 rounded">HTML5</span>
                    <span className="bg-[#232733] px-3 py-1 rounded">CSS</span>
                    <span className="bg-[#232733] px-3 py-1 rounded">Javascript</span>
                    <span className="bg-[#232733] px-3 py-1 rounded">Node.js</span>
                    <span className="bg-[#232733] px-3 py-1 rounded">React</span>
                    <span className="bg-[#232733] px-3 py-1 rounded">Git</span>
                    <span className="bg-[#232733] px-3 py-1 rounded">Github</span>
                </div>
            </div>

            {/* Profile Image with ring and accent */}
            {/* <div className="flex-1 flex justify-center z-10">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-orange-500 to-orange-900 opacity-30"></div>
                    <img src="/public/images/profile-placeholder.png" alt="Profile" className="relative w-56 h-56 rounded-full object-cover bg-gray-700 border-4 border-orange-400 shadow-lg" />
                </div>
            </div> */}

            {/* Change the image to a background image soon if available */}

        </section>
    );
}
