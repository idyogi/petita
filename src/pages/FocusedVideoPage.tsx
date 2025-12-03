import { useParams, Link } from 'react-router-dom';
import { X, Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import contentData from '../data/content.json';

export function FocusedVideoPage() {
    const { id } = useParams();
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const video = contentData.categories
        .flatMap(cat => cat.videos)
        .find(v => v.id === id);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
            {/* Video Player */}
            <div className="absolute inset-0 bg-black">
                <video
                    ref={videoRef}
                    src={video?.videoUrl || "/video.mp4"}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted={false}
                    controls={false}
                />
            </div>

            {/* Subtitles */}
            <div className="absolute bottom-24 left-0 right-0 text-center px-4">
                <span className="bg-black/60 text-white text-xl md:text-2xl px-6 py-3 rounded-xl font-medium">
                    {video?.subtitle || "Subtitles not available"}
                </span>
            </div>

            {/* Controls */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start bg-gradient-to-b from-black/50 to-transparent h-32 z-20">
                <Link to={`/video/${id}`} className="bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-colors">
                    <X className="w-8 h-8 text-white" />
                </Link>
            </div>

            {/* Play/Pause Overlay (Invisible mostly, visible on hover or interaction) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/10">
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-black/40 p-6 rounded-full text-white backdrop-blur-sm hover:scale-110 transition-transform"
                >
                    {isPlaying ? <Pause className="w-12 h-12 fill-current" /> : <Play className="w-12 h-12 fill-current" />}
                </button>
            </div>
        </div>
    );
}
