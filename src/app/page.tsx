"use client";

import { motion } from "framer-motion";
import { Link, Zap, Send, Cloud, Github, BrainCircuit, Activity, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

// Professional Geometric Scarab SVG Component
const ScarabLogo = () => (
  <motion.svg
    width="120"
    height="120"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-10 drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <path
      d="M50 15 L65 30 L75 25 L70 45 L85 55 L70 65 L75 80 L65 75 L50 85 L35 75 L25 80 L30 65 L15 55 L30 45 L25 25 L35 30 Z"
      stroke="#00F3FF"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M50 15 L50 85 M35 30 L65 30 M30 45 L70 45 M30 65 L70 65"
      stroke="#00F3FF"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
    <circle cx="50" cy="50" r="12" fill="none" stroke="#00F3FF" strokeWidth="2" />
    <circle cx="50" cy="50" r="4" fill="#00F3FF" />
  </motion.svg>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col relative bg-[#121212] text-[#ededed] overflow-x-hidden font-sans">
      {/* Refined Startup Background (Soft Grid, No CRT) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 10%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 10%, transparent 100%)"
        }}
      />
      
      {/* Navigation / Header */}
      <nav className="relative z-20 flex justify-between items-center p-6 md:px-12 max-w-7xl w-full mx-auto border-b border-white/5">
        <div className="font-bold text-xl tracking-wide flex items-center gap-2">
          <Activity className="w-5 h-5 text-[#00F3FF]" />
          VIBE BEETLE
        </div>
        <div className="text-sm font-medium text-white/50 hover:text-white transition-colors cursor-pointer">
          Documentation
        </div>
      </nav>

      <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
        
        {/* HERO SECTION */}
        <section className="pt-20 pb-24 flex flex-col items-center text-center">
          <ScarabLogo />
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 max-w-5xl leading-tight"
          >
            AUTONOMOUS WEB EMPIRES. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              COMMAND YOUR CONTENT.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/60 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
          >
            The AI-Powered Headless OS for Portfolio Owners. Control, update, edit any site, generate high-intent blogs, build out new apps, and sync repositories—all from a single Discord command.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="px-10 py-5 bg-[#00F3FF] text-[#121212] hover:bg-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center gap-3">
              LAUNCH THE BEETLE
              <Send className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-white/5 text-white hover:bg-white/10 font-bold text-lg rounded-full transition-all duration-300 border border-white/10">
              View Architecture
            </button>
          </motion.div>
        </section>

        {/* ACTIVE DEPLOYMENT BENTO CARD */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F3FF]/0 via-[#39ff14]/50 to-[#00F3FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-5 h-5 text-[#39ff14]" />
                  <h2 className="text-xl font-bold tracking-wide">Active Deployment Log</h2>
                </div>
                <p className="text-white/50 text-sm">Real-time monitoring of Beetle orchestration.</p>
              </div>
              <div className="flex items-center gap-2 bg-[#39ff14]/10 border border-[#39ff14]/20 px-4 py-2 rounded-full">
                <div className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse"></div>
                <span className="text-[#39ff14] font-bold text-sm tracking-widest uppercase">System Live</span>
              </div>
            </div>

            <div className="bg-black/40 rounded-2xl p-6 font-mono text-sm md:text-base border border-white/5 relative">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-white/30 whitespace-nowrap">[14:23:42]</span>
                  <span className="text-white/70">Executing prompt via Discord webhook...</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-white/30 whitespace-nowrap">[14:23:45]</span>
                  <span className="text-white/70">Generating markdown artifact and structural assets.</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-white/30 whitespace-nowrap">[14:23:48]</span>
                  <div className="text-white">
                    <span className="text-[#00F3FF] font-bold">Latest Push:</span> 500-word blog to <a href="https://www.google.com/search?q=Parks-Tourism.com" className="underline decoration-white/30 hover:text-[#00F3FF] transition-colors">Parks-Tourism.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-2 border-t border-white/10 mt-2">
                  <span className="text-white/30 whitespace-nowrap">[14:23:50]</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70">Status:</span>
                    <span className="text-[#39ff14] font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* HOW IT WORKS (The Details) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Pipeline.</h2>
            <p className="text-white/50 text-lg">Three steps to autonomous content orchestration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "CONNECT", icon: Link, desc: "Link your GitHub repositories and Discord server in seconds. Establish secure Webhook pipelines." },
              { num: "02", title: "COMMAND", icon: BrainCircuit, desc: "Send a prompt via /beetle. Watch the AI architect your content, generating SEO-optimized text and images." },
              { num: "03", title: "DEPLOY", icon: Zap, desc: "The Scarab pushes optimized markdown and code updates directly to your live sites. Instant global edge availability." }
            ].map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-[#00F3FF] font-bold text-5xl opacity-20 mb-6">{step.num}</div>
                <step.icon className="w-10 h-10 text-white mb-6" />
                <h3 className="text-2xl font-bold tracking-wide mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECH STACK SHOWCASE */}
        <section className="mb-12">
          <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-12">Industrial-Grade Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#00F3FF]/10 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-[#00F3FF]" />
                </div>
                <h4 className="font-bold text-lg">Google Cloud Run</h4>
                <p className="text-sm text-white/50">Serverless, scalable hosting with zero downtime deployments.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg">GitHub API</h4>
                <p className="text-sm text-white/50">Robust version control and automated repository syncing.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#39ff14]/10 flex items-center justify-center">
                  <BrainCircuit className="w-8 h-8 text-[#39ff14]" />
                </div>
                <h4 className="font-bold text-lg">Gemini 3 Flash</h4>
                <p className="text-sm text-white/50">Lightning-fast LLM orchestration acting as the central brain.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer System Health Bar */}
      <footer className="w-full border-t border-white/10 bg-[#121212] py-6 px-6 z-20 flex justify-between items-center relative mt-auto">
        <div className="font-mono text-xs text-white/40 font-bold tracking-widest uppercase">
          Vibe-Beetle OS
        </div>
        <div className="flex items-center gap-3 font-mono text-sm font-bold bg-[#39ff14]/10 px-5 py-2 rounded-full border border-[#39ff14]/20">
          <div className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse"></div>
          <span className="text-[#39ff14] uppercase">Beetle-12: ONLINE</span>
        </div>
      </footer>
    </div>
  );
}
