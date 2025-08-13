import React from 'react';
import { Code, Palette, Zap, Coffee, MapPin, Heart, Lightbulb } from 'lucide-react';

const About = () => {
    const technologies = [
        "React",
        "JavaScript", 
        "HTML/CSS",
        "Tailwind CSS",
        "GitHub",
        "VS Code",
        "Vite",
        "API",
        "ArcGIS",
        "NPM"
    ];

    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A passionate developer focused on creating clean, functional web experiences.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    
                    {/* Left Side - Personal Story */}
                    <div className="space-y-6">
                        <div className="relative">
                            {/* Profile Image Placeholder */}
                            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <img 
                                    src="/me.jpeg" 
                                    alt="David Thompson - Web Developer"
                                    className="w-56 h-56 object-cover rounded-xl"
                                />
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse delay-1000"></div>
                        </div>

                        <div className="text-gray-300 space-y-4 leading-relaxed">
                            <p>
                                Hi! I'm David, a web developer who loves building things that work well 
                                and look great. I started my journey in web development because I enjoy 
                                the problem-solving aspect and seeing ideas come to life in the browser.
                            </p>
                            <p>
                                I focus on writing clean, maintainable code and creating user experiences 
                                that are both functional and enjoyable. Every project is an opportunity 
                                to learn something new and improve my craft.
                            </p>
                            <p>
                                When I'm not coding, I enjoy exploring new technologies, reading about 
                                design trends, and working on personal projects that challenge me to grow.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Skills & Technologies */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Skills & Technologies</h3>
                            <p className="text-gray-400 mb-8">The tools and languages I use to bring ideas to life</p>
                        </div>
                        
                        {/* Skills Grid */}
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {technologies.map((tech, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-800/70 hover:bg-gray-700/70 rounded-xl p-4 transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/30 hover:border-blue-500/50"
                                    >
                                        <div className="flex items-center justify-center text-center">
                                            <span className="text-gray-200 font-medium text-sm leading-tight">{tech}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* What I Believe In */}
                <div>
                    <h3 className="text-3xl font-bold text-white text-center mb-12">What I Focus On</h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="bg-gray-900 rounded-xl p-8 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4">User-First Design</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    I believe great websites should be intuitive and accessible. 
                                    Every design decision starts with the user experience.
                                </p>
                            </div>
                        </div>
                        
                        <div className="text-center group">
                            <div className="bg-gray-900 rounded-xl p-8 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Lightbulb className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4">Clean Code</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    I write code that's easy to read, maintain, and scale. 
                                    Simple solutions often work best.
                                </p>
                            </div>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gray-900 rounded-xl p-8 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Code className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4">Problem Solving</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    I enjoy breaking down complex challenges into manageable pieces 
                                    and finding creative solutions that work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;