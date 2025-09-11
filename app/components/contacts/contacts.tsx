"use client";

import { Button } from "flowbite-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 text-center bg-gray-950 text-gray-200">
            <div className="container mx-auto">
                {/* Section header */}

                <div className="mb-12">
                    <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Your Next Move
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Ready to Build Something <br className="sm:hidden" /> Exceptional?
                    </h2>
                </div>
                {/* Short pitch */}
                <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
                    Your vision deserves a top-tier team. Let's discuss your project and
                    turn your ideas into a reality that stands out.
                </p>

                {/* CTA Button */}
                <Button
                    as="a"
                    href="mailto:contact@yourcompany.com"
                    size="lg"
                    className="inline-block bg-blue-500 text-black font-bold py-3 px-8 rounded-full uppercase tracking-wide hover:scale-105 transition"
                >
                    Get a Free Quote
                </Button>

                {/* Contact Info */}
                <div className="mt-12 md:mt-16 text-center">
                    <p className="text-lg font-semibold text-gray-300">Connect with Us</p>
                    <p className="text-sm md:text-base text-gray-500 mt-2">
                        [Your Company Address], USA
                        <br />
                        Email:{" "}
                        <a
                            href="mailto:contact@yourcompany.com"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            contact@yourcompany.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
