import React, { useState, useEffect } from 'react';
import { Award, ChevronRight, ChevronLeft, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
    const [currentProject, setCurrentProject] = useState(0);

    // Client success stories with business results
    const successStories = [
        {
            id: 1,
            client: "Lane Orthodontics",
            result: "40% More Online Bookings",
            image: "/lane.jpeg",
            device: "laptop",
            industry: "Healthcare"
        },
        {
            id: 2,
            client: "Diesel Injection Service",
            result: "Modern Digital Presence",
            image: "/diesel.jpeg",
            device: "mobile",
            industry: "Automotive"
        },
        {
            id: 3,
            client: "David's Barbook",
            result: "Interactive Web Application",
            image: "/barbookfull.jpeg",
            device: "laptop",
            industry: "Hospitality"
        }
    ];

    

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev + 1) % successStories.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [successStories.length]);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % successStories.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + successStories.length) % successStories.length);
    };

    const DeviceMockup = ({ story }) => {
        return (
            <div className="relative mx-auto w-full max-w-96 h-96 flex items-center justify-center px-4">
                {story.device === 'mobile' ? (
                    <div className="relative w-64 h-96 max-w-full">
                        {/* Phone Frame */}
                        <div className="absolute inset-0 bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl border border-slate-600">
                            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                                {/* Notch */}
                                {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-10"></div> */}
                                {/* Screen Content */}
                                <img 
                                    src={story.image} 
                                    alt={`${story.client} website`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="relative w-full max-w-[420px] h-72">
                        {/* Laptop Frame */}
                        <div className="absolute inset-0 bg-slate-800 rounded-t-xl shadow-2xl p-3 border border-slate-600">
                            <div className="w-full h-60 bg-black rounded-lg overflow-hidden relative">
                                <img 
                                    src={story.image} 
                                    alt={`${story.client} website`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[calc(100%+2rem)] max-w-[28rem] h-4 bg-slate-700 rounded-b-xl"></div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section 
            id="home" 
            className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-700/25 bg-[size:60px_60px] opacity-20"></div>
            
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    {/* Left Side - Business-Focused Content */}
                    <div className="space-y-8">

                        {/* Main Headline */}
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                                Professional Websites That{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    Get Results
                                </span>
                            </h1>
                            
                            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                                Professional websites that work on all devices, rank well on Google, and turn visitors into paying customers.
                            </p>
                        </div>

                        {/* Value Proposition */}
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-white">What You Get:</h3>
                            <div className="grid sm:grid-cols-2 gap-3 text-slate-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Mobile-friendly design</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span>Google optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Contact forms that work</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span>Ongoing support included</span>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="#services" 
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                            >
                                Contact
                            </a>
                            <a 
                                href="#work" 
                                className="inline-flex items-center justify-center border-2 border-slate-600 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:bg-slate-800/50"
                            >
                                See My Work
                            </a>
                        </div>

                        
                    </div>

                    {/* Right Side - Client Success Showcase */}
                    <div className="relative">
                        <div className="flex flex-col items-center space-y-8">
                            {/* Success Story Info */}
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                    <Star className="w-4 h-4 text-emerald-400" />
                                    <span className="text-emerald-400 font-medium text-sm">Client Success</span>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {successStories[currentProject].client}
                                    </h3>
                                    <p className="text-emerald-400 font-semibold text-lg">
                                        {successStories[currentProject].result}
                                    </p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                                        {successStories[currentProject].industry}
                                    </span>
                                </div>
                            </div>

                            {/* Device Mockup */}
                            <div className="relative transition-all duration-500 ease-in-out w-full">
                                <DeviceMockup story={successStories[currentProject]} />
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center space-x-6">
                                <button 
                                    onClick={prevProject}
                                    className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full text-white transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {/* Dots Indicator */}
                                <div className="flex space-x-3">
                                    {successStories.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentProject(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === currentProject 
                                                    ? 'bg-blue-400 scale-125' 
                                                    : 'bg-slate-600 hover:bg-slate-500'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button 
                                    onClick={nextProject}
                                    className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full text-white transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-500/5 rounded-full animate-pulse delay-1000"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;