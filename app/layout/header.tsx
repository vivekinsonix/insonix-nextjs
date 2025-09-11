"use client";

import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Button } from "flowbite-react";
import { Link } from "react-scroll";

export default function Header() {
    return (
        <Navbar
            fluid
            rounded
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-md"
        >
            <div className="flex w-full items-center justify-between">
                {/* Left: Logo */}
                <NavbarBrand
                    href="#hero"
                    className="text-white font-extrabold text-xl cursor-pointer"
                >
                    <span className="text-blue-500">INSONIX</span>
                </NavbarBrand>

                {/* Center: Nav Links */}
                <div className="hidden md:flex space-x-8">
                    <Link
                        to="about"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        About Us
                    </Link>
                    <Link
                        to="services"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        Services
                    </Link>
                    <Link
                        to="portfolio"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="testimonials"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        Testimonials
                    </Link>
                </div>

                {/* Right: Button */}
                <div className="hidden md:flex">
                    <Link
                        to="contact"
                        smooth
                        duration={600}
                        offset={-80}
                    >
                        <Button className="bg-blue-500 text-black font-bold rounded-full uppercase">
                            Get a Quote
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <NavbarToggle />
            </div>

            {/* Mobile Menu */}
            <NavbarCollapse className="md:hidden text-center">
                <Link
                    to="about"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    About Us
                </Link>
                <Link
                    to="services"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    Services
                </Link>
                <Link
                    to="portfolio"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    Portfolio
                </Link>
                <Link
                    to="testimonials"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    Testimonials
                </Link>
                <Link
                    to="contact"
                    smooth
                    duration={600}
                    offset={-80}
                    className="my-3"
                >
                    <Button className="bg-blue-500 text-black font-bold rounded-full uppercase my-3 m-auto">
                        Get a Quote
                    </Button>
                </Link>
            </NavbarCollapse>
        </Navbar>
    );
}
