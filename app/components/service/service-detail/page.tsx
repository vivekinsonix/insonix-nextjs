import Footer from "@/app/layout/footer";
import Header from "@/app/layout/header";
import SubHeader from "@/app/layout/SubHeaderfile";
import Image from "next/image";


export default function PsychiatricCarePage() {
    return (
        <>
            <Header />
            {/* SubHeader */}
            <SubHeader title=" Product Managers & CTOs at funded startups"
                description=""
                backgroundImage="/startup-3.jpg" />

            {/* Services Section */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                        Product Managers & CTOs at funded startups
                    </h2>
                    <p className="text-stone-700 leading-relaxed mb-8">
                        Building bespoke, scalable, and secure software solutions that perfectly align with your business goals and operational needs.

                    </p>

                    {/* Feature image */}
                    <div className="mb-10">
                        <img
                            className="w-full rounded-xl object-cover border-4 border-white shadow-xl"
                            src="/startup-3.jpg"
                            alt="Psychiatric consultation"
                        />
                    </div>
                    <p className="text-stone-700 leading-relaxed mb-8">
                        Building bespoke, scalable, and secure software solutions that perfectly align with your business goals and operational needs.
                        You’re scaling a product that needs to deliver speed, reliability, and user delight—all while managing limited resources and increasing stakeholder expectations. We help you cut through the noise so you can focus on building what matters most.
                    </p>
                    {/* Services grid with extra points */}
                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-3">
                        <li className="bg-white rounded-xl p-6  hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">Why Work With Us?</h3>

                            <ul className="list-disc list-inside mt-3 text-stone-600 text-sm space-y-4">
                                <li>  <b>Accelerated Delivery</b> – From MVP to enterprise-grade features, we help you ship faster without technical debt.</li>
                                <li><b>Future-Proof Architecture</b>– Scalable, secure, and designed to evolve as your product and team grow.</li>
                                <li><b>Cross-Functional Alignment</b> – Smooth collaboration across design, engineering, and business to keep your roadmap on track.</li>
                                <li><b>Data-Driven Decisions</b> – Build smarter with insights that minimize risk and maximize ROI.</li>
                            </ul>
                        </li>

                        <li className="bg-white rounded-xl p-6 hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">We Understand Your Challenges</h3>

                            <ul className="list-disc list-inside mt-3 text-stone-600 text-sm space-y-4">
                                <li>Balancing investor expectations with realistic timelines</li>
                                <li>Choosing the right tech stack to scale beyond Series A/B</li>
                                <li>Navigating the trade-offs between shipping now vs. building right</li>
                            </ul>
                        </li>
                        {/* Feature image */}
                        <div className="mb-10">
                            <img
                                className="w-full rounded-xl object-cover border-4 border-white shadow-xl"
                                src="/startup-1.jpg"
                                alt="Psychiatric consultation"
                            />
                        </div>
                        <li className="bg-white rounded-xl p-6 hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">Let’s Build Your Competitive Edge</h3>
                            <p className="text-stone-600 mt-2">
                                Whether you need hands-on technical leadership, product acceleration, or a trusted partner to validate and scale your roadmap, we’re here to help.
                            </p>

                        </li>

                        <li className="bg-white rounded-xl p-6 hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">What We Bring to the Table</h3>
                            <ul className="list-disc list-inside mt-3 text-stone-600 text-sm space-y-4">
                                <li>
                                    <strong>Speed Without Chaos:</strong> Launch features, integrations, and platforms faster—while keeping a clean codebase that scales.
                                </li>
                                <li>
                                    <strong>Technical Strategy for Growth:</strong> We architect systems that evolve with your product—whether you’re preparing for Series B, entering new markets, or expanding teams.
                                </li>
                                <li>
                                    <strong>Execution Partner, Not Just Advisors:</strong> We don’t just suggest roadmaps—we help you implement them with hands-on expertise across product, design, and engineering.
                                </li>
                                <li>
                                    <strong>Investor-Friendly Metrics:</strong> Translate product progress into metrics your investors care about: velocity, scalability, adoption, and runway efficiency.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />

        </>
    );
}
