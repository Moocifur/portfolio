import React, { useState } from 'react';
import { ExternalLink, Github, Monitor, Globe, Code, Database, Check } from 'lucide-react';

const Projects = () => {
    const [imageLoaded, setImageLoaded] = useState({});

    const handleImageLoad = (projectId) => {
        setImageLoaded(prev => ({ ...prev, [projectId]: true }));
    };

    const projects = [
        {
            id: 1,
            title: "Lane Orthodontics",
            description: "Production Next.js website for a two-location orthodontics practice. Features location-based routing with unique theming per office, integrated JotForm booking system, and SEO optimization for local search.",
            image: "/lane.jpeg",
            category: "client",
            clientType: "Production Client Site",
            technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "JotForm API"],
            technicalFeatures: ["Location-Based Routing", "Third-Party API Integration", "SEO Optimization", "Responsive Design"],
            highlights: ["Dual-location theming system", "Integrated booking flow", "Deployed and maintained in production", "Client communication & project management"],
            liveUrl: "https://laneorthodontics.com/",
            githubUrl: "https://github.com/Moocifur/lane-orthodontics",
            icon: <Monitor className="w-6 h-6" />,
        },
        {
            id: 2,
            title: "Diesel Injection Service",
            description: "React business website built with component-based architecture, Tailwind CSS for styling, and Vite for fast builds. Focused on clear information hierarchy and easy customer contact.",
            image: "/diesel-long.png", 
            category: "client",
            clientType: "Production Client Site",
            technologies: ["React", "Vite", "Tailwind CSS", "Lucide React"],
            technicalFeatures: ["Component Architecture", "Responsive Layout", "Icon System", "Performance Optimization"],
            highlights: ["Clean component structure", "Mobile-first responsive design", "Fast load times with Vite", "Client requirements gathering"],
            liveUrl: "https://dieselinjectionservice.com/",
            githubUrl: "https://github.com/Moocifur/diesel-injection-service",
            icon: <Code className="w-6 h-6" />,
        },
        {
            id: 3,
            title: "David's Barbook",
            description: "Interactive cocktail recipe database built with vanilla JavaScript and Webpack. Features local storage for saving favorites, real-time search filtering, and modular ES6+ architecture.",
            image: "/barbookfull.jpeg",
            category: "personal",
            clientType: "Personal Project",
            technologies: ["JavaScript ES6+", "HTML5", "CSS3", "Webpack"],
            technicalFeatures: ["Local Storage API", "Search & Filter Algorithm", "Module Bundling", "Responsive Design"],
            highlights: ["Built from scratch with no frameworks", "Custom search implementation", "Persistent data with localStorage", "Webpack build pipeline"],
            liveUrl: "https://moocifur.github.io/barbook/",
            githubUrl: "https://github.com/Moocifur/barbook",
            icon: <Database className="w-6 h-6" />,
        },
        {
            id: 4,
            title: "React Shopping Cart",
            description: "Full-featured e-commerce UI demonstrating React Router for client-side navigation, custom hooks for cart state management, and API integration with the Fake Store API.",
            image: "/shopping.png",
            category: "personal",
            clientType: "Learning Project",
            technologies: ["React", "React Router", "Custom Hooks", "Fake Store API"],
            technicalFeatures: ["Client-Side Routing", "State Management", "REST API Integration", "Custom Hooks"],
            highlights: ["Complete shopping cart logic", "React Router implementation", "Custom useCart hook", "API data fetching patterns"],
            liveUrl: "https://daves-shopping-cart.netlify.app/", 
            githubUrl: "https://github.com/Moocifur/react-shopping-cart", 
            icon: <Globe className="w-6 h-6" />,
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white" 
                        style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                        Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto" 
                       style={{ lineHeight: '1.6' }}>
                        A mix of production client sites and personal projects — each built to solve real problems 
                        and deepen my understanding of modern web development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const isLoaded = imageLoaded[project.id];
                        
                        return (
                            <div key={project.id} className="bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden">
                                
                                {/* Project Image with Skeleton Loader */}
                                <div className="relative overflow-hidden h-48">
                                    {!isLoaded && (
                                        <div className="absolute inset-0 bg-zinc-700 animate-pulse">
                                            <div className="flex items-center justify-center h-full">
                                                <div className="w-16 h-16 bg-zinc-600 rounded-lg"></div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {project.liveUrl ? (
                                        <a 
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block cursor-pointer"
                                        >
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ${
                                                    isLoaded ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                onLoad={() => handleImageLoad(project.id)}
                                            />
                                        </a>
                                    ) : (
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ${
                                                isLoaded ? 'opacity-100' : 'opacity-0'
                                            }`}
                                            onLoad={() => handleImageLoad(project.id)}
                                        />
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    
                                    {/* Project Type Badge */}
                                    <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                                        project.category === 'client' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-slate-600 text-slate-200'
                                    }`}>
                                        {project.clientType}
                                    </div>

                                    {/* Title & Icon */}
                                    <div className="flex items-center mb-3">
                                        <div className="text-blue-400 mr-3">
                                            {project.icon}
                                        </div>
                                        <h3 className="text-xl font-medium text-white" 
                                            style={{ lineHeight: '1.3' }}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-4 text-sm" 
                                       style={{ lineHeight: '1.6' }}>
                                        {project.description}
                                    </p>

                                    {/* Technical Features */}
                                    <div className="mb-4 p-3 bg-gray-700 rounded-lg">
                                        <h4 className="text-blue-400 text-xs font-medium mb-2 uppercase tracking-wide" 
                                            style={{ letterSpacing: '0.05em' }}>
                                            Technical Highlights
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technicalFeatures.map((feature, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                                                    style={{ lineHeight: '1.3' }}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3 mb-4">
                                        {project.liveUrl && (
                                            <a 
                                                href={project.liveUrl}
                                                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Site
                                            </a>
                                        )}
                                        <a 
                                            href={project.githubUrl}
                                            className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Source Code
                                        </a>
                                    </div>

                                    {/* Key Highlights */}
                                    <div className="mb-4">
                                        <h4 className="text-green-400 text-xs font-medium mb-2 uppercase tracking-wide" 
                                            style={{ letterSpacing: '0.05em' }}>
                                            Key Highlights
                                        </h4>
                                        <div className="space-y-2">
                                            {project.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                    <span className="text-sm text-gray-300" 
                                                          style={{ lineHeight: '1.5' }}>
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technology Stack */}
                                    <div className="border-t border-gray-600 pt-3">
                                        <h5 className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">
                                            Built With
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs"
                                                    style={{ lineHeight: '1.3' }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6 text-lg" style={{ lineHeight: '1.6' }}>
                        Want to see more or discuss my approach to these projects?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#contact"
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-medium text-lg transition-all text-white hover:scale-105"
                        >
                            Get In Touch
                        </a>
                        <a 
                            href="https://github.com/Moocifur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center border-2 border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-medium text-lg text-white transition-all hover:bg-gray-800/50"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            GitHub Profile
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
