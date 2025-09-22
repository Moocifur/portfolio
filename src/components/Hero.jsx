import React, { useState, useEffect } from 'react';
import { Award, ChevronRight, ChevronLeft, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [imageLoaded, setImageLoaded] = useState({});

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

    const handleImageLoad = (imageId) => {
        setImageLoaded(prev => ({ ...prev, [imageId]: true }));
    };

    const DeviceMockup = ({ story }) => {
        const isLoaded = imageLoaded[story.id];
        
        return (
            <div className="relative mx-auto w-full max-w-96 h-96 flex items-center justify-center px-4">
                {story.device === 'mobile' ? (
                    <div className="relative w-64 h-96 max-w-full">
                        {/* Enhanced Phone Frame with better shadows and reflections */}
                        <div className="absolute inset-0 bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl border border-slate-600 
                                      shadow-black/50 before:absolute before:inset-0 before:rounded-[2.5rem] 
                                      before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
                            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                                {/* Screen reflection overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[2rem] z-10 pointer-events-none"></div>
                                
                                {/* Skeleton loader */}
                                {!isLoaded && (
                                    <div className="absolute inset-0 bg-slate-700 animate-pulse rounded-[2rem]">
                                        <div className="flex flex-col space-y-4 p-4 pt-8">
                                            <div className="h-4 bg-slate-600 rounded w-3/4"></div>
                                            <div className="h-4 bg-slate-600 rounded w-1/2"></div>
                                            <div className="h-32 bg-slate-600 rounded"></div>
                                            <div className="space-y-2">
                                                <div className="h-3 bg-slate-600 rounded"></div>
                                                <div className="h-3 bg-slate-600 rounded w-5/6"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Screen Content */}
                                <img 
                                    src={story.image} 
                                    alt={`${story.client} website`}
                                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                                        isLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={() => handleImageLoad(story.id)}
                                />
                            </div>
                        </div>
                        {/* Bottom reflection */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-gradient-to-b from-slate-800/30 to-transparent blur-sm rounded-full"></div>
                    </div>
                ) : (
                    <div className="relative w-full max-w-[420px] h-72">
                        {/* Enhanced Laptop Frame with better shadows and reflections */}
                        <div className="absolute inset-0 bg-slate-800 rounded-t-xl shadow-2xl p-3 border border-slate-600 
                                      shadow-black/50 before:absolute before:inset-0 before:rounded-t-xl 
                                      before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
                            <div className="w-full h-60 bg-black rounded-lg overflow-hidden relative">
                                {/* Screen reflection overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 rounded-lg z-10 pointer-events-none"></div>
                                
                                {/* Skeleton loader */}
                                {!isLoaded && (
                                    <div className="absolute inset-0 bg-slate-700 animate-pulse rounded-lg">
                                        <div className="flex flex-col space-y-4 p-6">
                                            <div className="h-6 bg-slate-600 rounded w-1/2"></div>
                                            <div className="h-4 bg-slate-600 rounded w-3/4"></div>
                                            <div className="h-32 bg-slate-600 rounded"></div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-20 bg-slate-600 rounded"></div>
                                                <div className="h-20 bg-slate-600 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                <img 
                                    src={story.image} 
                                    alt={`${story.client} website`}
                                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                                        isLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={() => handleImageLoad(story.id)}
                                />
                            </div>
                            {/* Enhanced laptop base with gradient and shadow */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[calc(100%+2rem)] max-w-[28rem] h-4 
                                          bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl 
                                          shadow-lg shadow-black/30"></div>
                        </div>
                        {/* Bottom reflection */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-12 bg-gradient-to-b from-slate-800/20 to-transparent blur-md rounded-full"></div>
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

                        {/* Main Headline - Improved typography */}
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight" 
                                style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                                Frontend Developer Building Web Solutions That{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    Drive Results
                                </span>
                            </h1>
                            
                            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl" 
                               style={{ lineHeight: '1.6' }}>
                                Developing responsive websites with clean code, optimized performance, and user-focused design that delivers measurable business impact.
                            </p>
                        </div>

                        {/* Value Proposition */}
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-medium text-white" style={{ lineHeight: '1.4' }}>What You Get:</h3>
                            <div className="grid sm:grid-cols-2 gap-3 text-slate-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span style={{ lineHeight: '1.5' }}>Mobile-friendly design</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span style={{ lineHeight: '1.5' }}>Google optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span style={{ lineHeight: '1.5' }}>Contact forms that work</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span style={{ lineHeight: '1.5' }}>Ongoing support included</span>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-xl font-medium text-lg text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                                style={{ lineHeight: '1.4' }}
                            >
                                Let's Connect
                            </a>
                            <a 
                                href="#projects" 
                                className="inline-flex items-center justify-center border-2 border-slate-600 hover:border-slate-500 px-8 py-4 rounded-xl font-medium text-lg text-white transition-all duration-300 hover:bg-slate-800/50"
                                style={{ lineHeight: '1.4' }}
                            >
                                View Projects
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
                                    <h3 className="text-2xl font-medium text-white mb-1" style={{ lineHeight: '1.3' }}>
                                        {successStories[currentProject].client}
                                    </h3>
                                    <p className="text-emerald-400 font-medium text-lg" style={{ lineHeight: '1.4' }}>
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