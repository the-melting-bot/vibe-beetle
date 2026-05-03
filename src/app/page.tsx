"use client";

import { motion } from "framer-motion";
import { Check, Send, Smartphone, Terminal, Zap, Bot, User, Globe, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#FFFFFF] font-sans selection:bg-[#8FA88C] selection:text-[#0E0E0E] overflow-x-hidden relative flex flex-col">
      
      {/* BACKGROUND VIDEO & CINEMATIC OVERLAYS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
        >
          <source src="http://googleusercontent.com/generated_video_content/917126358977414873" type="video/mp4" />
        </video>
        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0E0E0E_100%)] opacity-95" />
      </div>

      {/* HEADER (Grid-style borders) */}
      <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center border-b border-[#2A2A2A] mix-blend-difference">
        <div className="flex items-center gap-3 font-semibold tracking-widest text-sm uppercase">
          VIBE BEETLE
        </div>
        <nav className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-[#A1A1A1]">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#stories" className="hover:text-white transition-colors">Stories</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <button className="text-[11px] font-semibold tracking-widest uppercase bg-[#8FA88C] text-[#0E0E0E] px-6 py-2.5 rounded-sm hover:bg-[#A3BEA0] transition-colors">
          Launch App
        </button>
      </header>

      <main className="relative z-10 w-full flex flex-col flex-1">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 pb-20 border-b border-[#2A2A2A]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-6xl w-full"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              COMMAND YOUR <br/>
              <span className="font-serif italic font-normal text-[#8FA88C] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Empire</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-lg md:text-xl text-[#A1A1A1] leading-relaxed mb-12 max-w-2xl font-light tracking-wide"
          >
            One Command. One Site. Infinite Content. Leverage your existing $20/mo AI subscriptions to build, manage, and deploy from your phone.
          </motion.p>
        </section>

        {/* HOW IT WORKS / DEMO */}
        <section id="how-it-works" className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-[#2A2A2A]">
          {/* Left Side: Content */}
          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-[#2A2A2A] flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#8FA88C] font-serif italic text-6xl mb-8 block" style={{ fontFamily: 'var(--font-playfair)' }}>01</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                No Laptop. <br/>
                <span className="font-serif italic font-normal text-[#8FA88C] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Pure Execution.</span>
              </h2>
              <p className="text-[#A1A1A1] text-lg leading-relaxed mb-8 font-light">
                We built Vibe Beetle for the operator on the move. Orchestrate Google Cloud deployments, GitHub commits, and AI generation entirely through a Discord message.
              </p>
              <div className="flex gap-8">
                <div className="flex items-center gap-3 text-xs text-[#FFFFFF] font-bold tracking-widest uppercase"><Smartphone className="w-4 h-4 text-[#8FA88C]"/> Mobile Native</div>
                <div className="flex items-center gap-3 text-xs text-[#FFFFFF] font-bold tracking-widest uppercase"><Terminal className="w-4 h-4 text-[#8FA88C]"/> Headless OS</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="p-12 md:p-24 flex items-center justify-center bg-[#131313]">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full max-w-sm"
            >
              <div className="w-full rounded-[2.5rem] border-[6px] border-[#2A2A2A] bg-[#1E1F22] overflow-hidden shadow-2xl relative aspect-[9/19]">
                <div className="absolute top-0 inset-x-0 h-6 bg-[#2A2A2A] rounded-b-3xl w-40 mx-auto z-20"></div>
                
                <div className="h-full w-full flex flex-col pt-8">
                  <div className="bg-[#2B2D31] px-4 py-3 flex items-center justify-center border-b border-[#1E1F22]">
                    <span className="font-bold text-white text-sm tracking-wide flex items-center gap-1"><span className="text-[#80848E]">#</span> deployments</span>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col gap-6 overflow-y-auto font-sans">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#5865F2] shrink-0 mt-0.5 flex justify-center items-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-white text-[15px]">You</span>
                          <span className="text-[11px] text-[#949BA4]">11:42 AM</span>
                        </div>
                        <div className="text-[#DBDEE1] text-[15px] mt-1 leading-snug">
                          <span className="bg-[#3B3D44] text-[#DBDEE1] px-1 rounded text-[13px] font-mono mr-1">/beetle</span>
                          <span className="text-[#8FA88C] bg-[#8FA88C]/10 px-1 rounded text-[13px] mr-1">prompt:</span> Update my portfolio with a new project about GIS development.
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#111214] border border-[#8FA88C]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-5 h-5 text-[#8FA88C]" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-[#8FA88C] text-[15px]">Vibe Beetle</span>
                          <span className="bg-[#5865F2] text-white text-[10px] px-1.5 rounded font-bold uppercase tracking-wider">Bot</span>
                        </div>
                        <div className="bg-[#2B2D31] border-l-2 border-[#8FA88C] p-3 rounded mt-2">
                          <div className="flex items-center gap-1.5 font-bold text-[#8FA88C] mb-1.5 text-xs">
                            <CheckCircle2 className="w-4 h-4" />
                            [SUCCESS] DEPLOYED
                          </div>
                          <p className="text-[#DBDEE1] text-[13px] leading-relaxed mb-2">
                            Content generated. GitHub updated.
                          </p>
                          <a href="#" className="text-[#00A8FC] hover:underline text-[13px] flex items-center gap-1">
                            <Globe className="w-3.5 h-3.5" /> vibebeetle.com/blog/gis
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-[#313338]">
                    <div className="bg-[#383A40] rounded-full h-11 w-full px-4 flex items-center text-[#949BA4] text-[15px]">
                      Message #deployments
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="w-full flex flex-col items-center py-32 px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tighter uppercase mb-4">
              Unified <span className="font-serif italic font-normal text-[#8FA88C] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Access</span>
            </h2>
            <p className="text-[#A1A1A1] text-lg font-light max-w-xl mx-auto">Industrial-grade orchestration for a flat monthly rate.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl bg-[#131313] border border-[#2A2A2A] rounded-md p-12 relative"
          >
            <div className="flex justify-between items-end mb-10 border-b border-[#2A2A2A] pb-8">
              <div>
                <h3 className="text-3xl font-bold tracking-tighter uppercase mb-2 text-[#8FA88C]">The Scarab</h3>
                <p className="text-[#A1A1A1] text-sm">Everything you need. Nothing you don't.</p>
              </div>
              <div className="text-right">
                <span className="text-6xl font-light tracking-tighter">$10</span>
                <span className="text-[#A1A1A1] text-xs block mt-1 uppercase tracking-widest font-bold">/ Month</span>
              </div>
            </div>

            <ul className="flex flex-col gap-6">
              {[
                "BYOK (Bring Your Own Key): Works with your existing Gemini, Claude, or OpenAI API keys.",
                "Mobile Command: Full Discord slash-command integration.",
                "Automated Pipeline: The Beetle handles the GitHub pushes and Cloud Run deployments.",
                "Content Orchestration: Generate high-intent blogs, SEO copy, and updates in seconds.",
                "Headless Power: Manage your site's codebase without ever opening a laptop."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#8FA88C]" />
                  </div>
                  <p className="text-[#FFFFFF] text-sm leading-relaxed font-light">{text}</p>
                </li>
              ))}
            </ul>

            <button className="w-full mt-12 bg-[#8FA88C] hover:bg-[#A3BEA0] text-[#0E0E0E] py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-colors">
              Initialize Plan
            </button>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#2A2A2A] py-12 px-8 flex justify-between items-center text-[#A1A1A1] text-xs font-semibold uppercase tracking-widest z-20 mix-blend-difference">
        <p>VIBE BEETLE OS © 2026</p>
        <p>AUTONOMOUS WEB EMPIRES</p>
      </footer>
    </div>
  );
}
