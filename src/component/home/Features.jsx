import { MapPin, Smartphone, Send, Bell, Star, Shield } from "lucide-react";
import LandingHeader from "../shared/LandingHeader";

const featuresData = [
    {
        icon: MapPin,
        title: "Real-Time Tracking",
        description:
            "See exactly where your shuttle is and when it will arrive at your stop.",
    },
    {
        icon: Smartphone,
        title: "Easy Ride Booking",
        description:
            "Book your shuttle seat in seconds with just a few taps.",
    },
    {
        icon: Send,
        title: "Route Planning",
        description:
            "View all available routes and plan your journey efficiently.",
    },
    {
        icon: Bell,
        title: "Live Notifications",
        description:
            "Get alerts when your shuttle is approaching or if schedules change.",
    },
    {
        icon: Star,
        title: "Rating & Feedback",
        description:
            "Rate your ride experience and help us improve service quality.",
    },
    {
        icon: Shield,
        title: "Secure & Reliable",
        description:
            "Your data and payments are protected with enterprise-grade security.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-16 lg:py-24 inter">
            <div className="container mx-auto px-6">
                <LandingHeader
                    badge="Features"
                    title="Everything You Need for a Smooth Ride"
                    description="EcoRide is packed with features designed to make your shuttle experience effortless."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresData.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-[#112415] hover:bg-[#112415]/80 transition-all duration-300 p-8 rounded-3xl flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#091409] flex items-center justify-center mb-6">
                                    <Icon className="text-landing_page_color w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-landing_page_description flex-1">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}