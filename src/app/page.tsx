"use client";

import { motion } from "framer-motion";
import { Check, Send, Smartphone, Terminal, Zap, Bot, User, Globe, CheckCircle2, Server, Lock } from "lucide-react";
import { useEffect, useState } from "react";

// Custom Icons
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const GeometricBeetle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L12 22" />
    <path d="M8 12L12 8L16 12" />
    <path d="M6 16L12 12L18 16" />
    <path d="M12 2L20 10L12 18L4 10Z" />
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
          <a href="#manage-fleet" className="hover:text-[#1A1A1A] transition-colors">Manage Fleet</a>
          <a href="#how-it-works" className="hover:text-[#1A1A1A] transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-[#1A1A1A] transition-colors">Pricing</a>
        </nav>
        <button className="text-[11px] font-bold tracking-widest uppercase bg-[#2C3B2E] text-[#FDFBF7] px-7 py-3 rounded-full hover:bg-[#1A241C] shadow-sm transition-all hover:shadow-md">
          Launch App
        </button>
      </header>

      <main className="relative z-10 w-full flex flex-col flex-1">
        
        {/* HERO SECTION - "THE BRIDGE" */}
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
              THE BRIDGE FROM <br/>
              <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Chatting to Coding</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed mb-20 max-w-2xl font-medium tracking-wide relative z-10"
          >
            Leverage your existing $20/mo AI subscriptions to build, manage, and deploy from your phone.
          </motion.p>
          
          {/* LOGIC BRIDGE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative z-10 flex items-center justify-center w-full max-w-4xl mx-auto h-40"
          >
            {/* Discord Node */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-20 h-20 bg-white border border-[#E5E0D8] rounded-2xl shadow-xl flex items-center justify-center">
                <DiscordIcon className="w-10 h-10 text-[#5865F2]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-4 text-[#5A5A5A]">Input</span>
            </div>

            {/* Connecting Line 1 */}
            <div className="flex-1 h-px bg-[#E5E0D8] relative mx-4 overflow-hidden hidden md:block">
              <motion.div
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#2C3B2E] to-transparent opacity-30"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>

            {/* Beetle Node (Center) */}
            <div className="relative z-20 flex flex-col items-center mx-4 md:mx-0">
              <div className="w-24 h-24 bg-[#2C3B2E] text-white rounded-full shadow-[0_0_40px_rgba(44,59,46,0.2)] flex items-center justify-center relative overflow-hidden border-4 border-white">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]" 
                />
                <GeometricBeetle className="w-10 h-10 relative z-10" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-4 text-[#1A1A1A]">Orchestration</span>
            </div>

            {/* Connecting Line 2 */}
            <div className="flex-1 h-px bg-[#E5E0D8] relative mx-4 overflow-hidden hidden md:block">
              <motion.div
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#2C3B2E] to-transparent opacity-30"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
              />
            </div>

            {/* GitHub Node */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-20 h-20 bg-white border border-[#E5E0D8] rounded-2xl shadow-xl flex items-center justify-center">
                <GithubIcon className="w-10 h-10 text-[#1A1A1A]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-4 text-[#5A5A5A]">Deployment</span>
            </div>
          </motion.div>
        </section>

        {/* THE POWER OF YOUR $20 SUB */}
        <section className="w-full py-32 px-6 border-b border-[#E5E0D8] bg-[#FDFBF7]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-[#1A1A1A]">
              The Power of Your <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>$20 Sub</span>
            </h2>
            <p className="text-[#5A5A5A] text-lg leading-relaxed font-medium mb-16">
              You are already paying for GPT-4, Claude Opus, or Gemini Advanced. Stop using them just for chat. Vibe Beetle securely leverages your existing API keys to transform conversational AI into a professional-grade, autonomous web orchestration engine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-8 border border-[#E5E0D8] rounded-xl bg-white shadow-sm">
                <Lock className="w-8 h-8 text-[#2C3B2E] mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Bring Your Own Key</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">No markup on AI tokens. Plug in your API keys and only pay for exactly what the engine uses directly to OpenAI or Google.</p>
              </div>
              <div className="p-8 border border-[#E5E0D8] rounded-xl bg-white shadow-sm">
                <Bot className="w-8 h-8 text-[#2C3B2E] mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Any LLM Provider</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">Whether you prefer the reasoning of Claude 3.5 Sonnet or the context window of Gemini 1.5 Pro, Vibe Beetle adapts instantly.</p>
              </div>
              <div className="p-8 border border-[#E5E0D8] rounded-xl bg-white shadow-sm">
                <Server className="w-8 h-8 text-[#2C3B2E] mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Enterprise Security</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">Keys are encrypted and stored via Google Cloud Secret Manager. Your infrastructure remains completely secure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MANAGE YOUR FLEET (3x4 GRID) */}
        <section id="manage-fleet" className="w-full py-32 px-6 border-b border-[#E5E0D8] bg-[#F9F7F1]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-[#1A1A1A]">
                Manage Your <span className="font-serif italic font-normal text-[#2C3B2E] tracking-normal capitalize" style={{ fontFamily: 'var(--font-playfair)' }}>Fleet</span>
              </h2>
              <p className="text-[#5A5A5A] text-lg font-medium max-w-2xl mx-auto">
                Control a massive digital footprint from a single Discord channel. Deploy blogs, refine SEO, and update codebases across 12+ sites simultaneously.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "dog-parks.com", status: "Pushed 2m ago", color: "bg-[#57F287]" },
                { name: "gis-portfolio.dev", status: "Pushed 14m ago", color: "bg-[#57F287]" },
                { name: "local-seo-expert.io", status: "Building...", color: "bg-[#FEE75C]" },
                { name: "austin-real-estate.com", status: "Pushed 1h ago", color: "bg-[#57F287]" },
                { name: "tech-blog-hq.net", status: "Pushed 3h ago", color: "bg-[#57F287]" },
                { name: "react-components.ui", status: "Pushed 5h ago", color: "bg-[#57F287]" },
                { name: "daily-journal.me", status: "Syncing...", color: "bg-[#5865F2]" },
                { name: "indie-hacker-tools.com", status: "Pushed 12h ago", color: "bg-[#57F287]" },
                { name: "nextjs-templates.org", status: "Pushed 1d ago", color: "bg-[#57F287]" },
                { name: "startup-landing.io", status: "Pushed 1d ago", color: "bg-[#57F287]" },
                { name: "cyber-security-news.net", status: "Failed", color: "bg-[#ED4245]" },
                { name: "vibe-beetle-docs.com", status: "Pushed 2d ago", color: "bg-[#57F287]" }
              ].map((site, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-[#E5E0D8] rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1A1A1A] text-sm mb-1 group-hover:text-[#2C3B2E] transition-colors">{site.name}</span>
                    <span className="text-xs text-[#A1A1A1] font-mono flex items-center gap-2">
                      <Globe className="w-3 h-3" /> https://www.{site.name}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className={`w-2 h-2 rounded-full ${site.color}`}></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A5A]">{site.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / DEMO */}
        <section id="how-it-works" className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-[#E5E0D8] bg-[#FDFBF7]">
          {/* Left Side: Content */}
          <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-[#E5E0D8] flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#A3B09E] font-serif italic text-7xl mb-8 block opacity-50" style={{ fontFamily: 'var(--font-playfair)' }}>02</span>
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
          <div className="p-12 md:p-24 flex items-center justify-center relative overflow-hidden bg-[#F9F7F1]">
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

        {/* PRICING SECTION */}
        <section id="pricing" className="w-full flex flex-col items-center py-32 px-6 bg-[#FDFBF7]">
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
