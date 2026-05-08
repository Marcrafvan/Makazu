// app/page.tsx
"use client";
import Link from 'next/link';
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0 && e.deltaX === 0) {
        e.preventDefault();
        
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;
        
        const scrollAmount = container.clientWidth;
        
        if (e.deltaY > 0) {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main 
  ref={scrollContainerRef} 
  className="flex h-[100dvh] w-screen overflow-x-auto snap-x snap-mandatory bg-transparent text-slate-200 font-sans hide-scrollbar"
>
      
      {/* 1. Landing & Contact Section */}
      <section className="min-w-full h-full overflow-y-auto flex flex-col justify-center items-center snap-center p-6 md:p-10 border-r border-red-900/30">
        <div className="flex flex-col items-center justify-center min-h-max py-10">
          
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-center">
            MARCUS STEVEN <span className="text-red-600">BASANTA</span>
          </h1>
          <h2 className="text-lg md:text-2xl mb-12 text-slate-400 text-center px-4">
            B.S. Information Technology - Animation & Game Development
          </h2>
          
          <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-red-600/30 shadow-[0_0_40px_rgba(220,38,38,0.15)] text-center w-full max-w-sm md:max-w-md">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-red-500">Contact Information</h3>
            <p className="text-base md:text-lg mb-3 hover:text-white transition-colors break-words">
              <a href="mailto:marcussteven.basanta.10202003@gmail.com">marcussteven.basanta.10202003@gmail.com</a>
            </p>
            <p className="text-base md:text-lg mb-3 hover:text-white transition-colors break-words">
              <a href="https://www.linkedin.com/in/marcrafvan/" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/marcrafvan/
              </a>
            </p>
            <p className="text-base md:text-lg hover:text-white transition-colors">
              <a href="tel:+639982515178">+63 998 251 5178</a>
            </p>
          </div>
          
          <div className="mt-12 md:mt-16 flex flex-col items-center animate-pulse text-zinc-500">
            <p className="mb-2 uppercase tracking-widest text-xs md:text-sm font-bold text-red-700">Scroll Down or Right</p>
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Capstone Project Section */}
      <section className="min-w-full h-full overflow-y-auto flex flex-col justify-center items-center snap-center p-6 md:p-10 border-r border-red-900/30 relative">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 text-[6rem] md:text-[10rem] font-black text-zinc-900/50 z-0 select-none pointer-events-none">01</div>
        
        <div className="z-10 w-full max-w-5xl py-20 md:py-0 mt-16 md:mt-0 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 border-b-2 border-red-600 inline-block pb-2 text-center">SeaTus VR</h2>
          <p className="text-red-400 mb-8 font-mono text-sm md:text-base text-center">Capstone Project • Virtual Reality</p>
          
          <div className="w-full aspect-video max-w-4xl bg-black rounded-xl overflow-hidden border border-zinc-800 shadow-[0_0_30px_rgba(220,38,38,0.1)] group hover:border-red-500 transition-colors">
            <iframe 
              className="w-full h-full pointer-events-auto"
              src="https://www.youtube.com/embed/_5dxX7xuMqM?si=lNIT5HV1ZMWMcFzU" 
              title="SeaTus VR Trailer" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* 3. Game Assets Section */}
      <section className="min-w-full h-full overflow-y-auto flex flex-col justify-center items-center snap-center p-6 md:p-10 border-r border-red-900/30 relative">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 text-[6rem] md:text-[10rem] font-black text-zinc-900/50 z-0 select-none pointer-events-none">02</div>
        <div className="z-10 w-full max-w-6xl py-20 md:py-0 mt-16 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 border-b-2 border-red-600 inline-block pb-2">Game Assets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            <div className="bg-zinc-900 p-6 rounded-xl hover:border-red-500 border border-zinc-800 transition-all flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">SeaTus - Reef Manta Ray</h3>
              <p className="text-red-400 mb-4 font-mono text-xs">Autodesk Maya • Unity</p>
              
              <div className="w-full aspect-video bg-zinc-950 rounded-lg overflow-hidden mb-4">
                 <iframe 
                  title="Sketchfab Model" 
                  className="w-full h-full pointer-events-auto"
                  src="https://sketchfab.com/models/267fb47f6f1f41a4b0dd3916607c0436/embed" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; vr" 
                  allowFullScreen>
                </iframe>
              </div>
              <p className="text-sm text-slate-400">Interactive 3D preview of an animal asset modeled specifically for the SeaTus VR capstone project.</p>
            </div>

            {/* Gallery Redirect Card */}
            <Link href="/gallery" className="bg-zinc-900 p-6 rounded-xl hover:border-red-500 border border-zinc-800 transition-all flex flex-col cursor-pointer group">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Work Gallery</h3>
              <p className="text-red-400 mb-4 font-mono text-xs">View All Past Works</p>
              
              <div className="w-full aspect-video bg-zinc-950 rounded-lg overflow-hidden mb-4 relative flex items-center justify-center border border-zinc-800 group-hover:border-red-500/50 transition-colors">
                 {/* Replaced SVG with a background thumbnail image */}
                 <img 
                   src="/gallery/Weapon War Hammer Bump Map.jpg" 
                   alt="Gallery Preview"
                   className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/40 group-hover:bg-transparent transition-colors">
                     <p className="text-sm font-bold text-white tracking-widest drop-shadow-md">OPEN GALLERY</p>
                 </div>
              </div>
              <p className="text-sm text-slate-400">A comprehensive collection of my previous 3D modeling projects, environment props, and assets. Including Game Systems and Concepts</p>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. Featured Coding Project Section */}
      <section className="min-w-full h-full overflow-y-auto flex flex-col justify-center items-center snap-center p-6 md:p-10 relative">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 text-[6rem] md:text-[10rem] font-black text-zinc-900/50 z-0 select-none pointer-events-none">03</div>
        <div className="z-10 w-full max-w-6xl py-20 md:py-0 mt-16 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 border-b-2 border-red-600 inline-block pb-2">Featured Project</h2>

          <div className="flex flex-col lg:flex-row gap-8 items-center bg-zinc-900/40 rounded-2xl border border-zinc-800 p-6 md:p-8">
            
            {/* Project Details */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">SocialDesk</h3>
              <p className="text-red-400 mb-6 font-mono text-sm">TypeScript • PLpgSQL • Other</p>
              <p className="text-base text-slate-400 leading-relaxed">
                All-in-One Social Media Management & Analytics System for OLLOPA Corp. Schedule and publish content across multiple platforms (e.g., Facebook and TikTok) from a single dashboard, while tracking real-time engagement and visualizing weekly growth trends through analytics.
              </p>
            </div>

            {/* Screenshot Showcase Grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
              
              {/* Large Main Screenshot */}
              <div className="col-span-2 aspect-[21/9] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 relative group">
                <img 
                  src="/gallery/SocialDesk/SD_Login.png" 
                  alt="SocialDesk Login Page" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none">
                  <span className="text-white font-medium tracking-widest text-sm bg-black/60 px-4 py-2 rounded-full backdrop-blur-md group-hover:opacity-0 transition-opacity">LOGIN PAGE</span>
                </div>
              </div>

              {/* Small Screenshot 1 */}
              <div className="aspect-video bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 relative group">
                <img 
                  src="/gallery/SocialDesk/SD_Analytics.png" 
                  alt="SocialDesk Analytics Page" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none">
                  <span className="text-white font-medium tracking-widest text-xs bg-black/60 px-3 py-1 rounded-full backdrop-blur-md group-hover:opacity-0 transition-opacity">ANALYTICS</span>
                </div>
              </div>

              {/* Small Screenshot 2 */}
              <div className="aspect-video bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 relative group">
                <img 
                  src="/gallery/SocialDesk/SD_Dashboard.png" 
                  alt="SocialDesk Dashboard" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none">
                  <span className="text-white font-medium tracking-widest text-xs bg-black/60 px-3 py-1 rounded-full backdrop-blur-md group-hover:opacity-0 transition-opacity">DASHBOARD</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}