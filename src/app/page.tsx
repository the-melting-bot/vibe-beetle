"use client";

import { motion } from "framer-motion";
import { Terminal, Activity, Server, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

// Mock data for the fleet
const fleetSites = [
  { id: "S-01", name: "Sector Alpha", status: "ONLINE", load: "12%" },
  { id: "S-02", name: "Sector Beta", status: "SYNCING", load: "45%" },
  { id: "S-03", name: "Sector Gamma", status: "ONLINE", load: "22%" },
  { id: "S-04", name: "Outpost Delta", status: "OFFLINE", load: "0%" },
  { id: "S-05", name: "Hub Epsilon", status: "ONLINE", load: "89%" },
  { id: "S-06", name: "Node Zeta", status: "ONLINE", load: "5%" },
  { id: "S-07", name: "Relay Eta", status: "SYNCING", load: "33%" },
  { id: "S-08", name: "Terminal Theta", status: "ONLINE", load: "67%" },
  { id: "S-09", name: "Grid Iota", status: "ONLINE", load: "18%" },
  { id: "S-10", name: "Nexus Kappa", status: "ONLINE", load: "42%" },
  { id: "S-11", name: "Core Lambda", status: "ONLINE", load: "99%" },
  { id: "S-12", name: "Vault Mu", status: "OFFLINE", load: "0%" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-hidden flex flex-col items-center">
      <div className="crt-overlay"></div>
      <div className="crt-scanline"></div>

      {/* Hero Section */}
      <div className="flex flex-col items-center z-10 w-full max-w-5xl mt-20 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4 mb-4 text-accent"
        >
          <Activity className="w-8 h-8 animate-pulse" />
          <span className="tracking-[0.3em] text-sm md:text-base font-mono uppercase font-bold">
            Vibe Beetle HQ // Central Command
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6"
        >
          Deploy the <span className="text-accent drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">Scarab</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-foreground/70 max-w-2xl mx-auto text-lg md:text-xl font-mono leading-relaxed"
        >
          System synchronization initialized. Monitoring distributed infrastructure across all sectors.
        </motion.p>
      </div>

      {/* The Feed - System Log */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full max-w-5xl z-10 relative"
      >
        <div className="flex items-center justify-between border-b border-accent/30 pb-4 mb-6">
          <h2 className="text-2xl font-bold font-mono tracking-widest uppercase flex items-center gap-3">
            <Terminal className="text-accent" /> Fleet Status Log
          </h2>
          <div className="text-accent/80 font-mono text-sm animate-pulse">
            LIVE UPDATES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fleetSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-lg p-5 backdrop-blur-md hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs text-foreground/50 font-mono block mb-1">
                    {site.id}
                  </span>
                  <h3 className="font-bold text-lg">{site.name}</h3>
                </div>
                <div
                  className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                    site.status === "ONLINE"
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : site.status === "SYNCING"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {site.status}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-foreground/70 font-mono mt-4">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4" /> Load: {site.load}
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span className="group-hover:text-accent transition-colors">
                    Sys.OK
                  </span>
                </div>
              </div>
              
              {/* Decorative progress bar */}
              <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                <div 
                  className={`h-full ${site.status === 'ONLINE' ? 'bg-accent' : site.status === 'SYNCING' ? 'bg-yellow-400' : 'bg-transparent'}`}
                  style={{ width: site.load }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
