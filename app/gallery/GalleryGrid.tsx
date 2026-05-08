// app/gallery/GalleryGrid.tsx
"use client";

import { useState, useEffect } from "react";

export default function GalleryGrid({ items }: { items: any[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Listen for scroll events to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      // Show the button if the user scrolls down more than 300 pixels
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to smoothly scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-500 transition-colors flex flex-col group">
            
            {/* Media Container */}
            <div className="w-full aspect-video bg-black relative overflow-hidden">
              
              {/* Render Image with Click Event */}
              {item.type === 'image' && (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedImage(item.src)}
                />
              )}

              {/* Render Local Video */}
              {item.type === 'video' && (
                <video 
                  src={item.src} 
                  controls 
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                />
              )}

              {/* Render YouTube Embed */}
              {item.type === 'youtube' && (
                <iframe 
                  src={item.src} 
                  title={item.title}
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              )}
            </div>

            {/* Item Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full flex justify-center items-center">
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 md:-right-12 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-red-600 rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation(); // Prevents the backdrop click from firing twice
                setSelectedImage(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Enlarged Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-zinc-800"
            />
          </div>
        </div>
      )}

      {/* Scroll to Top Floating Action Button */}
      <div 
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="p-4 bg-zinc-900 border border-zinc-700 hover:border-red-500 hover:bg-zinc-800 text-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all group"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 text-zinc-400 group-hover:text-red-500 group-hover:-translate-y-1 transition-all" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}