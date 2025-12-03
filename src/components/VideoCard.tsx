import { Play, Lock, Download } from 'lucide-react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface VideoCardProps {
    id: string;
    title: string;
    duration: string;
    thumbnailColor?: string;
    thumbnailImage?: string;
    isLocked?: boolean;
    downloaded?: boolean;
    category?: string;
}

export function VideoCard({ id, title, duration, thumbnailColor, thumbnailImage, isLocked, downloaded, category }: VideoCardProps) {
    return (
        <Link to={`/video/${id}`} className="block group relative flex-shrink-0 w-64 snap-start">
            <div
                className={clsx(
                    "aspect-video rounded-3xl relative overflow-hidden shadow-lg transition-transform group-hover:scale-105",
                    thumbnailColor || "bg-gray-200"
                )}
            >
                {thumbnailImage && (
                    <img src={thumbnailImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                )}
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-xs font-bold text-gray-800 z-10">
                    {duration}
                </div>

                {/* Center Icon (Play or Lock) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {isLocked ? (
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                            <Lock className="w-12 h-12 text-white drop-shadow-md" />
                        </div>
                    ) : (
                        <div className="bg-black/20 group-hover:bg-black/30 p-4 rounded-full transition-colors">
                            <Play className="w-12 h-12 text-white fill-current drop-shadow-md" />
                        </div>
                    )}
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent pt-12">
                    <div className="flex items-end justify-between">
                        <div className="bg-white text-black px-3 py-1 rounded-xl text-sm font-bold shadow-md">
                            {category || "Video"}
                        </div>
                        {downloaded && (
                            <div className="bg-black/40 p-1.5 rounded-full">
                                <Download className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Title below card (optional, based on design it seems title is inside or just category) */}
            {/* Based on image 1, it shows "Social Skills", "Curiosity" etc on the card. */}
        </Link>
    );
}
