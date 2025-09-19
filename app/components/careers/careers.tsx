"use client";


import { Badge, Card } from "flowbite-react";

// Sample Jobs Data
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        tags: ["React", "Next.js", "TypeScript"],
        location: "Bangalore, India",
        experience: "2-4 years",
        description:
            "We are looking for a passionate Frontend Developer who has hands-on experience with React and Next.js. You will collaborate with designers and backend developers to build highly scalable products.",
        slug: "frontend-developer",
    },
    {
        id: 2,
        title: "Backend Engineer",
        tags: ["Node.js", "Express", "MongoDB"],
        location: "Remote",
        experience: "3-5 years",
        description:
            "As a Backend Engineer, you will be responsible for designing and implementing APIs, optimizing database queries, and ensuring high performance and security of our systems.",
        slug: "backend-engineer",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        tags: ["Figma", "Wireframing", "Prototyping"],
        location: "Mumbai, India",
        experience: "1-3 years",
        description:
            "We are seeking a creative UI/UX Designer to design intuitive user interfaces and create delightful user experiences. Proficiency in Figma and prototyping tools is required.",
        slug: "ui-ux-designer",
    },
    {
        id: 4,
        title: "DevOps Engineer",
        tags: ["AWS", "CI/CD", "Docker", "Kubernetes"],
        location: "Hyderabad, India",
        experience: "4-6 years",
        description:
            "The DevOps Engineer will manage cloud infrastructure, automate deployment processes, and monitor system performance to ensure smooth operations.",
        slug: "devops-engineer",
    },
];
// Helper to truncate description
function truncateContent(content: string, maxLength = 120) {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
}
export default function Careers() {
    return (
        <section id="careers" className="py-16 md:py-24 bg-gray-950 text-gray-200">
            <div className="container mx-auto text-center">


                {/* Section Header */}
                <div>
                    <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                        Hire
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold">
                        Careers – Experienced <br className="sm:hidden" />
                        AI & Python Developers
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-16">
                    {jobs.map((j) => (
                        <Card
                            key={j.id}
                            className="p-8 rounded-xl bg-gray-800 border-0 shadow-xl transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-white">{j.title}</h3>

                            <div className="flex flex-wrap justify-center gap-2 mb-3">
                                {j.tags.map((t) => (
                                    <Badge key={t} color="info">
                                        {t}
                                    </Badge>
                                ))}
                            </div>

                            <p className="text-gray-400 mb-2">
                                {j.location} • {j.experience}
                            </p>

                            <p className="text-gray-300">{truncateContent(j.description)}</p>

                            <div className="mt-6">
                                <a
                                    href={`/careers/openings/details/${j.slug}`}
                                    className="inline-block rounded-lg bg-blue-500 px-5 py-2 text-black font-medium hover:bg-blue-600 transition"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
