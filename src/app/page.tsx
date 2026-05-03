"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Server, Activity } from "lucide-react";
import { useEffect, useState } from "react";

// Geometric Scarab SVG Component
const ScarabLogo = () => (
  <motion.svg
    width="160"
    height="160"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-8 drop-shadow-[0_0_20px_rgba(0,243,255,0.8)]"
    initial={{ opacity: 0, rotateY: -90 }}
    animate={{ opacity: 1, rotateY: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <path
      d="M50 10 L65 25 L80 20 L75 40 L90 50 L75 60 L80 80 L65 75 L50 90 L35 75 L20 80 L25 60 L10 50 L25 40 L20 20 L35 25 Z"
      stroke="#00F3FF"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="rgba(0,243,255,0.1)"
    />
    <path
      d="M50 10 L50 90 M35 25 L65 25 M25 40 L75 40 M25 60 L75 60 M35 75 L65 75"
      stroke="#00F3FF"
      strokeWidth="1"
      strokeDasharray="4 4"
    />
    <circle cx="50" cy="50" r="15" fill="none" stroke="#00F3FF" strokeWidth="2" />
    <circle cx="50" cy="50" r="5" fill="#00F3FF" />
  </motion.svg>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative bg-[#121212] text-[#ededed] overflow-x-hidden flex flex-col justify-between">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
        }}
      />
      
      {/* CRT Overlays */}
      <div className="crt-overlay pointer-events-none z-50"></div>
      <div className="crt-scanline pointer-events-none z-50"></div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 z-10 w-full max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center w-full mt-10 md:mt-20">
          <ScarabLogo />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-xl"
          >
            Autonomous <br className="hidden md:block"/>
            <span className="text-[#00F3FF]">Web Empires</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-foreground/70 max-w-2xl mx-auto text-lg md:text-2xl font-mono leading-relaxed mb-12"
          >
            The headless engine for your digital portfolio. Manage multiple sites from a single Discord command.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="#" 
              className="inline-block relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00F3FF] to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button className="relative px-8 py-4 bg-black border border-[#00F3FF]/50 text-[#00F3FF] font-bold text-xl uppercase tracking-widest rounded-lg transition-transform hover:scale-105 flex items-center gap-3">
                <Activity className="w-6 h-6" />
                Launch The Beetle
              </button>
            </a>
          </motion.div>
        </div>

        {/* The 'Why' - Bento Box Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24 mb-16"
        >
          {/* Card 1 */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#00F3FF]/50 p-8 rounded-2xl transition-all duration-300 group">
            <Brain className="w-10 h-10 text-[#00F3FF] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">The Brain</h3>
            <p className="text-foreground/70 leading-relaxed font-mono text-sm">
              AI Content Orchestration. Weekly blogs, SEO, and images—zero human touch.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#00F3FF]/50 p-8 rounded-2xl transition-all duration-300 group md:-translate-y-4">
            <Globe className="w-10 h-10 text-[#00F3FF] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">The Fleet</h3>
            <p className="text-foreground/70 leading-relaxed font-mono text-sm">
              Multi-Site Sync. Push updates to a dozen domains simultaneously via Discord.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#00F3FF]/50 p-8 rounded-2xl transition-all duration-300 group">
            <Server className="w-10 h-10 text-[#00F3FF] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold uppercase tracking-wider mb-3">The Stack</h3>
            <p className="text-foreground/70 leading-relaxed font-mono text-sm">
              Industrial Infrastructure. Powered by Google Cloud & GitHub for 99.9% uptime.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer System Health Bar */}
      <footer className="w-full border-t border-white/10 bg-black/60 backdrop-blur-md py-4 px-6 z-20 flex justify-between items-center relative">
        <div className="font-mono text-xs text-foreground/50 flex gap-4">
          <span>VIBE-BEETLE v1.4.0</span>
          <span className="hidden sm:inline">KERNEL: ACTIVE</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-sm font-bold border border-green-500/30 bg-green-500/10 px-3 py-1 rounded">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-green-400">Beetle-12: ONLINE</span>
        </div>
      </footer>
    </main>
  );
}
