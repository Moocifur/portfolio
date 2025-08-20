import React from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Globe, Code, Database, Zap } from 'lucide-react';

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Orthodontics Website",
            description: "Professional orthodontic practice website with dual-location theming, mobile navigation, and integrated booking system.",
            image: "/lane.jpeg",
            category: "web",
            technologies: ["HTML", "CSS", "JavaScript", "JotForm"],
            features: ["Location-Based Theming", "Mobile-First Navigation", "Interactive Image Carousel", "Integrated Booking Forms"],
            liveUrl: "https://laneorthodontics.com/",
            githubUrl: "https://github.com/Moocifur/lane-orthodontics",
            icon: <Monitor className="w-6 h-6" />,
        },
        {
            id: 2,
            title: "Diesel Injection Service Website",
            description: "Modern React business website for a diesel injection service company with responsive design, interactive components, and professional UI.",
            image: "/diesel-long.png", 
            category: "web",
            technologies: ["React", "Vite", "Tailwind", "Lucide React"],
            features: ["Responsive Mobile Design", "Contact Form with Validation", "Interactive Testimonials", "Google Maps Integration"],
            liveUrl: "https://dieselinjectionservice.com/",
            githubUrl: "https://github.com/Moocifur/diesel-injection-service",
            icon: <Code className="w-6 h-6" />,
        },
        {
            id: 3,
            title: "David's Barbook",
            description: "Interactive cocktail recipe database with advanced search functionality, favorites system, and responsive design. Built with vanilla JavaScript and modern web development practices.",
            image: "/barbookfull.jpeg",
            category: "web",
            technologies: ["Javascript", "HTML", "CSS", "Webpack"],
            features: ["Advanced Search & Filtering", "Favorites Management System", "Responsive Card-Based UI", "Local Storage Persistence"],
            liveUrl: "https://moocifur.github.io/barbook/",
            githubUrl: "https://github.com/Moocifur/barbook",
            icon: <Database className="w-6 h-6" />,
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A collection of projects that showcase my skills in development, 
                        from concept to deployment.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:bg-zinc-700 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                            
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
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
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </a>
                                ) : (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                
                                {/* Title & Icon */}
                                <div className="flex items-center mb-3">
                                    <div className="text-blue-400 mr-3 group-hover:scale-110 transition-transform">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

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
                                            Live Demo
                                        </a>
                                    )}
                                    <a 
                                        href={project.githubUrl}
                                        className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </a>
                                </div>

                                {/* Technologies */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 bg-gray-700 text-blue-300 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">
                        Interested in working together?
                    </p>
                    <a 
                        href="#contact"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-white"
                    >
                        Get In Touch
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;