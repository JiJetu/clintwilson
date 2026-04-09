
import { Leaf, Play } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { IMAGES } from "../../assets";

export default function Hero() {


    return (
        <section className="py-16 inter">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT SIDE - TEXT CONTENT */}
                    <div className="flex flex-col items-start">
                        {/* Top badge */}
                        <div className="inline-flex items-center gap-x-2 bg-[#22C55E]/10 text-landing_page_color px-6 py-2.5 rounded-3xl text-sm font-medium tracking-wide mb-6">
                            <Leaf className="h-6 w-6" />
                            Smart &amp; Green Transportation
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-none tracking-normal text-white mb-6">
                            Your Smart{" "}
                            <br />
                            <span className="text-landing_page_color">Shuttle</span>
                            <br />
                            Companion
                        </h1>

                        {/* Subtext */}
                        <p className="text-sm md:text-xl text-landing_page_description max-w-2xl mb-10">
                            Seamless shuttle booking for events, corporate campuses, and large
                            venues. Track your ride in real-time and never miss a shuttle again.
                        </p>

                        {/* App Store & Google Play Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {/* App Store Button */}
                            <a
                                className="flex h-14 items-center gap-x-3 rounded-3xl bg-landing_page_color px-7 text-white hover:bg-landing_page_color/80 active:scale-95 transition-all duration-200"
                            >
                                <FaApple className="text-3xl leading-none" />
                                <div className="text-left">
                                    <div className="text-sm md:text-lg font-medium leading-none">App Store</div>
                                </div>
                            </a>

                            {/* Google Play Button */}
                            <a
                                className="flex h-14 items-center gap-x-3 rounded-3xl bg-[#112415] px-7 text-white hover:bg-[#112415]/80 active:scale-95 transition-all duration-200"
                            >
                                <div className="flex items-center justify-center">
                                    <Play className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm md:text-lg font-medium leading-none">Google Play</div>
                                </div>
                            </a>
                        </div>

                        {/* Small text */}
                        <p className="mt-6 text-sm text-[#6B7280] flex items-center gap-x-2">
                            <span>Available on iOS &amp; Android</span>
                            <span className="text-landing_page_color">•</span>
                            <span>Free to download</span>
                        </p>
                    </div>

                    {/* RIGHT SIDE - SINGLE COMBINED PHONE IMAGE */}
                    <div className="relative flex justify-center w-full">
                        <img
                            src={IMAGES.banner}
                            alt="EcoRide mobile app mockups"
                            className="w-[900px] max-w-[380px] sm:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1200px] mx-auto drop-shadow-2xl object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}