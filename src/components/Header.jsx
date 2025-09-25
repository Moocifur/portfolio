import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, Github } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to close the mobile menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
        {/* MAIN NAV - Sticky */}
        <header className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Left Container */}
                    <a href="#top" className="flex items-center space-x-3 hover:opacity-80 transition-opacity focus-ring rounded-lg">
                        
                        {/* Logo IMG*/}
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img 
                                src="/logo.png" 
                                alt="Logo" 
                                className="w-12 h-12 object-contain"
                            />
                        </div>

                        {/* Logo Text */}
                        <div>
                            <h1 className="text-2xl font-medium" style={{ lineHeight: '1.2' }}>David Tran</h1>
                            <p className="text-sm text-gray-400" style={{ lineHeight: '1.4' }}>Web Developer</p>
                        </div>
                    </a>

                    {/* Desktop Navigation | Right Container*/}
                    <nav className="hidden md:flex items-center space-x-8">

                        <a href="#home" className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" style={{ lineHeight: '1.4' }}>Home</a>
                        {/* <a href="#services" className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" style={{ lineHeight: '1.4' }}>Services</a> */}
                        <a href="#projects" className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" style={{ lineHeight: '1.4' }}>Projects</a>
                        <a href="#about" className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" style={{ lineHeight: '1.4' }}>About</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" style={{ lineHeight: '1.4' }}>Contact</a>

                        {/* Availability Indicator */}
                        {/* <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-600">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-300 text-sm font-medium" style={{ lineHeight: '1.4' }}>Available</span>
                        </div> */}

                        {/* Social Links */}
                        <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
                            <a href="mailto:davidkttran@gmail.com" 
                               className="text-gray-400 hover:text-blue-400 transition-colors focus-ring rounded p-1"
                               aria-label="Send email">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/david-tran-904086292" 
                               className="text-gray-400 hover:text-blue-400 transition-colors focus-ring rounded p-1"
                               aria-label="LinkedIn profile"
                               target="_blank"
                               rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/Moocifur" 
                               className="text-gray-400 hover:text-blue-400 transition-colors focus-ring rounded p-1"
                               aria-label="GitHub profile"
                               target="_blank"
                               rel="noopener noreferrer">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>

                    </nav>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden focus-ring rounded p-2"
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                </div>

                {/* Hamburger Links */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-4">
                            <a href="#home" onClick={closeMenu} 
                               className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" 
                               style={{ lineHeight: '1.4' }}>Home</a>
                            {/* <a href="#services" onClick={closeMenu} 
                               className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" 
                               style={{ lineHeight: '1.4' }}>Services</a> */}
                            <a href="#projects" onClick={closeMenu} 
                               className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" 
                               style={{ lineHeight: '1.4' }}>Projects</a>
                            <a href="#about" onClick={closeMenu} 
                               className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" 
                               style={{ lineHeight: '1.4' }}>About</a>
                            <a href="#contact" onClick={closeMenu} 
                               className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1" 
                               style={{ lineHeight: '1.4' }}>Contact</a>
                            
                            {/* Availability - Mobile */}
                            {/* <div className="flex items-center space-x-2 pt-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-gray-300 text-sm font-medium" style={{ lineHeight: '1.4' }}>
                                    Currently Available for Opportunities
                                </span>
                            </div> */}
                            
                            {/* Social Links - Mobile */}
                            <div className="flex items-center space-x-6 pt-4 border-t border-gray-700">
                                <a href="mailto:davidkttran@gmail.com" 
                                   className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                                   style={{ lineHeight: '1.4' }}>
                                    <Mail className="w-5 h-5" />
                                    <span className="text-sm">Email</span>
                                </a>
                                <a href="https://linkedin.com/in/david-tran-904086292" 
                                   className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   style={{ lineHeight: '1.4' }}>
                                    <Linkedin className="w-5 h-5" />
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a href="https://github.com/Moocifur" 
                                   className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   style={{ lineHeight: '1.4' }}>
                                    <Github className="w-5 h-5" />
                                    <span className="text-sm">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
        </>
    )
}

export default Header;