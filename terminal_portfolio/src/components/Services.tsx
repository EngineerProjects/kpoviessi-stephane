import React, { useState } from 'react';
import { Package, Briefcase, ShoppingBag, Terminal, Server, Cpu, Search, Check, Download, ArrowRight, BarChart3, Eye, BrainCircuit } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import type { Service } from '../types';

const Services: React.FC = () => {
    const { data } = useLanguage();
    const [activeTab, setActiveTab] = useState<'services' | 'products'>('services');

    // Helper to get icon for services
    const getServiceIcon = (type: Service['icon']) => {
        switch (type) {
            case 'DataScience': return <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />;
            case 'AI': return <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-neon-blue" />;
            case 'ComputerVision': return <Eye className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />;
            case 'Audit': return <Search className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />;
            case 'Development': return <Cpu className="w-6 h-6 md:w-8 md:h-8 text-neon-blue" />;
            case 'Consulting': return <Server className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />;
            default: return <Terminal className="w-6 h-6 md:w-8 md:h-8 text-white" />;
        }
    };

    // Pseudo-random availability status based on service ID for UI flavor
    const getAvailability = (id: string) => {
        const hash = id.charCodeAt(id.length - 1);
        if (hash % 3 === 0) return { status: 'HIGH_DEMAND', color: 'text-orange-400', border: 'border-orange-500' };
        if (hash % 2 === 0) return { status: 'AVAILABLE', color: 'text-green-400', border: 'border-green-500' };
        return { status: 'LIMITED_SLOTS', color: 'text-yellow-400', border: 'border-yellow-500' };
    };

    return (
        <div className="w-full max-w-[1800px] mx-auto pb-12 animate-fade-in-up">

            {/* Header Area */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-neon-blue/30 pb-6 mb-8 gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-neon-blue w-8 h-8 md:w-10 md:h-10 animate-pulse" />
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-mono tracking-tight">
                            {data.ui.services.title}
                        </h2>
                    </div>
                    <div className="text-neon-blue/60 font-mono text-sm flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                            SYSTEM_READY
                        </span>
                        <span className="hidden md:inline text-neon-blue/30">|</span>
                        <span className="hidden md:inline">{data.ui.services.subtitle}</span>
                    </div>
                </div>

                {/* Futuristic Tab Switcher */}
                <div className="flex bg-black/80 border border-neon-blue/30 p-1 w-full md:w-auto relative overflow-hidden group">
                    <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none"></div>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`relative z-10 flex-1 md:flex-none px-6 py-2 md:py-3 font-mono font-bold tracking-wider text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 clip-path-slant ${activeTab === 'services' ? 'bg-neon-blue text-black shadow-[0_0_20px_rgba(144,202,249,0.4)]' : 'text-neon-blue/50 hover:text-white hover:bg-white/5'}`}
                    >
                        <Briefcase size={16} /> {data.ui.services.services_tab}
                    </button>
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`relative z-10 flex-1 md:flex-none px-6 py-2 md:py-3 font-mono font-bold tracking-wider text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 clip-path-slant ${activeTab === 'products' ? 'bg-neon-blue text-black shadow-[0_0_20px_rgba(144,202,249,0.4)]' : 'text-neon-blue/50 hover:text-white hover:bg-white/5'}`}
                    >
                        <Package size={16} /> {data.ui.services.products_tab}
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[500px]">

                {/* SERVICES GRID */}
                {activeTab === 'services' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8">
                        {data.services.map((service, index) => {
                            const availability = getAvailability(service.id);
                            // Highlight the center element (AI) on large screens if it's the second item
                            const isHighlight = index === 1;

                            return (
                                <div key={service.id} className={`bg-black/60 border ${isHighlight ? 'border-neon-blue shadow-[0_0_20px_rgba(144,202,249,0.15)]' : 'border-neon-blue/20'} hover:border-neon-blue transition-all duration-500 flex flex-col relative group overflow-hidden backdrop-blur-sm`}>

                                    {/* Holographic Header Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    {/* Service Header */}
                                    <div className="p-6 md:p-8 flex items-start justify-between border-b border-neon-blue/10 bg-gradient-to-b from-white/5 to-transparent">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 bg-black border ${isHighlight ? 'border-neon-blue' : 'border-neon-blue/30'} shadow-[0_0_15px_rgba(144,202,249,0.1)] group-hover:scale-110 transition-transform duration-300`}>
                                                {getServiceIcon(service.icon)}
                                            </div>
                                            <div>
                                                <h3 className={`text-xl md:text-2xl font-bold font-mono tracking-tight transition-colors ${isHighlight ? 'text-neon-blue' : 'text-white group-hover:text-neon-blue'}`}>
                                                    {service.title}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] bg-neon-blue/10 text-neon-blue px-1.5 py-0.5 border border-neon-blue/20 font-mono">
                                                        ID: {service.id.toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Indicator */}
                                        <div className={`hidden md:flex flex-col items-end`}>
                                            <div className={`text-[10px] font-bold font-mono border px-2 py-0.5 bg-black ${availability.color} ${availability.border}`}>
                                                {availability.status}
                                            </div>
                                            <div className="flex gap-0.5 mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className={`w-1 h-1 rounded-full ${i < 3 ? 'bg-neon-blue' : 'bg-neon-blue/20'}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Body */}
                                    <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                                        {/* Tech Specs Overlay Background */}
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(144,202,249,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(144,202,249,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                                        <div className="relative z-10">
                                            <div className="text-[10px] text-neon-blue/40 font-mono mb-2 uppercase tracking-widest">Mission Parameters</div>
                                            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed mb-6 font-mono border-l-2 border-neon-blue/20 pl-4">
                                                {service.description}
                                            </p>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-xs font-mono text-neon-blue/60 uppercase">
                                                    <Terminal size={12} /> {data.ui.services.features}
                                                </div>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {service.features.map((feat, i) => (
                                                        <div key={i} className="flex items-center gap-3 bg-neon-blue/5 border border-neon-blue/10 px-3 py-2 hover:border-neon-blue/40 transition-colors">
                                                            <Check size={14} className="text-green-400 shrink-0" />
                                                            <span className="text-xs md:text-sm text-white/90 font-mono">{feat}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Footer / Action */}
                                    <div className="p-4 bg-black/40 border-t border-neon-blue/20 flex items-center justify-between gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-neon-blue/50 font-mono">EST. COST BASIN</span>
                                            <span className="text-white font-mono font-bold text-lg">{service.priceRange}</span>
                                        </div>
                                        <a href={data.personalInfo.socials.email} className={`px-6 py-3 font-bold font-mono text-sm tracking-wider hover:bg-white transition-colors flex items-center gap-2 group/btn clip-path-slant ${isHighlight ? 'bg-neon-blue text-black' : 'bg-neon-blue/10 text-neon-blue border border-neon-blue/50'}`}>
                                            {data.ui.services.inquire} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* PRODUCTS GRID - BLUEPRINT STYLE */}
                {activeTab === 'products' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {data.products.map((product, idx) => (
                            <div key={product.id} className="bg-[#0a0f18] border border-blue-500/20 group hover:border-green-500/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">

                                {/* Blueprint Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none"></div>

                                {/* Product Visual Header */}
                                <div className="h-48 border-b border-blue-500/20 relative flex items-center justify-center overflow-hidden bg-blue-900/5 group-hover:bg-green-900/5 transition-colors">
                                    {/* Corner Markers */}
                                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-blue-400/50"></div>
                                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-blue-400/50"></div>
                                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-blue-400/50"></div>
                                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-blue-400/50"></div>

                                    {/* Animated Scanline */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-[100%] w-full animate-scan opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                        <ShoppingBag className="w-16 h-16 text-blue-400/40 group-hover:text-green-400 transition-colors" />
                                    </div>

                                    <div className="absolute top-4 right-4 bg-black/80 border border-blue-500/30 text-blue-300 px-2 py-1 font-mono text-xs font-bold backdrop-blur">
                                        VER_1.{idx}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1 relative z-10">
                                    <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
                                        {product.tags.map(tag => (
                                            <span key={tag} className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-1 border border-blue-500/20 font-mono whitespace-nowrap">
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-green-400 transition-colors truncate">
                                        {product.title}
                                    </h3>
                                    <div className="w-10 h-0.5 bg-blue-500/30 mb-4 group-hover:w-full group-hover:bg-green-500/50 transition-all duration-500"></div>

                                    <p className="text-xs text-blue-200/60 mb-6 flex-1 leading-relaxed font-mono">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex justify-between items-end mb-3 font-mono text-sm">
                                            <span className="text-blue-500/50">LICENSE_FEE</span>
                                            <span className="text-white font-bold text-lg">{product.price}</span>
                                        </div>
                                        <a href={product.link} className="w-full py-3 bg-blue-500/5 border border-blue-500/30 text-blue-400 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all font-mono font-bold text-center flex items-center justify-center gap-2 text-xs uppercase tracking-wider group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                            <Download size={14} /> {data.ui.services.acquire}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Services;
