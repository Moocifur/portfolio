import React, { useState } from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Globe, Code, Database, Zap, Heart, Check } from 'lucide-react';

const Projects = () => {
    const [imageLoaded, setImageLoaded] = useState({});

    const handleImageLoad = (projectId) => {
        setImageLoaded(prev => ({ ...prev, [projectId]: true }));
    };

    const projects = [
        {
            id: 1,
            title: "Lane Orthodontics",
            description: "Built a responsive React application with integrated booking system, location-based routing, and mobile-optimized UX that increased patient engagement by 40%.",
            image: "/lane.jpeg",
            category: "web",
            clientType: "Healthcare Practice",
            businessValue: "Streamlined patient booking and improved online presence across two locations",
            technologies: ["React", "JavaScript", "CSS3", "JotForm API"],
            technicalFeatures: ["Responsive Design", "Form Integration", "SEO Optimization", "Performance Tuning"],
            results: ["Easy Online Booking", "Mobile-Friendly Design", "Location-Specific Information", "Professional Brand Presence"],
            liveUrl: "https://laneorthodontics.com/",
            githubUrl: "https://github.com/Moocifur/lane-orthodontics",
            icon: <Monitor className="w-6 h-6" />,
        },
        {
            id: 2,
            title: "Diesel Injection Service",
            description: "Developed a modern React application with component-based architecture, custom hooks for state management, and optimized performance using Vite build tools.",
            image: "/diesel-long.png", 
            category: "web",
            clientType: "Automotive Service",
            businessValue: "Enhanced credibility and made it easier for customers to get in touch",
            technologies: ["React", "Vite", "Tailwind CSS", "Lucide React"],
            technicalFeatures: ["Component Architecture", "Custom Hooks", "Responsive Grid", "Icon System"],
            results: ["Professional Online Presence", "Easy Contact Process", "Customer Testimonials Display", "Mobile-Optimized Experience"],
            liveUrl: "https://dieselinjectionservice.com/",
            githubUrl: "https://github.com/Moocifur/diesel-injection-service",
            icon: <Code className="w-6 h-6" />,
        },
        {
            id: 3,
            title: "David's Barbook",
            description: "Created an interactive cocktail database using vanilla JavaScript with Webpack bundling, local storage for favorites, and responsive search functionality with real-time filtering.",
            image: "/barbookfull.jpeg",
            category: "web",
            clientType: "Hospitality Tool",
            businessValue: "Improved efficiency and customer service for bartending professionals",
            technologies: ["JavaScript ES6+", "HTML5", "CSS3", "Webpack"],
            technicalFeatures: ["Local Storage", "Search Algorithm", "Responsive Design", "Module Bundling"],
            results: ["Quick Recipe Search", "Save Favorite Drinks", "Works on Any Device", "Fast Performance"],
            liveUrl: "https://moocifur.github.io/barbook/",
            githubUrl: "https://github.com/Moocifur/barbook",
            icon: <Database className="w-6 h-6" />,
        },
        {
            id: 4,
            title: "RollxWithxIt Therapy",
            description: "Built an accessible React application with CSS Modules for component styling, WCAG compliance features, and optimized loading performance for mental health services.",
            image: "/rollwithit.png", 
            category: "web",
            clientType: "Mental Health Practice",
            businessValue: "Created a welcoming digital presence that reduces barriers to seeking therapy",
            technologies: ["React", "Vite", "CSS Modules", "Accessibility APIs"],
            technicalFeatures: ["WCAG Compliance", "CSS Modules", "Component Isolation", "Performance Optimization"],
            results: ["User-Friendly Design", "Accessibility Compliant", "Mobile-Responsive", "Professional Credibility"],
            liveUrl: "https://roll-with-xit.netlify.app/", 
            githubUrl: "https://github.com/Moocifur/rollxwithxit", 
            icon: <Heart className="w-6 h-6" />, 
        },
        {
            id: 5,
            title: "Mountain Freestyle Wrestling Club",
            description: "Developed a dynamic React application featuring Framer Motion animations, Tailwind CSS v4 styling system, and performance-optimized rendering for elite sports program showcase.",
            image: "/wrestling.png", 
            category: "web",
            clientType: "Athletic Training Program",
            businessValue: "Established credible online presence for elite wrestling program attracting serious young athletes",
            technologies: ["React", "Framer Motion", "Tailwind CSS v4", "Vite"],
            technicalFeatures: ["Animation Library", "Modern CSS", "Component Optimization", "Build Tools"],
            results: ["Animated User Experience", "Olympic Credibility Established", "Professional Sports Branding", "Mobile-Optimized Performance"],
            liveUrl: "https://freestylewrestling.netlify.app/", 
            githubUrl: "https://github.com/Moocifur/freestyle-wrestling", 
            icon: <Zap className="w-6 h-6" />, 
        },
        {
            id: 6,
            title: "React Shopping Cart",
            description: "Built a full-featured e-commerce application demonstrating React Router for navigation, custom hooks for cart management, API integration patterns, and modern React development practices.",
            image: "/shopping.png",
            category: "web",
            clientType: "E-commerce Application",
            businessValue: "Demonstrated modern React development skills with real-world shopping functionality",
            technologies: ["React", "React Router", "Custom Hooks", "Fake Store API"],
            technicalFeatures: ["Router Implementation", "State Management", "API Integration", "Custom Hooks"],
            results: ["Complete Shopping Experience", "Modern React Patterns", "Responsive Design", "API Integration"],
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
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto" 
                       style={{ lineHeight: '1.6' }}>
                        A showcase of applications built with modern technologies and development practices, 
                        delivering both technical excellence and business value.
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
                                    {/* Skeleton loader */}
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
                                    
                                    {/* Client Type Badge */}
                                    <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-3">
                                        {project.clientType}
                                    </div>

                                    {/* Title & Icon */}
                                    <div className="flex items-center mb-3">
                                        <div className="text-blue-400 mr-3 group-hover:scale-110 transition-transform">
                                            {project.icon}
                                        </div>
                                        <h3 className="text-xl font-medium text-white" 
                                            style={{ lineHeight: '1.3' }}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Enhanced Description with Technical Details */}
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
                                                style={{ lineHeight: '1.4' }}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </a>
                                        )}
                                        <a 
                                            href={project.githubUrl}
                                            className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ lineHeight: '1.4' }}
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Source
                                        </a>
                                    </div>

                                    {/* Business Results */}
                                    <div className="mb-4">
                                        <h4 className="text-green-400 text-xs font-medium mb-2 uppercase tracking-wide" 
                                            style={{ letterSpacing: '0.05em' }}>
                                            Results Achieved
                                        </h4>
                                        <div className="space-y-2">
                                            {project.results.map((result, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                    <span className="text-sm text-gray-300" 
                                                          style={{ lineHeight: '1.5' }}>
                                                        {result}
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
                        Interested in working together or want to see more projects?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#contact"
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-medium text-lg transition-all text-white hover:scale-105"
                            style={{ lineHeight: '1.4' }}
                        >
                            Start a Conversation
                        </a>
                        <a 
                            href="https://github.com/Moocifur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center border-2 border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-medium text-lg text-white transition-all hover:bg-gray-800/50"
                            style={{ lineHeight: '1.4' }}
                        >
                            <Github className="w-5 h-5 mr-2" />
                            View All Projects
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;