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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E2D9C8] selection:text-[#1A1A1A] overflow-x-hidden relative flex flex-col">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Soft Warm Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#F5F2EB_100%)] opacity-80" />
        {/* Subtle Noise Texture for warmth */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')] mix-blend-multiply pointer-events-none" />
      </div>

      {/* HEADER (Grid-style borders) */}
      <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center border-b border-[#E5E0D8]">
        <div className="flex items-center gap-3 font-bold tracking-widest text-sm uppercase text-[#1A1A1A]">
          VIBE BEETLE
        </div>
        <nav className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-[#5A5A5A]">
          <a href="#how-it-works" className="hover:text-[#1A1A1A] transition-colors">How it Works</a>
          <a href="#stories" className="hover:text-[#1A1A1A] transition-colors">Stories</a>
          <a href="#pricing" className="hover:text-[#1A1A1A] transition-colors">Pricing</a>
        </nav>
        <button className="text-[11px] font-bold tracking-widest uppercase bg-[#2C3B2E] text-[#FDFBF7] px-7 py-3 rounded-full hover:bg-[#1A241C] shadow-sm transition-all hover:shadow-md">
          Launch App
        </button>
      </header>

      <main className="relative z-10 w-full flex flex-col flex-1">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center min-h-[75vh] px-6 pb-20 border-b border-[#E5E0D8] relative overflow-hidden">
          
          {/* Subtle Video Background inside Hero only, heavily muted/lightened */}
          <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply overflow-hidden pointer-events-none">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale"
            >
              <source src="http://googleusercontent.com/generated_video_content/917126358977414873" type="video/mp4" />
            </video>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-6xl w-full relative z-10 mt-12"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-[#1A1A1A]">
              COMMAND YOUR <br/>
              <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Empire</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed mb-12 max-w-2xl font-medium tracking-wide relative z-10"
          >
            One Command. One Site. Infinite Content. Leverage your existing $20/mo AI subscriptions to build, manage, and deploy from your phone.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative z-10"
          >
            <button className="bg-[#2C3B2E] text-[#FDFBF7] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:bg-[#1A241C] shadow-lg hover:shadow-xl flex items-center gap-3">
              Start Free Trial <Send className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        {/* HOW IT WORKS / DEMO */}
        <section id="how-it-works" className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-[#E5E0D8] bg-[#F9F7F1]">
          {/* Left Side: Content */}
          <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-[#E5E0D8] flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#A3B09E] font-serif italic text-7xl mb-8 block opacity-50" style={{ fontFamily: 'var(--font-playfair)' }}>01</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight text-[#1A1A1A]">
                No Laptop. <br/>
                <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Pure Execution.</span>
              </h2>
              <p className="text-[#5A5A5A] text-lg leading-relaxed mb-10 font-medium">
                We built Vibe Beetle for the operator on the move. Orchestrate Google Cloud deployments, GitHub commits, and AI generation entirely through a simple Discord message. Crisp, clean, and invisible.
              </p>
              <div className="flex gap-8">
                <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold tracking-widest uppercase"><Smartphone className="w-4 h-4 text-[#2C3B2E]"/> Mobile Native</div>
                <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold tracking-widest uppercase"><Terminal className="w-4 h-4 text-[#2C3B2E]"/> Headless OS</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="p-12 md:p-24 flex items-center justify-center bg-[#FDFBF7] relative overflow-hidden">
            {/* Subtle background circle to pop the phone */}
            <div className="absolute w-[120%] h-[120%] bg-[#F5F2EB] rounded-full blur-3xl opacity-50"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full max-w-[320px] relative z-10"
            >
              <div className="w-full rounded-[3rem] border-[10px] border-[#E5E0D8] bg-[#FDFBF7] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative aspect-[9/19]">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-[#E5E0D8] rounded-b-3xl w-32 mx-auto z-20"></div>
                
                {/* Discord UI (Light Theme implementation for crispness) */}
                <div className="h-full w-full flex flex-col pt-8 bg-white">
                  <div className="bg-[#F2F3F5] px-4 py-3 flex items-center justify-center border-b border-[#E3E5E8] shadow-sm">
                    <span className="font-bold text-[#060607] text-[13px] tracking-wide flex items-center gap-1"><span className="text-[#80848E] font-medium text-lg">#</span> deployments</span>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col gap-6 overflow-y-auto font-sans">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#5865F2] shrink-0 mt-0.5 flex justify-center items-center shadow-sm">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-[#060607] text-[14px]">You</span>
                          <span className="text-[11px] text-[#5C5E66] font-medium">11:42 AM</span>
                        </div>
                        <div className="text-[#2E3338] text-[14px] mt-1.5 leading-snug">
                          <span className="bg-[#EBEDEF] text-[#2E3338] px-1.5 py-0.5 rounded text-[13px] font-mono mr-1 border border-[#E3E5E8]">/beetle</span>
                          <span className="text-[#2C3B2E] bg-[#2C3B2E]/10 px-1 rounded text-[13px] mr-1 font-medium">prompt:</span> Update my portfolio with a new project about GIS development.
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#E5E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Bot className="w-5 h-5 text-[#2C3B2E]" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-[#2C3B2E] text-[14px]">Vibe Beetle</span>
                          <span className="bg-[#5865F2] text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Bot</span>
                        </div>
                        <div className="bg-[#F8F9F9] border-l-[3px] border-[#2C3B2E] p-3.5 rounded mt-2 shadow-sm">
                          <div className="flex items-center gap-1.5 font-bold text-[#2C3B2E] mb-1.5 text-xs">
                            <CheckCircle2 className="w-4 h-4" />
                            [SUCCESS] DEPLOYED
                          </div>
                          <p className="text-[#4F5660] text-[13px] leading-relaxed mb-2">
                            Content generated. GitHub updated.
                          </p>
                          <a href="#" className="text-[#006CE7] hover:underline text-[13px] font-medium flex items-center gap-1">
                            <Globe className="w-3.5 h-3.5" /> vibebeetle.com/blog/gis
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-[#F2F3F5] border-t border-[#E3E5E8]">
                    <div className="bg-white border border-[#E3E5E8] rounded-full h-10 w-full px-4 flex items-center text-[#5C5E66] text-[14px] shadow-inner">
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
            <h2 className="text-5xl font-bold tracking-tighter uppercase mb-4 text-[#1A1A1A]">
              Unified <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Access</span>
            </h2>
            <p className="text-[#5A5A5A] text-lg font-medium max-w-xl mx-auto">Industrial-grade orchestration for a flat, predictable monthly rate.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl bg-white border border-[#E5E0D8] rounded-xl p-12 relative shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#2C3B2E] rounded-t-xl"></div>
            
            <div className="flex justify-between items-end mb-10 border-b border-[#E5E0D8] pb-8">
              <div>
                <h3 className="text-3xl font-bold tracking-tighter uppercase mb-2 text-[#1A1A1A]">The Scarab</h3>
                <p className="text-[#5A5A5A] text-sm font-medium">Everything you need. Nothing you don't.</p>
              </div>
              <div className="text-right">
                <span className="text-6xl font-bold tracking-tighter text-[#2C3B2E]">$10</span>
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
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-[#F5F2EB] flex items-center justify-center shrink-0 border border-[#E5E0D8]">
                    <Check className="w-3.5 h-3.5 text-[#2C3B2E] stroke-[3]" />
                  </div>
                  <p className="text-[#1A1A1A] text-sm leading-relaxed font-medium">{text}</p>
                </li>
              ))}
            </ul>

            <button className="w-full mt-12 bg-[#2C3B2E] hover:bg-[#1A241C] text-[#FDFBF7] py-5 rounded-md font-bold uppercase tracking-widest text-sm transition-all shadow-md hover:shadow-lg">
              Initialize Plan
            </button>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#E5E0D8] bg-[#F9F7F1] py-12 px-8 flex justify-between items-center text-[#A1A1A1] text-xs font-bold uppercase tracking-widest z-20">
        <p>VIBE BEETLE OS © 2026</p>
        <p>AUTONOMOUS WEB EMPIRES</p>
      </footer>
    </div>
  );
}
