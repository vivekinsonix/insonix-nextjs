// components/About.js
"use client";

import Image from "next/image";

const differentiators = [
    { stat: "15+", label: "Years of Experience" },
    { stat: "Top 1%", label: "Expertise" },
    { stat: "100%", label: "USA-Based Team" },
    { stat: "5-Star", label: "Client Reviews" },
];

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-950 text-gray-200">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <div className="mb-12">
                    <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Our Legacy
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        15 Years of <br className="sm:hidden" /> Market Leadership
                    </h2>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 md:mt-16">
                    <div className="order-2 md:order-1 text-left space-y-6 max-w-xl">
                        <p className="text-base md:text-lg lg:text-xl text-gray-300">
                            For over a decade and a half, we have built a reputation on one core principle: excellence.
                            Our journey began with a commitment to solving complex problems with elegant, scalable solutions.
                            Today, we stand as a top-tier, USA-based development team, trusted by leading businesses to build the future.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300">
                            We are not just developers; we are partners in your success.
                            Our deep understanding of the USA market ensures we build solutions that resonate with your audience and drive tangible growth.
                        </p>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <Image
                            src="/team.svg"
                            alt="Our professional team"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-xl w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Differentiators */}
                <div className="mt-16 md:mt-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8">
                        Our Core Differentiators
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                            >
                                <h4 className="text-5xl font-extrabold text-accent">
                                    {item.stat}
                                </h4>
                                <p className="mt-2 text-sm md:text-base font-semibold text-gray-300">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
