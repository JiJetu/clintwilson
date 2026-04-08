import { Play } from "lucide-react";
import { FaApple } from "react-icons/fa";


export default function CTA() {
    return (
        <section id="download" className="py-16 lg:py-24 inter">
            <div className="container mx-auto px-6">
                {/* Main Card with Circle Highlight */}
                <div className="relative bg-[#112415] 
                          rounded-[40px] p-12 lg:p-16 text-center overflow-hidden">

                    {/* Glowing Circle in the Middle */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl z-0" />

                    <div className="relative z-20">
                        {/* Heading */}
                        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter text-white mb-4">
                            Ready to Ride Smarter?
                        </h2>

                        {/* Description */}
                        <p className="text-landing_page_description">
                            Download EcoRide today and experience the future of shuttle transportation.
                        </p>
                        <p className="text-landing_page_description mt-1 text-sm font-medium">
                            Available on both iOS and Android.
                        </p>

                        {/* Buttons */}
                        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/* iOS Button */}
                            <a
                                className="group flex items-center gap-x-3 bg-landing_page_color hover:bg-landing_page_color/80 
                             active:scale-95 transition-all duration-200 text-white font-semibold 
                             px-9 py-4 rounded-3xl text-sm md:text-lg w-full sm:w-auto justify-center"
                            >
                                <FaApple className="text-xl md:text-3xl leading-none" />
                                Download for iOS
                            </a>

                            {/* Android Button */}
                            <a
                                className="group flex items-center gap-x-3 bg-[#091409] hover:bg-[#091409]/80 
                             active:scale-95 transition-all duration-200 text-white font-semibold 
                             px-9 py-4 rounded-3xl text-sm md:text-lg w-full sm:w-auto justify-center 
                             border border-white/10"
                            >
                                <Play className="w-6 h-6" />
                                Download for Android
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}