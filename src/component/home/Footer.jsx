import { IMAGES } from "../../assets";
import { scrollToSection } from "../../utils/scrollToSection";


export default function Footer() {

    return (
        <footer className="pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10">
                    {/* Logo & Description */}
                    <div className="md:col-span-6">
                        <div className="flex items-center gap-x-3 mb-4">
                            {/* Logo as Image */}
                            <img
                                src={IMAGES.logo}
                                alt="EcoRide Logo"
                                className="h-8 w-auto"
                            />
                        </div>

                        <p className="text-landing_page_description max-w-md">
                            Smart shuttle services for a greener, more connected world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold mb-5 text-lg">Quick Links</h3>
                        <ul className="space-y-3 text-white/70">
                            <li>
                                <button
                                    onClick={() => scrollToSection("features")}
                                    className="hover:text-landing_page_color transition-colors"
                                >
                                    Features
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("how-it-works")}
                                    className="hover:text-landing_page_color transition-colors"
                                >
                                    How It Works
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("download")}
                                    className="hover:text-landing_page_color transition-colors"
                                >
                                    Download
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-semibold mb-5 text-lg">Contact</h3>
                        <ul className="space-y-3 text-white/70">
                            <li>
                                <a href="mailto:support@ecoride.app" className="hover:text-landing_page_color transition-colors">
                                    support@ecoride.app
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-landing_page_color transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-landing_page_color transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-landing_page_description text-sm">
                        &copy; 2026 EcoRide. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}