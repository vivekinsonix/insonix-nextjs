"use client";

import { Carousel } from "flowbite-react";

const testimonials = [
    {
        quote:
            "We chose them for their reputation, and they delivered far beyond our expectations. The team's expertise and seamless communication are unmatched.",
        name: "Jane Doe",
        role: "CEO, Tech Innovators",
    },
    {
        quote:
            "A true partner, not just a vendor. Their deep understanding of our market helped us launch a product that instantly became a market leader.",
        name: "John Smith",
        role: "Founder, E-commerce Solutions",
    },
    {
        quote:
            "The quality of their code is flawless. We had a complex project, and they navigated every challenge with absolute precision.",
        name: "Emily Chen",
        role: "CTO, Global Finance Co.",
    },
    {
        quote:
            "Their design team created an elegant user experience that is both beautiful and highly functional. Our users love it.",
        name: "Robert Evans",
        role: "Product Manager, SaaS Startup",
    },
];

export default function Clients() {
    // group testimonials into chunks of 2
    const slides = [];
    for (let i = 0; i < testimonials.length; i += 2) {
        slides.push(testimonials.slice(i, i + 2));
    }

    return (
        <section
            id="testimonials"
            className="py-16 md:py-24 bg-gray-950 text-gray-200"
        >
            <div className="container mx-auto text-center">
                {/* Section header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Social Proof
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        What Our Clients Say
                    </h2>
                </div>

                {/* Carousel */}
                <Carousel
                    className="w-full max-w-5xl mx-auto mt-44 mb-24"
                    slideInterval={6000}
                    indicators={true}
                >
                    {slides.map((group, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {group.map((t, i) => (
                                <div
                                    key={i}
                                    className="testimonial-card p-8 bg-gray-900 rounded-xl shadow-lg"
                                >
                                    <p className="text-lg italic text-gray-300 mb-4">"{t.quote}"</p>
                                    <p className="font-bold text-base md:text-lg text-white">
                                        {t.name}
                                    </p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
