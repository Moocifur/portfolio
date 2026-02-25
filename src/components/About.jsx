import React, { useState } from 'react';
import { Heart, Lightbulb, Code } from 'lucide-react';
import { 
    FaReact, 
    FaJs, 
    FaHtml5, 
    FaCss3Alt, 
    FaGithub,
    FaNodeJs
} from 'react-icons/fa';
import { 
    SiTailwindcss, 
    SiVite, 
    SiFramer,
    SiReactrouter,
    SiNextdotjs,
    SiExpress,
    SiPostgresql,
    SiTypescript
} from 'react-icons/si';

const About = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const frontendSkills = [
        { name: "React", icon: <FaReact className="w-5 h-5" />, color: "text-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" />, color: "text-white" },
        { name: "JavaScript ES6+", icon: <FaJs className="w-5 h-5" />, color: "text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" />, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" />, color: "text-cyan-400" },
        { name: "HTML5 / CSS3", icon: <FaHtml5 className="w-5 h-5" />, color: "text-orange-400" },
        { name: "React Router", icon: <SiReactrouter className="w-5 h-5" />, color: "text-red-400" },
        { name: "Framer Motion", icon: <SiFramer className="w-5 h-5" />, color: "text-pink-400" },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" />, color: "text-green-400" },
        { name: "Express.js", icon: <SiExpress className="w-5 h-5" />, color: "text-gray-300" },
        { name: "PostgreSQL / SQL", icon: <SiPostgresql className="w-5 h-5" />, color: "text-blue-300" },
    ];

    const toolsSkills = [
        { name: "Git / GitHub", icon: <FaGithub className="w-5 h-5" />, color: "text-gray-400" },
        { name: "Vite", icon: <SiVite className="w-5 h-5" />, color: "text-purple-400" },
    ];

    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white" 
                        style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                        About Me
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto" 
                       style={{ lineHeight: '1.6' }}>
                        A developer who brings both technical skills and strong communication 
                        from 15+ years in hospitality.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    
                    {/* Left Side — Personal Story */}
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 relative overflow-hidden">
                                {!imageLoaded && (
                                    <div className="absolute inset-0 bg-slate-700 animate-pulse rounded-2xl"></div>
                                )}
                                <img 
                                    src="/me.jpeg" 
                                    alt="David Tran - Web Developer"
                                    className={`w-56 h-56 object-cover rounded-xl transition-opacity duration-300 ${
                                        imageLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </div>
                            
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse delay-1000"></div>
                        </div>

                        <div className="text-gray-300 space-y-4" style={{ lineHeight: '1.7' }}>
                            <p>
                                I'm David — a full-stack web developer making a career change after 15+ years 
                                in hospitality and bartending. I taught myself to code through{' '}
                                <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" 
                                   className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                                    The Odin Project
                                </a>, 
                                logging over 1,000 hours of hands-on study covering everything from HTML/CSS 
                                fundamentals through React, Node.js, and databases.
                            </p>
                            <p>
                                My hospitality background gave me strong communication skills, the ability to 
                                work under pressure, and a natural focus on user experience — skills that 
                                translate directly to collaborating on development teams and understanding 
                                what end users actually need.
                            </p>
                            <p>
                                I've already shipped multiple production websites for real clients, managing 
                                the full process from requirements gathering through deployment. I'm looking 
                                for a team where I can contribute, grow, and keep building great things.
                            </p>
                        </div>
                    </div>

                    {/* Right Side — Skills & Technologies */}
                    <div className="space-y-8">
                        
                        {/* Frontend Skills */}
                        <div>
                            <h3 className="text-2xl font-medium text-white mb-2" 
                                style={{ letterSpacing: '-0.025em', lineHeight: '1.3' }}>
                                Technical Skills
                            </h3>
                            <p className="text-gray-400 mb-6" style={{ lineHeight: '1.6' }}>
                                Full-stack technologies I use to build modern web applications
                            </p>
                        </div>

                        {/* Frontend */}
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h4 className="text-sm font-medium text-blue-400 uppercase tracking-wide mb-4" style={{ letterSpacing: '0.05em' }}>
                                Frontend
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {frontendSkills.map((tech, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-800/70 hover:bg-gray-700/70 rounded-xl p-3 transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/30 hover:border-blue-500/50 group"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                                {tech.icon}
                                            </div>
                                            <span className="text-gray-200 font-normal text-sm leading-tight">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h4 className="text-sm font-medium text-green-400 uppercase tracking-wide mb-4" style={{ letterSpacing: '0.05em' }}>
                                Backend
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {backendSkills.map((tech, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-800/70 hover:bg-gray-700/70 rounded-xl p-3 transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/30 hover:border-green-500/50 group"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                                {tech.icon}
                                            </div>
                                            <span className="text-gray-200 font-normal text-sm leading-tight">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                            <h4 className="text-sm font-medium text-purple-400 uppercase tracking-wide mb-4" style={{ letterSpacing: '0.05em' }}>
                                Tools & Workflow
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {toolsSkills.map((tech, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-800/70 hover:bg-gray-700/70 rounded-xl p-3 transition-all duration-300 hover:scale-105 cursor-default border border-gray-600/30 hover:border-purple-500/50 group"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                                {tech.icon}
                                            </div>
                                            <span className="text-gray-200 font-normal text-sm leading-tight">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Currently Learning */}
                        <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700/30">
                            <h4 className="text-lg font-medium text-white mb-3" style={{ lineHeight: '1.3' }}>
                                Currently Deepening
                            </h4>
                            <p className="text-gray-400 text-sm mb-3" style={{ lineHeight: '1.5' }}>
                                Actively building with these through The Odin Project's full-stack curriculum
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm border border-green-500/30">
                                    Express.js Patterns
                                </span>
                                <span className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30">
                                    Database Design
                                </span>
                                <span className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                                    Authentication & Security
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Development Philosophy */}
                <div>
                    <h3 className="text-3xl font-medium text-white text-center mb-12" 
                        style={{ letterSpacing: '-0.025em', lineHeight: '1.2' }}>
                        What I Bring to a Team
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="bg-gray-900 rounded-xl p-8 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-medium text-white mb-4" style={{ lineHeight: '1.3' }}>
                                    User-First Thinking
                                </h4>
                                <p className="text-gray-400" style={{ lineHeight: '1.7' }}>
                                    Years of face-to-face customer service taught me to think about 
                                    what people actually need. I bring that same empathy to building 
                                    interfaces that are intuitive and accessible.
                                </p>
                            </div>
                        </div>
                        
                        <div className="text-center group">
                            <div className="bg-gray-900 rounded-xl p-8 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Lightbulb className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-medium text-white mb-4" style={{ lineHeight: '1.3' }}>
                                    Clean, Readable Code
                                </h4>
                                <p className="text-gray-400" style={{ lineHeight: '1.7' }}>
                                    I write code with future maintainers in mind. Clear naming, 
                                    consistent patterns, and well-structured components make 
                                    collaboration easier and bugs less likely.
                                </p>
                            </div>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gray-900 rounded-xl p-8 h-full hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Code className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-medium text-white mb-4" style={{ lineHeight: '1.3' }}>
                                    Growth Mindset
                                </h4>
                                <p className="text-gray-400" style={{ lineHeight: '1.7' }}>
                                    Teaching myself to code from scratch required discipline and 
                                    persistence. I'm comfortable being a beginner, asking good questions, 
                                    and ramping up quickly on new tools and codebases.
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
