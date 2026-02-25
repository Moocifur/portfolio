import React from 'react';
import { Mail, Send, Github, Linkedin, User, FileText, Briefcase } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            href: "mailto:davidkttran@gmail.com",
            color: "hover:text-blue-400"
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            href: "https://github.com/Moocifur",
            color: "hover:text-gray-300"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            href: "https://linkedin.com/in/david-tran-904086292",
            color: "hover:text-blue-400"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        I'm actively looking for full-time and contract web development roles. 
                        Whether you have an opening, want to chat about a project, or just want to say hello — I'd love to hear from you.
                    </p>
                </div>

                {/* Centered Layout */}
                <div className="max-w-2xl mx-auto">

                    {/* What I'm Looking For */}
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase className="w-5 h-5 text-green-400" />
                            <h3 className="text-lg font-medium text-white">What I'm Looking For</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <span>Junior / Mid-Level Developer Roles</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <span>Full-Time or Contract Positions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <span>Remote or Southern California</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <span>Frontend or Full-Stack Focus</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-gray-800 rounded-xl p-8 mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        
                        <div className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                        placeholder="Enter your name"
                                        form="contact-form"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                        placeholder="your@email.com"
                                        form="contact-form"
                                    />
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                        placeholder="Job opportunity, question, etc."
                                        form="contact-form"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                                    placeholder="Tell me about the role or project..."
                                    form="contact-form"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                form="contact-form"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-white flex items-center justify-center space-x-2 hover:scale-105"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </div>

                        {/* Hidden form for Formspree */}
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <form 
                                id="contact-form"
                                action="https://formspree.io/f/xpwrgvyq" 
                                method="POST"
                            >
                                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                            </form>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="text-center">
                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={`p-4 bg-gray-800 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 group`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
