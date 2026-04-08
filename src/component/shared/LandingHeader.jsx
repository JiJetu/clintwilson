const LandingHeader = ({ badge, title, description, className }) => {

    return (
        <div className={`text-center mb-12 ${className} inter`}>
            {/* Features Badge */}
            <div className="inline-flex items-center justify-center bg-[#22C55E]/10 text-landing_page_color px-8 py-2 rounded-3xl text-sm font-semibold tracking-wide mx-auto">
                {badge}
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl lg:text-4xl font-semibold leading-none tracking-tighter text-white mt-8">
                {title}
            </h2>

            {/* Subtext */}
            {description && (
                <p className="text-landing_page_description mt-5">
                    {description}
                </p>
            )}
        </div>
    );
};

export default LandingHeader;