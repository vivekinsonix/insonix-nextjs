"use client";

import Image from "next/image";
import { Card } from "flowbite-react";

const portfolioItems = [
    {
        title: "FinTech Platform",
        description:
            "A secure, high-performance platform for institutional trading, reducing transaction times by 40%.",
        imgSrc: "/fintetech.svg",
        link: "#",
    },
    {
        title: "E-commerce Solution",
        description:
            "A custom e-commerce engine that scaled to handle over 1 million unique users and increased conversion rates by 25%.",
        imgSrc: "/ecommerce.svg",
        link: "#",
    },
    {
        title: "Healthcare Portal",
        description:
            "A HIPAA-compliant patient management system, streamlining appointment scheduling and data retrieval for clinics nationwide.",
        imgSrc: "/health.svg",
        link: "#",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-16 md:py-24 bg-gray-950 text-gray-200">
            <div className="container mx-auto text-center">


                {/* Section Header */}
                <div>
                    <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Our Work
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Case Studies: <br className="sm:hidden" />
                        Our Legacy in Action
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-16">
                    {portfolioItems.map((item, idx) => (
                        <Card
                            key={idx}
                            className="bg-gray-900 border-0 rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Image full-width, no padding/margin */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card content below the image */}
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                                <a
                                    href={item.link}
                                    className="mt-4 inline-block text-sm font-semibold uppercase text-blue-500 hover:text-blue-400"
                                >
                                    View Case Study →
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
