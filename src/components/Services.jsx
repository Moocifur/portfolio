import React from 'react';
import { 
    Globe, 
    Smartphone, 
    Search, 
    Server, 
    CheckCircle, 
    Clock, 
    Star,
    ArrowRight,
    Users,
    Code
} from 'lucide-react';

const Services = () => {
    const serviceFeatures = [
        {
            icon: <Globe className="w-5 h-5" />,
            text: "Responsive React applications",
            color: "text-blue-400"
        },
        {
            icon: <Smartphone className="w-5 h-5" />,
            text: "Mobile-optimized performance",
            color: "text-green-400"
        },
        {
            icon: <Search className="w-5 h-5" />,
            text: "SEO-friendly architecture",
            color: "text-purple-400"
        },
        {
            icon: <Server className="w-5 h-5" />,
            text: "Modern deployment & hosting",
            color: "text-cyan-400"
        }
    ];

    const additionalFeatures = [
        "Clean, maintainable codebase",
        "Cross-browser compatibility",
        "Performance optimization",
        "Responsive design patterns"
    ];

    return (
        <section id="services" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white" 
                        style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                        How I Can Help
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto" 
                       style={{ lineHeight: '1.6' }}>
                        Whether you're a business looking for a web presence or a team needing frontend expertise.
                    </p>
                </div>

                {/* Two-column layout for different audiences */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    
                    {/* Freelance Services */}
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                        
                        {/* Header with Icon */}
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-3" 
                                style={{ letterSpacing: '-0.025em', lineHeight: '1.2' }}>
                                Website Development
                            </h3>
                            <p className="text-gray-400 text-base" style={{ lineHeight: '1.6' }}>
                                Professional websites for businesses
                            </p>
                        </div>

                        {/* Main Features */}
                        <div className="space-y-4 mb-8">
                            {serviceFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-4 group/feature">
                                    <div className={`${feature.color} group-hover/feature:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <span className="text-gray-300" style={{ lineHeight: '1.5' }}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Additional Features */}
                        <div className="bg-gray-800 rounded-xl p-6 mb-8">
                            <h4 className="text-white font-medium mb-4" style={{ lineHeight: '1.3' }}>
                                Also Included:
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                {additionalFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span className="text-gray-300 text-sm" style={{ lineHeight: '1.5' }}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing & Timeline */}
                        <div className="border-t border-gray-700 pt-6">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center space-x-3 text-gray-400">
                                    <Clock className="w-5 h-5" />
                                    <span style={{ lineHeight: '1.4' }}>2-3 weeks delivery</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-white" 
                                         style={{ lineHeight: '1.2' }}>
                                        $500
                                    </div>
                                    <div className="text-sm text-gray-400" style={{ lineHeight: '1.4' }}>
                                        $250 to begin
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <a 
                                href="#contact"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-xl font-medium text-white transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 group/btn"
                                style={{ lineHeight: '1.4' }}
                            >
                                <span>Start Project</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Employment/Collaboration Services */}
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                        
                        {/* Header with Icon */}
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-3" 
                                style={{ letterSpacing: '-0.025em', lineHeight: '1.2' }}>
                                Team Collaboration
                            </h3>
                            <p className="text-gray-400 text-base" style={{ lineHeight: '1.6' }}>
                                Frontend development for teams & companies
                            </p>
                        </div>

                        {/* Employment Features */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-4 group/feature">
                                <div className="text-emerald-400 group-hover/feature:scale-110 transition-transform">
                                    <Code className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300" style={{ lineHeight: '1.5' }}>
                                    React component development
                                </span>
                            </div>
                            <div className="flex items-center space-x-4 group/feature">
                                <div className="text-teal-400 group-hover/feature:scale-110 transition-transform">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300" style={{ lineHeight: '1.5' }}>
                                    Agile team collaboration
                                </span>
                            </div>
                            <div className="flex items-center space-x-4 group/feature">
                                <div className="text-emerald-400 group-hover/feature:scale-110 transition-transform">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300" style={{ lineHeight: '1.5' }}>
                                    Code review & best practices
                                </span>
                            </div>
                            <div className="flex items-center space-x-4 group/feature">
                                <div className="text-teal-400 group-hover/feature:scale-110 transition-transform">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300" style={{ lineHeight: '1.5' }}>
                                    Modern development workflow
                                </span>
                            </div>
                        </div>

                        {/* Work Style */}
                        <div className="bg-gray-800 rounded-xl p-6 mb-8">
                            <h4 className="text-white font-medium mb-4" style={{ lineHeight: '1.3' }}>
                                What I Bring:
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm" style={{ lineHeight: '1.5' }}>
                                        Strong communication skills
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm" style={{ lineHeight: '1.5' }}>
                                        Collaborative mindset
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm" style={{ lineHeight: '1.5' }}>
                                        Problem-solving approach
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm" style={{ lineHeight: '1.5' }}>
                                        Continuous learning mindset
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="border-t border-gray-700 pt-6">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span className="text-emerald-400 font-medium text-sm">Currently Available</span>
                                </div>
                                <p className="text-gray-400 text-sm" style={{ lineHeight: '1.5' }}>
                                    Open to full-time, contract, and collaborative opportunities
                                </p>
                            </div>
                            
                            {/* CTA Button */}
                            <a 
                                href="#contact"
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-6 py-3 rounded-xl font-medium text-white transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-2 group/btn"
                                style={{ lineHeight: '1.4' }}
                            >
                                <span>Let's Connect</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-6 text-lg" style={{ lineHeight: '1.6' }}>
                        Looking for something specific? Let's discuss how I can help.
                    </p>
                    <a 
                        href="#contact"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        style={{ lineHeight: '1.4' }}
                    >
                        <span>Get in touch</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;