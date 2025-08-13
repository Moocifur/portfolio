import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, User, FileText } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    const socialLinks = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            href: "mailto:david@example.com",
            color: "hover:text-blue-400"
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            href: "https://github.com/yourusername",
            color: "hover:text-gray-300"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            href: "https://linkedin.com/in/yourprofile",
            color: "hover:text-blue-400"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind or just want to chat? I'd love to hear from you. 
                        Let's build something amazing together.
                    </p>
                </div>

                {/* Centered Layout */}
                <div className="max-w-2xl mx-auto">
                    
                    {/* Contact Form */}
                    <div className="bg-gray-800 rounded-xl p-8 mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                                <p className="text-green-400 font-medium">
                                    Thanks for your message! I'll get back to you soon.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                        placeholder="What's this about?"
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                                    placeholder="Tell me about your project or just say hello..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-white flex items-center justify-center space-x-2 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Social Icons - Centered Below Form */}
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