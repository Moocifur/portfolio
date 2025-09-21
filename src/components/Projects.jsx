import React from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Globe, Code, Database, Zap, Heart } from 'lucide-react';

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Lane Orthodontics",
            description: "Built a professional website that makes it easy for patients to find information and book appointments at both office locations.",
            image: "/lane.jpeg",
            category: "web",
            clientType: "Healthcare Practice",
            businessValue: "Streamlined patient booking and improved online presence across two locations",
            technologies: ["HTML", "CSS", "JavaScript", "JotForm"],
            results: ["Easy Online Booking", "Mobile-Friendly Design", "Location-Specific Information", "Professional Brand Presence"],
            liveUrl: "https://laneorthodontics.com/",
            githubUrl: "https://github.com/Moocifur/lane-orthodontics",
            icon: <Monitor className="w-6 h-6" />,
        },
        {
            id: 2,
            title: "Diesel Injection Service",
            description: "Created a modern website that helps customers easily find services, read testimonials, and contact the business.",
            image: "/diesel-long.png", 
            category: "web",
            clientType: "Automotive Service",
            businessValue: "Enhanced credibility and made it easier for customers to get in touch",
            technologies: ["React", "Vite", "Tailwind", "Lucide React"],
            results: ["Professional Online Presence", "Easy Contact Process", "Customer Testimonials Display", "Mobile-Optimized Experience"],
            liveUrl: "https://dieselinjectionservice.com/",
            githubUrl: "https://github.com/Moocifur/diesel-injection-service",
            icon: <Code className="w-6 h-6" />,
        },
        {
            id: 3,
            title: "David's Barbook",
            description: "Developed an interactive cocktail database that helps bartenders and enthusiasts quickly find and save their favorite recipes.",
            image: "/barbookfull.jpeg",
            category: "web",
            clientType: "Hospitality Tool",
            businessValue: "Improved efficiency and customer service for bartending professionals",
            technologies: ["Javascript", "HTML", "CSS", "Webpack"],
            results: ["Quick Recipe Search", "Save Favorite Drinks", "Works on Any Device", "Fast Performance"],
            liveUrl: "https://moocifur.github.io/barbook/",
            githubUrl: "https://github.com/Moocifur/barbook",
            icon: <Database className="w-6 h-6" />,
        },
        {
            id: 4,
            title: "RollxWithxIt Therapy",
            description: "Built a calming, accessible therapy website that makes mental health services approachable for men and clients seeking a relaxed therapeutic experience.",
            image: "/rollwithit.png", 
            category: "web",
            clientType: "Mental Health Practice",
            businessValue: "Created a welcoming digital presence that reduces barriers to seeking therapy",
            technologies: ["React", "Vite", "CSS Modules", "Lucide React", "Accessibility"],
            results: ["User-Friendly Design", "Accessibility Compliant", "Mobile-Responsive", "Professional Credibility"],
            liveUrl: "https://roll-with-xit.netlify.app//", 
            githubUrl: "https://github.com/Moocifur/rollxwithxit", 
            icon: <Heart className="w-6 h-6" />, 
        },
        {
            id: 5,
            title: "Mountain Freestyle Wrestling Club",
            description: "Created a dynamic website for an elite youth wrestling program that showcases Olympic-level training methodology and North Caucasus wrestling heritage.",
            image: "/wrestling.png", 
            category: "web",
            clientType: "Athletic Training Program",
            businessValue: "Established credible online presence for elite wrestling program attracting serious young athletes",
            technologies: ["React", "Vite", "Tailwind CSS v4", "Framer Motion", "Lucide React"],
            results: ["Animated User Experience", "Olympic Credibility Established", "Professional Sports Branding", "Mobile-Optimized Performance"],
            liveUrl: "https://freestylewrestling.netlify.app/", 
            githubUrl: "https://github.com/Moocifur/freestyle-wrestling", 
            icon: <Zap className="w-6 h-6" />, 
        },
        {
            id: 6,
            title: "React Shopping Cart App",
            description: "Built a fully functional e-commerce shopping cart application with product browsing, cart management, and responsive design using modern React patterns.",
            image: "/shopping.png",
            category: "web",
            clientType: "E-commerce Application",
            businessValue: "Demonstrated modern React development skills with real-world shopping functionality",
            technologies: ["React", "React Router", "Vite", "CSS Modules", "Fake Store API"],
            results: ["Complete Shopping Experience", "Custom React Hooks", "Responsive Design", "API Integration"],
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Recent Work
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Real businesses achieving real results. See how I've helped companies improve their online presence and grow their customer base.
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
                                
                                {/* Client Type Badge */}
                                <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-3">
                                    {project.clientType}
                                </div>

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

                                {/* Business Value */}
                                <div className="mb-4 p-3 bg-gray-700 rounded-lg">
                                    <h4 className="text-green-400 text-xs font-semibold mb-1 uppercase tracking-wide">Impact</h4>
                                    <p className="text-gray-200 text-sm">{project.businessValue}</p>
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
                                            View Live
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

                                {/* Results */}
                                <div className="mb-4">
                                    <h4 className="text-white text-sm font-semibold mb-2">Key Results</h4>
                                    <div className="space-y-2">
                                        {project.results.map((result, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                <span className="text-sm text-gray-300">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies (smaller, less prominent) */}
                                <div className="border-t border-gray-600 pt-3">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6 text-lg">
                        Ready to grow your business online?
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