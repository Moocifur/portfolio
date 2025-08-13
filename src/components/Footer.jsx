import React from 'react';
import { Mail, Linkedin, Github, Heart, ArrowUp, Code, MapPin } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            href: "mailto:david@example.com",
            color: "hover:text-blue-400"
        },
        {
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
            href: "https://github.com/yourusername",
            color: "hover:text-gray-300"
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
            href: "https://linkedin.com/in/yourprofile",
            color: "hover:text-blue-400"
        }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-700">
            <div className="container mx-auto px-4">
                
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img 
                                        src="/logo.png" 
                                        alt="Logo" 
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">David Tran</h3>
                                    <p className="text-sm text-gray-400">Web Developer</p>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                                Passionate about creating clean, functional web experiences that make a difference. 
                                Always learning, always building.
                            </p>
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span>Redlands, CA</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect Section */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
                            <div className="space-y-3 mb-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-colors duration-200 text-sm`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                        <span>{social.label}</span>
                                    </a>
                                ))}
                            </div>
                            
                            {/* Back to Top Button */}
                            <button
                                onClick={scrollToTop}
                                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                            >
                                <ArrowUp className="w-4 h-4" />
                                <span>Back to Top</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        
                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <span>© {currentYear} David Tran. Made with</span>
                            <Heart className="w-4 h-4 text-red-400" />
                            <span>and</span>
                            <Code className="w-4 h-4 text-blue-400" />
                        </div>

                        {/* Tech Stack */}
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span>React</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                <span>Tailwind CSS</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>Vercel</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;