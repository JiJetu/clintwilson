import { useState } from "react";
import { IMAGES } from "../../assets";
import { scrollToSection } from "../../utils/scrollToSection";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItem = [
        { name: "Features", id: "features" },
        { name: "How It Works", id: "how-it-works" },
        { name: "Download", id: "download" },
    ];

    return (
        <nav className="border-b border-white/10">
            <div className="container mx-auto px-6">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-x-3">
                        <img className="h-7" src={IMAGES.logo} alt="EcoRide" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-x-10 text-white font-medium">
                        {navItem.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-primary transition-colors duration-200"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <button
                            className="bg-landing_page_color hover:bg-landing_page_color/80 active:scale-95 transition-all duration-200 text-white font-semibold px-8 py-3 rounded-3xl text-sm tracking-wider"
                        >
                            Get the App
                        </button>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            // X icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0A120A] border-t border-white/10">
                    <div className="px-6 py-8 flex flex-col gap-y-6 text-lg font-medium">
                        {navItem.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    scrollToSection(item.id);
                                    setIsOpen(false);
                                }}
                                className="text-white hover:text-primary transition-colors text-left"
                            >
                                {item.name}
                            </button>
                        ))}

                        {/* Mobile CTA Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 bg-landing_page_color hover:bg-landing_page_color/80 active:scale-95 transition-all w-full py-4 rounded-3xl text-white font-semibold text-base tracking-wider"
                        >
                            Get the App
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;