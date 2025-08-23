// Contact section for portfolio homepage
import { useState } from 'react';

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic (e.g., emailjs, API call)
        setSubmitted(true);
    };

    return (
        <section id="contact" className="px-8 py-12 md:py-20 bg-[#1f232b]">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-300 mb-8">Feel free to reach out for collaborations or project inquiries using the form below.</p>
                {submitted ? (
                    <div className="text-green-400 font-semibold">Thank you for your message! I'll get back to you soon.</div>
                ) : (
                    <form className="max-w-lg mx-auto bg-[#232733] rounded-lg p-8 shadow" onSubmit={handleSubmit}>
                        <div className="mb-4 text-left">
                            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 rounded bg-[#181c23] text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 rounded bg-[#181c23] text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6 text-left">
                            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 rounded bg-[#181c23] text-white border border-gray-600 focus:outline-none focus:border-orange-400"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow w-full font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                )}
                <div className="mt-8 text-gray-400">
                    Or email directly: <span className="font-mono">your.email@example.com</span>
                </div>
            </div>
        </section>
    );
}
