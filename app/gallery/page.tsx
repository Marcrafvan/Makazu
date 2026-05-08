// app/gallery/page.tsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import GalleryGrid from './GalleryGrid';

// 1. Put your YouTube links here. 
const youtubeEmbeds = [
  {
    id: 'yt-1',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/_5dxX7xuMqM?si=lNIT5HV1ZMWMcFzU', 
    title: 'SeaTus VR Gameplay',
    description: 'In-game footage of the capstone project.'
  },
  {
    id: 'yt-2',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/XcUzmNZgTyM?si=4GSAXZzs2tyUrcYi', 
    title: 'Visual Scripting',
    description: 'Test-run for the fps activity using visual scripting'
  },
  {
    id: 'yt-3',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/ZWAHqq8Q0kw?si=fVtr3qNZCRd_9BIV', 
    title: '2D side-scroller game',
    description: 'A game I developed for our midterm activity.'
  },
  {
    id: 'yt-4',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/Ilw6vjfVZgs?si=rMIlBHvzUW0xmGZ6', 
    title: 'Character Animation with the help of KOF Sprites',
    description: 'Character Animation'
  },
  {
    id: 'yt-5',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/xCLeItQpWj8?si=_kf0EJmG5ETqBpLo', 
    title: 'Jungle Themed Arkanoid Game',
    description: 'Summative 2 Technical Activity Themed Around a Jungle-based Arkanoid Game'
  },
  {
    id: 'yt-6',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/Qp-8RhczL8w?si=jOqjhJuoM8q9qWmM', 
    title: 'Maze-type Game with AI Pathing',
    description: 'This is a maze-type game where the player must navigate through a maze while avoiding an enemy that uses AI pathfinding to chase them.'
  },
  {
    id: 'yt-7',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/v_liLG3FT40?si=8En14e3VT0wVVSLT', 
    title: 'Timeline Activity - Pokemon Themed Slideshow Program',
    description: 'This demonstrates my personal journey in the game POKEMON ORAS'
  },
  {
    id: 'yt-8',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/QDvQcU0awlw?si=kFyTokxIqaUvdF_Q', 
    title: 'Vehicle Pathing Activity - School Bus',
    description: 'This was done by using CV Curve tool and having a game object follow the curve.'
  },
  {
    id: 'yt-9',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/EcJJ3x8dKCs?si=0zw_DSMqSzxhQhyr', 
    title: 'Shooting Test',
    description: 'This is a gameplay similar to a shooting gallery where the player must shoot targets that appear on the screen.'
  },
  {
    id: 'yt-10',
    type: 'youtube',
    src: 'https://www.youtube.com/embed/BkFVY6UUt3g?si=KU4VDTzLmiiOlMcx', 
    title: 'Door Test',
    description: 'This demonstrates a door that opens when the player approaches it and closes when they move away. There are locked and unlocked doors.'
  }
];

// 2. This helper function automatically reads the physical files in your folder
function getLocalMedia() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  
  try {
    const files = fs.readdirSync(galleryDir);
    
    return files.map((filename, index) => {
      const ext = path.extname(filename).toLowerCase();
      const isImage = ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
      const isVideo = ['.mp4', '.webm'].includes(ext);

      if (!isImage && !isVideo) return null; 

      const formattedTitle = filename
        .replace(ext, '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return {
        id: `local-${index}`,
        type: isImage ? 'image' : 'video',
        src: `/gallery/${filename}`,
        title: formattedTitle,
        description: `Past ${isImage ? 'Work' : 'Video Recording'}` 
      };
    }).filter(Boolean); 
    
  } catch (error) {
    console.warn("Gallery folder not found or empty. Please create public/gallery/");
    return [];
  }
}

export default function Gallery() {
  const localMedia = getLocalMedia() as any[];
  const allGalleryItems = [...youtubeEmbeds, ...localMedia];

  return (
    <main className="min-h-screen bg-zinc-950 text-slate-200 font-sans p-6 md:p-12">
      
      {/* Header & Navigation */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-red-900/30 pb-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
            WORK <span className="text-red-600">GALLERY</span>
          </h1>
          <p className="text-slate-400 text-lg">A collection of past projects - 3D models, animations, renders, and game systems.</p>
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-red-500 rounded-lg text-white font-medium transition-all group"
        >
          <svg className="w-5 h-5 text-zinc-500 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Render the Client Component Grid */}
      <GalleryGrid items={allGalleryItems} />

    </main>
  );
}