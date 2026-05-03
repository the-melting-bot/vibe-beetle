"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Send, Smartphone, Terminal, Zap, Bot, User, Globe, CheckCircle2, Server, Lock, Code, Database, Layout, Loader2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Custom Icons
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const SlackIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.522v-2.522h2.523zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.2-.02-.28 0-.12.03-1.99 1.25-5.61 3.67-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.38-.49 1.05-.75 4.12-1.78 6.86-2.95 8.24-3.52 3.92-1.63 4.73-1.9 5.25-1.91.11 0 .37.03.5.15.11.1.15.24.16.36.02.12.02.26 0 .38z"/>
  </svg>
);



const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#F5F2EB_100%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')] mix-blend-multiply pointer-events-none" />
      </div>

      {/* HEADER */}
      <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center border-b border-[#E5E0D8]">
        <div className="flex items-center gap-3 font-bold tracking-widest text-sm uppercase text-[#1A1A1A]">
          VIBE BEETLE
        </div>
        <nav className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-[#5A5A5A]">
          <a href="#the-bridge" className="hover:text-[#1A1A1A] transition-colors">The Bridge</a>
          <a href="#how-it-works" className="hover:text-[#1A1A1A] transition-colors">How it Works</a>
          <a href="#manage-fleet" className="hover:text-[#1A1A1A] transition-colors">Activity</a>
          <a href="#pricing" className="hover:text-[#1A1A1A] transition-colors">Pricing</a>
        </nav>
        <button className="text-[11px] font-bold tracking-widest uppercase bg-[#2C3B2E] text-[#FDFBF7] px-7 py-3 rounded-full hover:bg-[#1A241C] shadow-sm transition-all hover:shadow-md">
          Launch App
        </button>
      </header>

      <main className="relative z-10 w-full flex flex-col flex-1">
        
        {/* HERO SECTION - "THE UNIVERSAL HERO" */}
        <section id="the-bridge" className="flex flex-col items-center justify-center text-center min-h-[85vh] px-6 pb-20 border-b border-[#E5E0D8] relative overflow-hidden">
          
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
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-[#1A1A1A]">
              THE BRIDGE FROM CHATTING <br/>
              <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>
                <span className="hidden md:inline mr-4 opacity-50"><ArrowRight className="inline w-16 h-16 mb-2" /></span>
                Coding
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed mb-16 max-w-3xl font-medium tracking-wide relative z-10"
          >
            Turn your Discord into a high-powered web studio. Build, update, and manage your websites entirely through chat—no matter where they are hosted or how many you own.
          </motion.p>
          
          {/* LOGIC BRIDGE ANIMATION (REHAULED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-full h-40">
              {/* Stacked Chat Apps Node */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="flex items-center justify-center h-24">
                  {/* Background app 1: Slack */}
                  <div className="w-16 h-16 relative flex items-center justify-center transform -rotate-12 translate-x-6 translate-y-1 z-0 drop-shadow-md">
                    <Image src="/3d_slack.png" alt="Slack 3D" fill className="object-contain rounded-2xl mix-blend-multiply" />
                  </div>
                  {/* Foreground app: Discord */}
                  <div className="w-20 h-20 relative flex items-center justify-center z-20 drop-shadow-xl">
                    <Image src="/3d_discord.png" alt="Discord 3D" fill className="object-contain rounded-2xl mix-blend-multiply" />
                  </div>
                  {/* Background app 2: Telegram */}
                  <div className="w-16 h-16 relative flex items-center justify-center transform rotate-12 -translate-x-6 translate-y-1 z-10 drop-shadow-md">
                    <Image src="/3d_telegram.png" alt="Telegram 3D" fill className="object-contain rounded-2xl mix-blend-multiply" />
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-4 text-[#5A5A5A]">Pick Your Vibe</span>
              </div>

              {/* Connecting Line 1 */}
              <div className="flex-1 h-px bg-[#E5E0D8] relative mx-4 overflow-hidden hidden md:block">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#00F3FF] to-transparent opacity-60"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              </div>

              {/* Beetle Node (Center) */}
              <div className="relative z-20 flex flex-col items-center mx-4 md:mx-0">
                <div className="w-24 h-24 relative flex items-center justify-center drop-shadow-xl">
                  <Image src="/3d_cyber_beetle.png" alt="Vibe Beetle 3D Logo" fill className="object-contain rounded-[2rem] mix-blend-multiply" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-4 text-[#1A1A1A]">Vibe Beetle</span>
              </div>

              {/* Connecting Line 2 */}
              <div className="flex-1 h-px bg-[#E5E0D8] relative mx-4 overflow-hidden hidden md:block">
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#00F3FF] to-transparent opacity-60"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
                />
              </div>

              {/* GitHub Node */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="w-20 h-20 relative flex items-center justify-center drop-shadow-xl">
                  <Image src="/3d_github.png" alt="GitHub 3D" fill className="object-contain rounded-2xl mix-blend-multiply" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-4 text-[#5A5A5A]">Commit. Deploy.</span>
              </div>
            </div>
            <p className="mt-8 text-sm font-medium text-[#A1A1A1] max-w-md">Vibe Beetle connects your favorite chat app to your favorite hosting provider. No laptop required.</p>
          </motion.div>
        </section>

        {/* EVERYONE'S INVITED CONTENT */}
        <section className="w-full py-24 px-6 border-b border-[#E5E0D8] bg-[#FDFBF7]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-[#F5F2EB] border border-[#E5E0D8] flex items-center justify-center mb-6">
                <Layout className="w-5 h-5 text-[#2C3B2E]" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-[#1A1A1A]">Your Stack, Our Interface</h3>
              <p className="text-[#5A5A5A] text-lg leading-relaxed font-medium">
                Vibe Beetle works where you do. Whether you use Vercel, Netlify, Google Cloud, or GitHub, the Beetle acts as the universal remote for your digital presence. No forced migrations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-[#F5F2EB] border border-[#E5E0D8] flex items-center justify-center mb-6">
                <Database className="w-5 h-5 text-[#2C3B2E]" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-[#1A1A1A]">From 1 to 100</h3>
              <p className="text-[#5A5A5A] text-lg leading-relaxed font-medium">
                Perfect for the solo-preneur with one passion project or the agency managing a massive fleet. Vibe Beetle scales infinitely with your ambition without changing the workflow.
              </p>
            </motion.div>

          </div>
        </section>

        {/* HOW IT WORKS (Plain English Workflow) */}
        <section id="how-it-works" className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-[#E5E0D8] bg-[#F9F7F1]">
          {/* Left Side: 3-Step Content */}
          <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-[#E5E0D8] flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-16 leading-tight text-[#1A1A1A]">
              The Workflow <br/>
              <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Simplified</span>
            </h2>
            
            <div className="flex flex-col gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 text-[#A3B09E] font-serif italic text-4xl opacity-50" style={{ fontFamily: 'var(--font-playfair)' }}>1</div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-2 mt-1">Connect</h3>
                <p className="text-[#5A5A5A] text-base leading-relaxed font-medium">
                  Link your favorite hosting provider and drop in your AI key.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 text-[#A3B09E] font-serif italic text-4xl opacity-50" style={{ fontFamily: 'var(--font-playfair)' }}>2</div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-2 mt-1">Chat</h3>
                <p className="text-[#5A5A5A] text-base leading-relaxed font-medium">
                  Tell the Beetle what you want to build or change in plain English.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 text-[#A3B09E] font-serif italic text-4xl opacity-50" style={{ fontFamily: 'var(--font-playfair)' }}>3</div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A] mb-2 mt-1">Celebrate</h3>
                <p className="text-[#5A5A5A] text-base leading-relaxed font-medium">
                  Watch your ideas go live instantly. No code, no stress, just results.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="p-12 md:p-24 flex items-center justify-center relative overflow-hidden bg-[#FDFBF7]">
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
                
                {/* Discord UI (Authentic Dark Theme) */}
                <div className="h-full w-full flex flex-col pt-8 bg-[#313338]">
                  <div className="bg-[#2B2D31] px-4 py-3 flex items-center justify-center border-b border-[#1E1F22] shadow-sm">
                    <span className="font-bold text-white text-[14px] tracking-wide flex items-center gap-1"><span className="text-[#80848E] font-medium text-lg">#</span> deployments</span>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col gap-6 overflow-y-auto font-sans">
                    {/* User Prompt */}
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#5865F2] shrink-0 mt-0.5 flex justify-center items-center shadow-sm">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-[#F2F3F5] text-[15px]">You</span>
                          <span className="text-[12px] text-[#949BA4] font-medium">11:42 AM</span>
                        </div>
                        <div className="text-[#DBDEE1] text-[14px] mt-1 leading-snug">
                          <span className="bg-[#41464D] text-[#DBDEE1] px-1.5 py-0.5 rounded text-[13px] font-mono mr-1">/beetle</span>
                          <span className="text-[#00A8FC] bg-[#00A8FC]/10 px-1 rounded text-[13px] mr-1 font-medium">prompt:</span> Update my portfolio with a new project about GIS development.
                        </div>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#2B2D31] border border-[#1E1F22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Bot className="w-5 h-5 text-[#DBDEE1]" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-[#F2F3F5] text-[15px]">Vibe Beetle</span>
                          <span className="bg-[#5865F2] text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Bot</span>
                        </div>
                        <div className="bg-[#2B2D31] border-l-[4px] border-[#57F287] p-3.5 rounded mt-2 shadow-sm">
                          <div className="flex items-center gap-1.5 font-bold text-[#57F287] mb-1.5 text-xs">
                            <CheckCircle2 className="w-4 h-4" />
                            [SUCCESS] DEPLOYED
                          </div>
                          <p className="text-[#DBDEE1] text-[13px] leading-relaxed mb-2">
                            Content generated. GitHub updated.
                          </p>
                          <a href="#" className="text-[#00A8FC] hover:underline text-[13px] font-medium flex items-center gap-1">
                            <Globe className="w-3.5 h-3.5" /> vibebeetle.com/blog/gis
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="p-4 bg-[#313338] border-t border-[#1E1F22]">
                    <div className="bg-[#383A40] rounded-full h-10 w-full px-4 flex items-center text-[#949BA4] text-[14px] shadow-inner">
                      Message #deployments
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SINGLE LARGE FLEET ACTIVITY CARD */}
        <section id="manage-fleet" className="w-full py-32 px-6 border-b border-[#E5E0D8] bg-[#FDFBF7]">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-[#1A1A1A]">
                Actionable <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Visibility</span>
              </h2>
              <p className="text-[#5A5A5A] text-lg font-medium max-w-2xl mx-auto">
                No complex dashboards. See exactly what the engine is building for your fleet in real-time.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full bg-white border border-[#E5E0D8] rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-[#F9F7F1] border-b border-[#E5E0D8] px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-[#00F3FF] rounded-full"></div>
                    <div className="absolute inset-0 bg-[#00F3FF] rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="font-bold text-[#1A1A1A] uppercase tracking-widest text-xs">Live Operation</span>
                </div>
                <span className="text-xs font-mono text-[#A1A1A1]">ID: VB-8942</span>
              </div>
              
              {/* Card Body */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Generating 3 NFL Blogs</h3>
                    <div className="flex items-center gap-2 text-[#5A5A5A] font-medium">
                      <Globe className="w-4 h-4 text-[#A1A1A1]" />
                      <span className="font-mono text-sm">AustinRealEstate.net</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-bold tracking-tighter text-[#2C3B2E] mb-1">85%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#A1A1A1]">Complete</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#F5F2EB] rounded-full overflow-hidden mb-6 border border-[#E5E0D8]">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#2C3B2E] to-[#00F3FF] rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white opacity-30"></div>
                  </motion.div>
                </div>

                {/* Status Log */}
                <div className="flex flex-col gap-3 font-mono text-xs text-[#5A5A5A] bg-[#F9F7F1] p-6 rounded-lg border border-[#E5E0D8]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#57F287]" />
                    <span>[SUCCESS] Connected to target repository...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#57F287]" />
                    <span>[SUCCESS] AI generated highly-optimized content...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-4 h-4 text-[#00F3FF] animate-spin" />
                    <span className="text-[#1A1A1A] font-bold">Pushing static files to Vercel production edge...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="w-full flex flex-col items-center py-32 px-6 bg-[#F9F7F1]">
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
      <footer className="w-full border-t border-[#E5E0D8] bg-[#FDFBF7] py-12 px-8 flex justify-between items-center text-[#A1A1A1] text-xs font-bold uppercase tracking-widest z-20">
        <p>VIBE BEETLE OS © 2026</p>
        <p>AUTONOMOUS WEB EMPIRES</p>
      </footer>
    </div>
  );
}
