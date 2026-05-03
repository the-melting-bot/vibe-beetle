"use client";

import { motion } from "framer-motion";
import { Check, Send, Smartphone, Terminal, Zap, Bot, User, CheckCircle2, ShieldCheck, Cpu, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-[#00F3FF] selection:text-black overflow-x-hidden relative">
      
      {/* BACKGROUND VIDEO & CINEMATIC OVERLAYS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        >
          <source src="http://googleusercontent.com/generated_video_content/917126358977414873" type="video/mp4" />
        </video>
        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] opacity-90" />
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.15%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 w-full h-[30vh] bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* HEADER */}
      <header className="relative z-20 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-3 font-medium tracking-widest text-sm uppercase">
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M50 15 L65 30 L75 25 L70 45 L85 55 L70 65 L75 80 L65 75 L50 85 L35 75 L25 80 L30 65 L15 55 L30 45 L25 25 L35 30 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="4" />
          </svg>
          VIBE BEETLE
        </div>
        <button className="text-xs tracking-widest uppercase border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
          Sign In
        </button>
      </header>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center max-w-5xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[0.9] mb-8">
              Command Your <br/>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Empire.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-3xl font-light tracking-wide"
          >
            One Command. One Site. Infinite Content. Leverage your existing $20/mo AI subscriptions to build, manage, and deploy from your phone.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="relative group overflow-hidden bg-[#00F3FF] text-[#050505] px-10 py-5 rounded-full font-bold text-lg uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,243,255,0.2)] hover:shadow-[0_0_60px_rgba(0,243,255,0.4)] flex items-center gap-3">
              <span className="relative z-10">Launch The Beetle</span>
              <Send className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </motion.div>
        </section>

        {/* MOBILE-FIRST DEMO */}
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-16 mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 max-w-xl text-left"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase mb-6 leading-tight">
              No Laptop. <br/>
              <span className="font-semibold">Pure Execution.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 font-light">
              We built Vibe Beetle for the operator on the move. Orchestrate Google Cloud deployments, GitHub commits, and AI generation entirely through a Discord message.
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-sm text-[#00F3FF] font-medium tracking-wide uppercase"><Smartphone className="w-4 h-4"/> Mobile Native</div>
              <div className="flex items-center gap-2 text-sm text-[#00F3FF] font-medium tracking-wide uppercase"><Terminal className="w-4 h-4"/> Headless OS</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full max-w-sm"
          >
            {/* Phone Mockup */}
            <div className="w-full rounded-[2.5rem] border-[8px] border-[#1A1A1A] bg-[#36393f] overflow-hidden shadow-2xl relative aspect-[9/19]">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#1A1A1A] rounded-b-3xl w-40 mx-auto z-20"></div>
              
              {/* Discord UI */}
              <div className="h-full w-full flex flex-col pt-8">
                <div className="bg-[#2f3136] px-4 py-3 border-b border-[#202225] flex items-center justify-center shadow-sm">
                  <span className="font-bold text-white text-sm tracking-wide flex items-center gap-1"><span className="text-white/40">#</span> deployments</span>
                </div>
                
                <div className="flex-1 p-4 flex flex-col gap-5 overflow-y-auto font-sans">
                  
                  {/* User Prompt */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 shrink-0 mt-0.5"></div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-white text-sm">You</span>
                        <span className="text-[10px] text-white/40">11:42 AM</span>
                      </div>
                      <div className="text-[#dcddde] text-sm mt-1 leading-snug">
                        <span className="bg-[#41464D] text-[#e3e5e8] px-1 rounded text-xs font-mono mr-1">/beetle</span>
                        <span className="text-[#00F3FF] bg-[#00F3FF]/10 px-1 rounded text-xs mr-1">prompt:</span> Update my portfolio with a new project about GIS development.
                      </div>
                    </div>
                  </div>

                  {/* Beetle Response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#00F3FF]/10 border border-[#00F3FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-[#00F3FF]" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-[#00F3FF] text-sm">Vibe Beetle</span>
                        <span className="bg-[#5865F2] text-white text-[9px] px-1 rounded font-bold uppercase tracking-wider">Bot</span>
                      </div>
                      <div className="bg-[#2f3136] border-l-2 border-[#00ff00] p-3 rounded mt-1.5 shadow-sm">
                        <div className="flex items-center gap-1.5 font-bold text-[#00ff00] mb-1.5 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          [SUCCESS] DEPLOYED
                        </div>
                        <p className="text-[#dcddde] text-xs leading-relaxed mb-2 opacity-80">
                          Content generated. GitHub updated.
                        </p>
                        <a href="#" className="text-[#00b0f4] hover:underline text-xs font-medium flex items-center gap-1">
                          <Globe className="w-3 h-3" /> vibebeetle.com/blog/gis
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input Bar */}
                <div className="p-3 bg-[#36393f]">
                  <div className="bg-[#40444b] rounded-full h-10 w-full px-4 flex items-center text-white/30 text-sm">
                    Message #deployments
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* THE $10 UNIFIED TIER */}
        <section className="w-full flex flex-col items-center mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tighter uppercase mb-4">Unified Access.</h2>
            <p className="text-white/50 text-lg font-light">Industrial-grade orchestration for a flat monthly rate.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F3FF]/50 to-transparent"></div>
            
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-8">
              <div>
                <h3 className="text-2xl font-semibold tracking-wide uppercase mb-2">The Scarab</h3>
                <p className="text-white/40 text-sm">Everything you need. Nothing you don't.</p>
              </div>
              <div className="text-right">
                <span className="text-5xl font-light tracking-tighter">$10</span>
                <span className="text-white/40 text-sm block mt-1 uppercase tracking-widest">/ Month</span>
              </div>
            </div>

            <ul className="flex flex-col gap-5">
              {[
                { icon: ShieldCheck, title: "BYOK (Bring Your Own Key)", desc: "Works with your existing Gemini, Claude, or OpenAI API keys." },
                { icon: Smartphone, title: "Mobile Command", desc: "Full Discord slash-command integration." },
                { icon: Zap, title: "Automated Pipeline", desc: "The Beetle handles the GitHub pushes and Cloud Run deployments." },
                { icon: Cpu, title: "Content Orchestration", desc: "Generate high-intent blogs, SEO copy, and updates in seconds." },
                { icon: Terminal, title: "Headless Power", desc: "Manage your site's codebase without ever opening a laptop." }
              ].map((feature, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#00F3FF]/30 transition-colors">
                    <feature.icon className="w-3 h-3 text-[#00F3FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/90 text-sm tracking-wide">{feature.title}</h4>
                    <p className="text-white/50 text-sm mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="w-full mt-10 bg-white hover:bg-[#00F3FF] text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors">
              Initialize Plan
            </button>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/5 bg-[#050505] py-12 text-center text-white/30 text-xs font-mono uppercase tracking-widest z-20 relative mix-blend-difference">
        <p>Vibe Beetle OS // 2026 // Autonomous Web Empires</p>
      </footer>
    </div>
  );
}
