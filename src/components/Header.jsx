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
                    <a href="#top" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                        
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
                            <h1 className="text-2xl font-bold">David Tran</h1>
                            <p className="text-sm text-gray-400">Web Developer</p>
                        </div>
                    </a>

                    {/* Desktop Navigation | Right Container*/}
                    <nav className="hidden md:flex space-x-8">

                        <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
                            <a href="mailto:davidkttran@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/david-tran-904086292" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/Moocifur" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>

                    </nav>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                </div>

                {/* Hamburger Links */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-4">
                            <a href="#home" onClick={closeMenu} className="hover:text-blue-400 transition-colors">Home</a>
                            <a href="#projects" onClick={closeMenu} className="hover:text-blue-400 transition-colors">Projects</a>
                            <a href="#about" onClick={closeMenu} className="hover:text-blue-400 transition-colors">About</a>
                            <a href="#contact" onClick={closeMenu} className="hover:text-blue-400 transition-colors">Contact</a>
                            
                            {/* Social Links - Mobile */}
                            <div className="flex items-center space-x-6 pt-4 border-t border-gray-700">
                                <a href="mailto:davidkttran@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                                    <Mail className="w-5 h-5" />
                                    <span className="text-sm">Email</span>
                                </a>
                                <a href="https://linkedin.com/in/david-tran-904086292" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a href="https://github.com/Moocifur" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
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