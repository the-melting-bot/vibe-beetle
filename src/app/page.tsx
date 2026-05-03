"use client";

import { motion } from "framer-motion";
import { Link2, Zap, Send, BrainCircuit, Globe, Server, MessageSquare, Play, Bot, User } from "lucide-react";
import { useEffect, useState } from "react";

// Geometric Armored Beetle SVG Component
const ScarabLogo = () => (
  <motion.svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_0_15px_rgba(0,243,255,0.6)]"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Armored Shell Core */}
    <path
      d="M50 10 L65 25 L75 25 L80 40 L85 55 L75 75 L65 85 L50 95 L35 85 L25 75 L15 55 L20 40 L25 25 L35 25 Z"
      stroke="#00F3FF"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="rgba(0,243,255,0.05)"
    />
    {/* Inner Geometry */}
    <path
      d="M50 10 L50 95 M35 25 L65 25 M25 40 L75 40 M30 55 L70 55 M35 75 L65 75"
      stroke="#00F3FF"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    {/* Mandibles / Accent */}
    <path d="M40 5 L40 10 M60 5 L60 10" stroke="#00F3FF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="40" r="12" fill="none" stroke="#00F3FF" strokeWidth="2" />
    <circle cx="50" cy="40" r="4" fill="#00F3FF" />
  </motion.svg>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-[#00F3FF] selection:text-black">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00F3FF]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0055FF]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
          <Zap className="w-5 h-5 text-[#00F3FF] fill-[#00F3FF]/20" />
          VIBE BEETLE
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">How it Works</a>
          <a href="#setup" className="hover:text-white transition-colors">Setup</a>
        </nav>
        <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">
          Login
        </button>
      </header>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center">
        
        {/* HERO */}
        <section className="flex flex-col items-center text-center max-w-4xl mb-24">
          <ScarabLogo />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F3FF]/10 border border-[#00F3FF]/20 text-[#00F3FF] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F3FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F3FF]"></span>
              </span>
              Gemini 1.5 Pro Now Supported
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              COMMAND YOUR EMPIRE <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                FROM DISCORD.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto font-medium"
          >
            Leverage your existing $20/mo AI subscriptions to build, manage, and deploy blogs and web apps directly from your phone. No laptop. No complex code. Just results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-[#00F3FF] hover:bg-[#00F3FF]/90 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2">
              LAUNCH THE BEETLE <Play className="w-5 h-5 fill-black" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              Read the Docs
            </button>
          </motion.div>
        </section>

        {/* SHOW, DON'T TELL (Discord Simulation) */}
        <section id="demo" className="w-full mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Orchestrate from Anywhere.</h2>
            <p className="text-white/50 text-lg">Send prompts from your phone. The Scarab handles the rest.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto rounded-2xl bg-[#36393f] overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Discord Header */}
            <div className="bg-[#2f3136] px-4 py-3 border-b border-[#202225] flex items-center gap-2">
              <span className="text-[#8e9297] text-xl font-bold">#</span>
              <span className="font-bold text-white tracking-wide">deployments</span>
            </div>
            
            {/* Discord Chat Body */}
            <div className="p-6 flex flex-col gap-6 font-sans">
              
              {/* User Message */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-white">Founder</span>
                    <span className="text-xs text-[#72767d]">Today at 2:43 PM</span>
                  </div>
                  <div className="text-[#dcddde] text-[15px] leading-relaxed">
                    <span className="bg-[#41464D] text-[#e3e5e8] px-1.5 py-0.5 rounded text-sm font-mono mr-2">/beetle</span>
                    <span className="text-[#00F3FF] bg-[#00F3FF]/10 px-1 rounded">prompt:</span> "Write a technical blog post for my GIS site about the new Beetle deployment."
                  </div>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#00F3FF]/10 border border-[#00F3FF]/30 flex items-center justify-center shrink-0">
                  <Bot className="w-6 h-6 text-[#00F3FF]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-[#00F3FF]">Vibe Beetle</span>
                    <span className="bg-[#5865F2] text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Bot</span>
                    <span className="text-xs text-[#72767d]">Today at 2:44 PM</span>
                  </div>
                  <div className="bg-[#2f3136] border-l-4 border-[#39ff14] p-4 rounded-r-lg mt-1 shadow-md">
                    <div className="flex items-center gap-2 font-bold text-[#39ff14] mb-2">
                      <Zap className="w-4 h-4 fill-[#39ff14]" />
                      [SUCCESS] Pipeline Executed
                    </div>
                    <p className="text-[#dcddde] text-sm leading-relaxed mb-3">
                      Content generated via Gemini 1.5 Pro. Formatting markdown and executing GitHub push sequences...
                    </p>
                    <a href="#" className="text-[#00b0f4] hover:underline text-sm font-medium flex items-center gap-1">
                      <Globe className="w-4 h-4" /> Live at vibebeetle.com/blog/new-deployment
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* FEATURE CARDS (Pillars) */}
        <section id="features" className="w-full mb-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white/[0.02] border border-white/5 hover:border-white/20 p-8 rounded-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-[#00F3FF]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Bring Your Own Brain.</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Stop paying redundant SaaS fees. The Beetle works directly with your existing Gemini, Claude, or ChatGPT API keys to fuel content generation.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white/[0.02] border border-white/5 hover:border-white/20 p-8 rounded-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-[#00F3FF]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Zero-Touch Deployment.</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              You command, we compile. The Beetle handles the GitHub pushes, Cloud Run scaling, and automated SSL provisioning invisibly.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white/[0.02] border border-white/5 hover:border-white/20 p-8 rounded-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-[#00F3FF]" />
            </div>
            <h3 className="text-xl font-bold mb-3">The Fleet Manager.</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Manage 12+ sites from a single Discord channel. Routing, updating, and patching is simplified down to chat syntax.
            </p>
          </div>
        </section>

        {/* SETUP INSTRUCTIONS */}
        <section id="setup" className="w-full max-w-5xl mx-auto bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-10 md:p-16 mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deploy in 3 Minutes.</h2>
            <p className="text-white/50 text-lg">No massive configuration files. No CLI tutorials. Just link and launch.</p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#00F3FF]/10 text-[#00F3FF] font-bold flex items-center justify-center shrink-0 border border-[#00F3FF]/20">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">Link. <Link2 className="w-5 h-5 text-white/40" /></h3>
                <p className="text-white/60">Connect your Discord server and GitHub repositories via our secure OAuth portal in under 60 seconds.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#00F3FF]/10 text-[#00F3FF] font-bold flex items-center justify-center shrink-0 border border-[#00F3FF]/20">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">Authenticate. <Zap className="w-5 h-5 text-white/40" /></h3>
                <p className="text-white/60">Paste your preferred LLM API key. We securely encrypt it. This is the exact same key powering your $20/month subscription.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-[#00F3FF]/10 text-[#00F3FF] font-bold flex items-center justify-center shrink-0 border border-[#00F3FF]/20">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">Deploy. <Send className="w-5 h-5 text-white/40" /></h3>
                <p className="text-white/60">Start commanding your digital fleet via slash commands. Type <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-[#00F3FF]">/beetle</code> to see the magic.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10 flex justify-center">
             <button className="bg-white text-black hover:bg-[#00F3FF] px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
              Start Building Now
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-white/40 text-sm">
        <p>© 2026 Vibe Beetle. All rights reserved. Industrial Infrastructure for the modern web.</p>
      </footer>

    </div>
  );
}
