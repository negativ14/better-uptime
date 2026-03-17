'use client'

import Container from "../sections/container";
import { motion } from "motion/react";
import { ArrowRight, Activity, Zap, Database, Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24">
            {/* Background: large radial gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.06),transparent_60%)] pointer-events-none" />

            <Container className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 md:py-28 lg:py-32">
                    {/* LEFT — Text content, LEFT ALIGNED */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Badge */}
                        <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/6">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-60" />
                                <span className="relative rounded-full h-1.5 w-1.5 bg-sky-400" />
                            </span>
                            <span className="text-[11px] font-semibold text-sky-300 tracking-wider uppercase">
                                All systems operational
                            </span>
                        </div>

                        {/* Headline — left-aligned, NOT centered */}
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[-0.03em] leading-[1.08]">
                            <span className="text-white">Your infrastructure</span>
                            <br />
                            <span className="text-white">deserves a </span>
                            <span className="bg-linear-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                                guardian.
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
                            Real-time monitoring, centralized logging, and instant alerts — 
                            the observability stack your team actually enjoys using.
                        </p>

                        {/* CTA row */}
                        <div className="flex items-center gap-4 mt-2">
                            <a
                                href="/account"
                                className="group px-7 py-3 text-sm font-bold rounded-full bg-linear-to-r from-sky-500 to-cyan-400 text-white shadow-[0_0_40px_-8px_rgba(14,165,233,0.5)] hover:shadow-[0_0_50px_-8px_rgba(14,165,233,0.7)] transition-all duration-300 flex items-center gap-2"
                            >
                                Start free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#features" className="px-7 py-3 text-sm font-semibold rounded-full text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200">
                                See features
                            </a>
                        </div>

                        {/* Stats — horizontal, left-aligned */}
                        <div className="flex items-center gap-8 mt-4 pt-6 border-t border-slate-800/60">
                            {[
                                { value: "99.99%", label: "Uptime SLA" },
                                { value: "<30s", label: "Alert speed" },
                                { value: "10M+", label: "Events/day" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col gap-0.5">
                                    <span className="text-lg font-display font-bold text-white">{stat.value}</span>
                                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Large dashboard preview card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:absolute lg:right-[-5%] xl:right-[-10%] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[110%] xl:w-[120%] max-w-[850px] z-10 mt-8 lg:mt-0 pointer-events-auto hidden md:block"
                        style={{ perspective: "1200px" }}
                    >
                        <motion.div 
                            className="relative rounded-xl border border-slate-800/60 bg-[#070b14] shadow-[0_0_80px_-20px_rgba(14,165,233,0.12)] overflow-hidden"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "rotateY(-16deg) rotateX(8deg) rotateZ(-2deg) scale(0.95)",
                            }}
                        >
                            {/* Dashboard header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/50 bg-[#070b14]">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-2.5">
                                        <div className="w-3 h-3 rounded-full bg-slate-700/60" />
                                        <div className="w-3 h-3 rounded-full bg-slate-700/60" />
                                        <div className="w-3 h-3 rounded-full bg-slate-700/60" />
                                    </div>
                                    <span className="text-sm text-slate-500 font-mono ml-4 tracking-wide font-medium">dashboard.betteruptime.io</span>
                                </div>
                                <div className="flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1">
                                    <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_0_rgba(56,189,248,0.8)] animate-pulse" />
                                    <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">Live</span>
                                </div>
                            </div>

                            {/* Dashboard body with mini cards */}
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Top metric row */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                                    {[
                                        { icon: Activity, label: "Uptime", value: "99.98%", color: "sky" },
                                        { icon: Zap, label: "Avg Latency", value: "42ms", color: "amber" },
                                        { icon: Database, label: "Log Events", value: "2.4M", color: "violet" },
                                    ].map((metric, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className="rounded-2xl border border-slate-800/40 bg-[#0a0f1d] p-5 lg:p-6 flex flex-col gap-3"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <metric.icon className={`w-4 h-4 ${metric.color === 'sky' ? 'text-sky-400' : metric.color === 'amber' ? 'text-amber-400' : 'text-violet-400'}`} />
                                                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">{metric.label}</span>
                                            </div>
                                            <span className="text-3xl font-display font-bold text-white tracking-tight">{metric.value}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Chart area */}
                                <div className="rounded-2xl border border-slate-800/40 bg-[#0a0f1d] p-6 lg:p-8 relative overflow-hidden">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Response Time (24h)</span>
                                        <span className="text-xs text-sky-400 font-bold flex items-center gap-1.5">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /></svg>
                                            -12% avg
                                        </span>
                                    </div>
                                    <div className="relative w-full h-32 md:h-40">
                                        {/* Chart horizontal grid lines */}
                                        <div className="absolute inset-0 z-0 flex flex-col justify-between pointer-events-none opacity-20">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-full border-t border-slate-700" />
                                            ))}
                                        </div>
                                        <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 300 80" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="chartGradHero" x1="0" x2="0" y1="0" y2="1">
                                                    <stop offset="0%" stopColor="rgba(14,165,233,0.35)" />
                                                    <stop offset="100%" stopColor="rgba(14,165,233,0.02)" />
                                                </linearGradient>
                                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                                </filter>
                                            </defs>
                                            <motion.path
                                                d="M0,60 C30,55 50,75 80,60 C110,45 130,55 160,45 C190,35 210,65 240,40 C270,15 285,25 300,10"
                                                fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round"
                                                filter="url(#glow)"
                                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
                                            />
                                            <motion.path
                                                d="M0,60 C30,55 50,75 80,60 C110,45 130,55 160,45 C190,35 210,65 240,40 C270,15 285,25 300,10 L300,80 L0,80 Z"
                                                fill="url(#chartGradHero)"
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Mini log feed */}
                                <div className="rounded-2xl border border-slate-800/40 bg-[#060810] p-6 lg:p-7 font-mono text-[11px] sm:text-xs space-y-4 overflow-hidden shadow-inner">
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <span className="text-slate-500 font-bold font-sans text-[11px] tracking-widest uppercase">❯_ Log Stream</span>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { time: "21:42:01", level: "INFO", color: "text-sky-400", msg: "GET /api/health 200 3ms" },
                                            { time: "21:42:03", level: "WARN", color: "text-amber-400", msg: "Rate limit 80% customer_8921" },
                                            { time: "21:42:05", level: "INFO", color: "text-sky-400", msg: "POST /webhooks/stripe 201 12ms" },
                                        ].map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.2 + i * 0.15 }}
                                                className="flex items-start gap-4 text-slate-400 group"
                                            >
                                                <span className="text-slate-500 shrink-0 font-medium group-hover:text-slate-400 transition-colors w-16">{log.time}</span>
                                                <span className={`font-bold tracking-widest shrink-0 w-12 ${log.color}`}>[{log.level}]</span>
                                                <span className="text-slate-300 truncate">{log.msg}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}