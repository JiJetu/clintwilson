import React from "react";
import { Smartphone, MapPin, Send, ArrowRight, ChevronRight } from "lucide-react";
import LandingHeader from "../shared/LandingHeader";

const stepsData = [
    {
        id: 1,
        step: "01",
        icon: Smartphone,
        title: "Download the App",
        desc: "Get EcoRide free on the App Store or Google Play.",
    },
    {
        id: 2,
        step: "02",
        icon: MapPin,
        title: "Book Your Ride",
        desc: "Choose your route, pick a time, and reserve your seat.",
    },
    {
        id: 3,
        step: "03",
        icon: Send,
        title: "Track & Enjoy",
        desc: "Follow your shuttle in real-time and enjoy a comfortable ride.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-[#0A120A] py-16 lg:py-24 inter">
            <div className="container mx-auto px-6">
                {/* Header - using your existing LandingHeader */}
                <LandingHeader
                    badge="How It Works"
                    title="Get Started in 3 Simple Steps"
                />

                {/* Steps Container - Fully Responsive */}
                <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
                    {stepsData.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <React.Fragment key={step.id}>
                                {/* Step Card */}
                                <div className="flex-1 w-full lg:w-auto">
                                    <div className="group transition-all duration-300 p-8 rounded-3xl flex flex-col items-center text-center h-full">
                                        {/* Icon Box */}
                                        <div className="w-16 h-16 bg-[#112415] rounded-3xl flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-landing_page_color" />
                                        </div>

                                        {/* Step Number */}
                                        <span className="text-landing_page_color text-sm font-semibold tracking-[1.5px] uppercase mb-4">
                                            STEP {step.step}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl font-semibold text-white mb-3">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-landing_page_description leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow Connector - Hidden on mobile, visible on lg+ */}
                                {index < stepsData.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-center px-6">
                                        <ChevronRight className="w-9 h-9 text-[#1A331E]" />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}