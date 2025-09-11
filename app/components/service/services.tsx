// components/Services.js
"use client";

import { Card } from "flowbite-react";

const services = [
    {
        title: "Custom Software Development",
        desc: "Building bespoke, scalable, and secure software solutions that perfectly align with your business goals and operational needs.",
        icon: (
            <svg
                className="h-12 w-12 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "var(--color-accent)" }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L12 21M12 21L14.25 17M12 21V3M4 17h16M4 17a4 4 0 014-4h8a4 4 0 014 4"
                ></path>
            </svg>
        ),
    },
    {
        title: "Web Application Development",
        desc: "Creating high-performance, user-friendly web applications that deliver seamless experiences and drive user engagement.",
        icon: (
            <svg
                className="h-12 w-12 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "var(--color-accent)" }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 21h7a2 2 0 002-2V9.456a2 2 0 00-.59-1.41l-2.82-2.83a2 2 0 00-1.41-.59H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
            </svg>
        ),
    },
    {
        title: "UI/UX Design & Strategy",
        desc: "Designing intuitive, elegant user interfaces and crafting a seamless user experience that captivates your audience.",
        icon: (
            <svg
                className="h-12 w-12 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "var(--color-accent)" }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.5 8.5v7h-1v-7h1zm15 7v-7h-1v7h1zm-13-7h7v7h-7v-7zm13 0h-7v7h7v-7zm-13 7h7v7h-7v-7zm13 0h-7v7h7v-7z"
                ></path>
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-24 bg-gray-950 text-gray-200">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <div>
                    <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        What We Build
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Custom Solutions for <br className="sm:hidden" /> Complex Challenges
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-16">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="p-8 rounded-xl bg-gray-800 border-0 shadow-xl transition-transform duration-300 hover:scale-105"
                        >
                            {service.icon}
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-300">{service.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
