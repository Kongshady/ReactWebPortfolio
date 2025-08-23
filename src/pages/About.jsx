// Minimal About page

export default function About() {
    return (
        <main className="flex flex-col items-center mt-16 px-4">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">About Me</h2>
                <p className="text-gray-600 mb-4">This is a placeholder for your bio. Write a few sentences about yourself, your background, and your interests.</p>
            </div>
            {/* Skills Section Placeholder */}
            <section className="w-full max-w-xl mb-8">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <ul className="flex flex-wrap gap-2 justify-center">
                    <li className="bg-gray-100 px-3 py-1 rounded">JavaScript</li>
                    <li className="bg-gray-100 px-3 py-1 rounded">React</li>
                    <li className="bg-gray-100 px-3 py-1 rounded">Tailwind CSS</li>
                    <li className="bg-gray-100 px-3 py-1 rounded">Node.js</li>
                    {/* Add more skills as needed */}
                </ul>
            </section>
            {/* Contact Info Placeholder */}
            <section className="w-full max-w-xl">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-600">Email: <span className="font-mono">your.email@example.com</span></p>
            </section>
        </main>
    );
}
