export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center text-center pt-24 pb-12 overflow-hidden bg-[url('https://placehold.co/1920x1080/1a1a1a/404040?text=High-End+Development')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-white">
                    Your Vision. <br />
                    Our <span className="text-blue-500">Top 1%</span> Expertise.
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 text-gray-300">
                    With over 15 years of experience, we are the USA-based development team for businesses that demand precision, performance, and unparalleled quality.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-blue-500 text-black font-bold py-3 px-8 rounded-full uppercase tracking-wide hover:scale-105 transition"
                >
                    Schedule a Consultation
                </a>
            </div>
        </section>
    );
}
