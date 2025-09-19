"use client";

import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggle,
    NavbarCollapse,
    Button,
} from "flowbite-react";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";

function WhoWeServe() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            {/* Dropdown Toggle */}
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-1 text-white hover:text-blue-400"
            >

                Who we serve
                <ChevronDown
                    size={16}
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute left-0 mt-2 w-44 bg-black/90 border border-gray-700 rounded shadow-lg z-50 md:w-96 cursor-pointer">
                    <Link
                        to="services"
                        smooth
                        duration={600}
                        offset={-80}
                        className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-black"
                    >
                        Product Managers & CTOs at funded startups

                    </Link>
                    <Link
                        to="services"
                        smooth
                        duration={600}
                        offset={-80}
                        className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-black"
                    >
                        Midsize companies with digital transformation needs


                    </Link>
                    <Link
                        to="services"
                        smooth
                        duration={600}
                        offset={-80}
                        className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-black"
                    >
                        Agencies & Consulting firms

                    </Link>
                    <Link
                        to="services"
                        smooth
                        duration={600}
                        offset={-80}
                        className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-black"
                    >Enterprises with legacy systems


                    </Link>
                    <Link
                        to="services"
                        smooth
                        duration={600}
                        offset={-80}
                        className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-black"
                    >Companies with failing projects

                    </Link>
                </div>
            )}
        </div>
    );
}

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

                    {/* Dropdown */}
                    <WhoWeServe />

                    <Link
                        to="careers"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        Careers
                    </Link>
                    <Link
                        to="products"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        Products
                    </Link>
                    <Link
                        to="portfolio"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        Case studies
                    </Link>
                    <Link
                        to="blogs"
                        smooth
                        duration={600}
                        offset={-80}
                        className="cursor-pointer text-white hover:text-blue-400"
                    >
                        Blogs
                    </Link>
                </div>

                {/* Right: Button */}
                <div className="hidden md:flex">
                    <Link to="contact" smooth duration={600} offset={-80}>
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

                {/* Dropdown inside mobile menu */}
                <div className="my-2 m-auto">
                    <WhoWeServe />
                </div>

                <Link
                    to="careers"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    Careers
                </Link>
                <Link
                    to="products"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    Products
                </Link>
                <Link
                    to="portfolio"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    Case studies
                </Link>
                <Link
                    to="blogs"
                    smooth
                    duration={600}
                    offset={-80}
                    className="cursor-pointer text-white hover:text-blue-400 py-1"
                >
                    Blogs
                </Link>
                <Link to="contact" smooth duration={600} offset={-80}>
                    <Button className="bg-blue-500 text-black font-bold rounded-full uppercase my-3 m-auto">
                        Get a Quote
                    </Button>
                </Link>
            </NavbarCollapse>
        </Navbar>
    );
}
