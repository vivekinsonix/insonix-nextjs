"use client";

import Footer from "@/app/layout/footer";
import Header from "@/app/layout/header";
import SubHeader from "@/app/layout/SubHeaderfile";


import { Button, TextInput, Textarea, Card } from "flowbite-react";

export default function JobPage() {
    return (
        <>
            <Header />
            <SubHeader
                title=" Senior BPO Agent – US Logistics"
                description="Mohali, Punjab (On-site) • 2–4 years"
                backgroundImage="/images/careers-hero.jpg"
            />
            <section
                id="careers"
                className="py-16 md:py-24 bg-gray-950 text-gray-200"
            >
                <div className="container mx-auto">


                    {/* Grid Layout */}
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        {/* Responsibilities + Requirements */}
                        <div className="prose max-w-none">


                            <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                            <ul className="mb-5">
                                <li>
                                    Handle inbound/outbound calls via RingCentral with QA-ready
                                    notes
                                </li>
                                <li>
                                    Update Turvo statuses; coordinate exceptions with US team
                                </li>
                                <li>Maintain 100% Zoho CRM hygiene</li>
                                <li>Coach juniors; uphold SOPs</li>
                            </ul>


                            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                            <ul>
                                <li>Excellent English (neutral accent)</li>
                                <li>Hands-on with CRM/TMS (Zoho, Turvo preferred)</li>
                                <li>Availability for US time zones</li>
                            </ul>
                        </div>

                        {/* Application Form */}
                        <Card className="p-8 rounded-xl bg-gray-800 border-0 shadow-xl transition-transform duration-300 hover:scale-105 mb-10">
                            <form className="grid gap-3" action="#" method="post">
                                <h3 className="font-semibold text-lg mb-2">Apply now</h3>

                                <TextInput required placeholder="Full name" type="text" />
                                <TextInput required placeholder="Email" type="email" />
                                <TextInput placeholder="Phone" type="tel" />
                                <TextInput placeholder="Years of relevant experience" />
                                <Textarea placeholder="Why you? (2–3 lines)" rows={3} />

                                <Button className="inline-block m bg-blue-500 text-black font-bold py-3 px-8 rounded-full uppercase tracking-wide hover:scale-105 transition">
                                    Submit Application
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
