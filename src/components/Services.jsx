import React from 'react';
import { 
    Globe, 
    Smartphone, 
    Search, 
    Server, 
    CheckCircle, 
    Clock, 
    Star,
    ArrowRight
} from 'lucide-react';

const Services = () => {
    const serviceFeatures = [
        {
            icon: <Globe className="w-5 h-5" />,
            text: "Professional one-page design",
            color: "text-blue-400"
        },
        {
            icon: <Smartphone className="w-5 h-5" />,
            text: "Mobile-friendly on all devices",
            color: "text-green-400"
        },
        {
            icon: <Search className="w-5 h-5" />,
            text: "Basic SEO optimization",
            color: "text-purple-400"
        },
        {
            icon: <Server className="w-5 h-5" />,
            text: "Free hosting setup on Netlify",
            color: "text-cyan-400"
        }
    ];

    const additionalFeatures = [
        "Contact form integration",
        "2 rounds of revisions included",
        "Google-friendly structure",
        "Fast loading performance"
    ];

    return (
        <section id="services" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white" 
                        style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                        My Service
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto" 
                       style={{ lineHeight: '1.6' }}>
                        I specialize in creating professional websites that help your business grow online.
                    </p>
                </div>

                {/* Service Card */}
                <div className="max-w-xl mx-auto">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                        
                        {/* Header with Icon */}
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-medium text-white mb-3" 
                                style={{ letterSpacing: '-0.025em', lineHeight: '1.2' }}>
                                Professional Website
                            </h3>
                            <p className="text-gray-400 text-lg" style={{ lineHeight: '1.6' }}>
                                Complete one-page website that gets results
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
                        <div className="border-t border-gray-700 pt-8">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center space-x-3 text-gray-400">
                                    <Clock className="w-5 h-5" />
                                    <span style={{ lineHeight: '1.4' }}>2-3 weeks delivery</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold text-white" 
                                         style={{ lineHeight: '1.2' }}>
                                        $500
                                    </div>
                                    <div className="text-sm text-gray-400" style={{ lineHeight: '1.4' }}>
                                        $250 to begin
                                    </div>
                                </div>
                            </div>
                            
                            {/* Quality Badge */}
                            <div className="flex items-center justify-center space-x-2 mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <Star className="w-4 h-4 text-blue-400" />
                                <span className="text-blue-400 font-medium text-sm" style={{ lineHeight: '1.4' }}>
                                    Professional Quality Guaranteed
                                </span>
                            </div>
                            
                            {/* CTA Button */}
                            <a 
                                href="#contact"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-medium text-lg text-white transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 group/btn"
                                style={{ lineHeight: '1.4' }}
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6 text-lg" style={{ lineHeight: '1.6' }}>
                        Ready to take your business online?
                    </p>
                    <a 
                        href="#contact"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        style={{ lineHeight: '1.4' }}
                    >
                        <span>Let's discuss your project</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;