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
      className="flex h-[100dvh] w-screen overflow-x-auto snap-x snap-mandatory bg-zinc-950 text-slate-200 font-sans hide-scrollbar"
    >
      {/* Main Layout: Full viewport, horizontal layout, snap points, hides default scrollbar */}
      
      {/* 1. Landing & Contact Section */}
      <section className="min-w-full h-full overflow-y-auto flex flex-col justify-center items-center snap-center p-6 md:p-10 border-r border-red-900/30">
        <div className="flex flex-col items-center justify-center min-h-max py-10">
          
          {/* Main Title Styling */}
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-center">
            MARCUS STEVEN <span className="text-red-600">BASANTA</span>
          </h1>
          <h2 className="text-lg md:text-2xl mb-12 text-slate-400 text-center px-4">
            B.S. Information Technology - Animation & Game Development
          </h2>
          
          {/* Contact Box Styling: Dark background, glowing red shadow, rounded corners */}
          <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-red-600/30 shadow-[0_0_40px_rgba(220,38,38,0.15)] text-center w-full max-w-sm md:max-w-md">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-red-500">Contact Information</h3>
            <p className="text-base md:text-lg mb-3 hover:text-white transition-colors break-words">
              <a href="mailto:marcussteven.basanta.10202003@gmail.com">marcussteven.basanta.10202003@gmail.com</a>
            </p>
            <p className="text-base md:text-lg hover:text-white transition-colors">
              <a href="tel:+639982515178">+63 998 251 5178</a>
            </p>
          </div>
          
          {/* Animated pulsing scroll indicator */}
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
        {/* Large decorative background number */}
        <div className="absolute top-4 left-4 md:top-10 md:left-10 text-[6rem] md:text-[10rem] font-black text-zinc-900/50 z-0 select-none pointer-events-none">01</div>
        
        {/* Content wrapper pushed above the background number */}
        <div className="z-10 w-full max-w-5xl py-20 md:py-0 mt-16 md:mt-0 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 border-b-2 border-red-600 inline-block pb-2 text-center">SeaTus VR</h2>
          <p className="text-red-400 mb-8 font-mono text-sm md:text-base text-center">Capstone Project • Virtual Reality</p>
          
          {/* YouTube Video Container: Maintains 16:9 aspect ratio */}
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
          
          {/* Grid Layout: 1 column on mobile, 2 columns on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Asset Card */}
            <div className="bg-zinc-900 p-6 rounded-xl hover:border-red-500 border border-zinc-800 transition-all flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">SeaTus - Reef Manta Ray</h3>
              <p className="text-red-400 mb-4 font-mono text-xs">Autodesk Maya • Unity</p>
              
              {/* Sketchfab Embed Container */}
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
              
              <div className="w-full aspect-video bg-zinc-950 rounded-lg overflow-hidden mb-4 flex flex-col items-center justify-center border border-zinc-800 text-zinc-600 group-hover:bg-zinc-900 transition-colors">
                 <svg className="w-12 h-12 mb-2 text-zinc-500 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
                 <p className="text-sm font-medium group-hover:text-white transition-colors">Click to open gallery</p>
              </div>
              <p className="text-sm text-slate-400">A comprehensive collection of my previous 3D modeling projects, environment props, and assets. Including Game Systems and Concepts</p>
            </Link>

          </div>
        </div>
      </section>

      {/* 4. Coding Projects Section */}
      <section className="min-w-full h-full overflow-y-auto flex flex-col justify-center items-center snap-center p-6 md:p-10 relative">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 text-[6rem] md:text-[10rem] font-black text-zinc-900/50 z-0 select-none pointer-events-none">03</div>
        <div className="z-10 w-full max-w-5xl py-20 md:py-0 mt-16 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 border-b-2 border-red-600 inline-block pb-2">Coding Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-zinc-900 p-6 md:p-8 rounded-xl hover:border-red-500 border border-zinc-800 transition-all group">
              {/* group-hover changes the title text color when the parent card is hovered */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">SocialDesk</h3>
              <p className="text-red-400 mb-4 md:mb-6 font-mono text-xs md:text-sm">TypeScript • PLpgSQL • Other</p>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">A comprehensive social media management platform focusing on custom database architectures, seamless front-end integration, and secure back-end operations.</p>
            </div>
            <div className="bg-zinc-900 p-6 md:p-8 rounded-xl hover:border-red-500 border border-zinc-800 transition-all group">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Algorithmic Systems</h3>
              <p className="text-red-400 mb-4 md:mb-6 font-mono text-xs md:text-sm">C++ • C# • Java • Python</p>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">Advanced logic systems showcasing domain analysis, system design, and component-based reuse across multiple programming languages and environments.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}