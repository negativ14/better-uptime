'use client'

import Container from "./container";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Activity, Zap, Command } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative w-full overflow-hidden pb-20 pt-10">
            <Container>
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch w-full">
                    {/* LEFT CARD — Bold, Primary Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 rounded-[32px] overflow-hidden relative min-h-[400px] flex flex-col justify-end p-8 md:p-12"
                    >
                        {/* Dynamic Background */}
                        <div className="absolute inset-0 bg-linear-to-br from-sky-600 via-sky-500 to-cyan-500" />
                        
                        {/* Decorative floating elements */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-900/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

                        {/* Top Branding/Logo Area */}
                        {/* <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white shadow-xl flex items-center justify-center">
                                <Activity className="w-5 h-5 text-sky-600" />
                            </div>
                            <span className="font-display font-bold text-2xl text-white tracking-tight">BetterUptime</span>
                        </div> */}

                        {/* Content */}
                        <div className="relative z-10 w-full">
                            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-[-0.02em] leading-[1.1] max-w-[400px] mb-8">
                                Smarter infrastructure monitoring, powered by AI.
                            </h2>
                            <div className="flex items-center justify-between mt-auto">
                                <a
                                    href="/account"
                                    className="group px-7 py-3.5 text-sm font-bold rounded-full bg-white text-sky-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                                >
                                    Start for free
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                
                                <span className="font-handwriting text-2xl md:text-3xl text-white/90 -rotate-6">
                                    Ship faster!
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT CARD — Secondary Content / Subscribe */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="w-full md:w-[45%] lg:w-[40%] rounded-[32px] bg-slate-100 dark:bg-[#0c101a] border border-slate-200 dark:border-slate-800/60 p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[400px]"
                    >
                         {/* Decorative shape */}
                         <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl rotate-12 shadow-2xl flex items-center justify-center opacity-90 hover:rotate-6 hover:scale-105 transition-all duration-500 cursor-pointer">
                             <Command className="w-12 h-12 text-white" />
                         </div>
                         

                        <div className="relative z-10 mt-auto">
                            <div className="mb-6">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                    <span className="text-slate-500 dark:text-slate-400 block mb-1 font-medium text-lg">Incidents move fast.</span>
                                    Stay ahead with early alerts.
                                </h3>
                            </div>

                            <form className="relative flex items-center">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full bg-white dark:bg-[#13192b] border border-slate-200 dark:border-slate-700/50 rounded-full py-3.5 pl-6 pr-32 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all shadow-sm"
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center shadow-md"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-6 text-center md:text-left">
                                © 2026 BetterUptime. Built for builders.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}