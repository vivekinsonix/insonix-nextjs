"use client";

import Image from "next/image";

interface SubHeaderProps {
    title: string;
    description?: string;
    backgroundImage?: string;
}

export default function SubHeader({
    title,
    description,
    backgroundImage,
}: SubHeaderProps) {
    return (
        <section className="relative isolate overflow-hidden pt-12 ">
            {/* Background Image */}
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt="" // background is decorative
                    fill
                    priority
                    className="object-cover object-center"
                />
            )}

            {/* Overlay */}
            <div className="absolute inset-0  bg-black opacity-90" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-20 sm:py-24 md:py-32 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>

                {description && (
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
