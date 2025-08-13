import React, { useState, useEffect } from 'react';
import { Award, ChevronRight, ChevronLeft } from 'lucide-react';

const Hero = () => {
    const [currentProject, setCurrentProject] = useState(0);

    // Sample project data - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: "Orthodontics Website",
            type: "Web App",
            image: "/lane.jpeg",
            device: "laptop"
        },
        {
            id: 2,
            title: "Diesel Website",
            type: "Mobile Website",
            image: "/diesel.jpeg",
            device: "mobile"
        },
        {
            id: 3,
            title: "Barbook",
            type: "Web App",
            image: "/barbookfull.jpeg",
            device: "laptop"
        },
        {
            id: 4,
            title: "Barbook",
            type: "Mobile App",
            image: "/barbook.jpeg",
            device: "mobile"
        }
    ];

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [projects.length]);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const DeviceMockup = ({ project }) => {
        return (
            <div className="relative mx-auto w-full max-w-96 h-96 flex items-center justify-center px-4">
                {project.device === 'mobile' ? (
                    <div className="relative w-64 h-96 max-w-full">
                        {/* Phone Frame */}
                        <div className="absolute inset-0 bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10"></div>
                                {/* Screen Content */}
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="relative w-full max-w-[420px] h-72">
                        {/* Laptop Frame - Responsive width */}
                        <div className="absolute inset-0 bg-gray-800 rounded-t-xl shadow-2xl p-3">
                            <div className="w-full h-60 bg-black rounded-lg overflow-hidden relative">
                                {/* Screen Content */}
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Laptop Base - Responsive width */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[calc(100%+2rem)] max-w-[28rem] h-4 bg-gray-700 rounded-b-xl"></div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section 
            id="home" 
            className="relative py-20 overflow-x-hidden"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Text Content */}
                    <div className="px-2">
                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                            Creating <span className="text-blue-400">Solutions</span> that
                            <span className="text-blue-400"> Improve</span> Lives

                        
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-300 mb-8">
                            Every line of code I write has one goal: making someone's day better. From small business owners to everyday users, I create tools that remove friction and add value.
                        </p>

                        {/* Call to Action Button Organizer */}
                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 mb-4">

                            {/* Services Button */}
                            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors text-center sm:flex-1 text-white">
                                View Projects
                            </a>

                            {/* Shop Button */}
                            <a href="#contact" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all text-center sm:flex-1 flex items-center justify-center text-white">
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative px-2">
                        <div className="flex flex-col items-center">
                            {/* Project Info */}
                            <div className="text-center mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {projects[currentProject].title}
                                </h3>
                                <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                                    {projects[currentProject].type}
                                </span>
                            </div>

                            {/* Device Mockup */}
                            <div className="relative mb-6 transition-all duration-500 ease-in-out w-full">
                                <DeviceMockup project={projects[currentProject]} />
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={prevProject}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Dots Indicator */}
                                <div className="flex space-x-2">
                                    {projects.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentProject(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                index === currentProject 
                                                    ? 'bg-blue-400' 
                                                    : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button 
                                    onClick={nextProject}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-teal-500/10 rounded-full animate-pulse delay-1000"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero;