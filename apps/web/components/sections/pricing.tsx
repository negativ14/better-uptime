'use client'

import Container from "./container";
import { motion } from "motion/react";
import { Check, Star } from "lucide-react";

export type PricingPlan = {
    name: string;
    description: string;
    price: number | string;
    priceLabel: string;
    buttonText: string;
    highlighted: boolean;
    features: string[];
};

const PLANS: PricingPlan[] = [
    {
        name: "Starter",
        description: "Side projects & small services",
        price: 0,
        priceLabel: "Forever free",
        buttonText: "Start for free",
        highlighted: false,
        features: [
            "Up to 5 monitors",
            "5-minute intervals",
            "Email alerts",
            "7-day log retention",
            "Community support",
        ],
    },
    {
        name: "Pro",
        description: "Growing teams that need reliability",
        price: 29,
        priceLabel: "per month, billed yearly",
        buttonText: "Start free trial",
        highlighted: true,
        features: [
            "Unlimited monitors",
            "30-second intervals",
            "Multi-channel alerts",
            "90-day log retention",
            "Priority support",
            "Status pages",
            "API access",
            "Custom integrations",
        ],
    },
    {
        name: "Enterprise",
        description: "Mission-critical infrastructure",
        price: 149,
        priceLabel: "per month, custom billing",
        buttonText: "Contact sales",
        highlighted: false,
        features: [
            "Everything in Pro",
            "10-second intervals",
            "Dedicated account manager",
            "Unlimited log retention",
            "24/7 phone support",
            "SSO & SAML",
            "Custom SLAs",
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative">
            <Container className="py-20 md:py-28 lg:py-36 relative">
                <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-[11px] font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Pricing</span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-white">
                            Start free, scale when ready.
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
                    {PLANS.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-4xl p-8 lg:p-10 flex flex-col transition-all duration-500
                                ${plan.highlighted
                                    ? 'border border-sky-500/50 bg-[#0a0f1d] shadow-[0_0_80px_-20px_rgba(14,165,233,0.15)] ring-1 ring-sky-500/20'
                                    : 'border border-slate-800/60 bg-[#070b14] hover:bg-[#0a0f1d] hover:border-slate-700/80'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#00d8ff] text-[10px] font-extrabold uppercase tracking-widest rounded-full text-slate-900 flex items-center gap-1.5 shadow-[0_0_20px_0_rgba(0,216,255,0.4)]">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    Most Popular
                                </div>
                            )}

                            <div>
                                <h3 className="font-display font-bold text-xl text-white tracking-tight">{plan.name}</h3>
                                <p className="text-[13px] text-slate-500 mt-2">{plan.description}</p>
                            </div>

                            <div className="mt-8 mb-2">
                                <span className={`text-5xl font-display font-bold tracking-tighter ${plan.highlighted ? 'text-[#00d8ff]' : 'text-white'}`}>
                                    ${plan.price}
                                </span>
                            </div>
                            <p className="text-[12px] text-slate-600 mb-10">{plan.priceLabel}</p>

                            <a
                                href="/account"
                                className={`w-full py-3.5 text-sm font-bold rounded-xl text-center transition-all duration-300 block mb-12
                                    ${plan.highlighted
                                        ? 'bg-[#00d8ff] text-slate-900 shadow-[0_0_30px_-5px_rgba(0,216,255,0.5)] hover:shadow-[0_0_40px_-5px_rgba(0,216,255,0.7)] hover:bg-[#33e0ff]'
                                        : 'bg-slate-800/40 text-white border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
                                    }`}
                            >
                                {plan.buttonText}
                            </a>

                            <ul className="flex flex-col gap-3.5">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-start gap-3 text-[14px] text-slate-400 font-medium">
                                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? 'text-[#00d8ff]' : 'text-slate-600'}`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}