import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Lock, X } from 'lucide-react';
import { Button } from '../components/Button';
import { CategorySection } from '../components/CategorySection';
import { VideoCard } from '../components/VideoCard';
import contentData from '../data/content.json';

export function VideoDetailPage() {
    const { id } = useParams();

    // Find video in categories
    const video = contentData.categories
        .flatMap(cat => cat.videos)
        .find(v => v.id === id);

    if (!video) {
        return <div className="text-white text-center mt-20">Video not found</div>;
    }

    const RELATED_VIDEOS = contentData.relatedVideos
        .map(id => contentData.categories.flatMap(cat => cat.videos).find(v => v.id === id))
        .filter(v => v !== undefined);

    return (
        <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col">
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
                <Link to="/">
                    <Button variant="icon" className="bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                        <X className="w-8 h-8 font-bold" />
                    </Button>
                </Link>
                <Button variant="icon" className="bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                </Button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center px-4">
                <div className="w-full max-w-4xl">
                    {/* Title and Tags */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-3">{video.title}</h1>
                        <div className="flex gap-2">
                            {video.tags.map(tag => (
                                <span key={tag} className="bg-white text-black px-4 py-1.5 rounded-full font-bold text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Player Placeholder */}
                    <div className="aspect-video w-full bg-black rounded-3xl overflow-hidden relative shadow-2xl group">
                        {/* Thumbnail Image */}
                        <div className="absolute inset-0">
                            <img src="/thumbnail.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-80" />
                        </div>

                        {/* Controls Overlay */}
                        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6">
                            <div className="flex items-center gap-4">
                                <Link to={`/watch/${id}`}>
                                    <div className="bg-white text-black rounded-full p-4 hover:scale-110 transition-transform cursor-pointer">
                                        <Play className="w-8 h-8 fill-current" />
                                    </div>
                                </Link>
                                <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                                    <div className="w-1/4 h-full bg-white rounded-full" />
                                </div>
                                <span className="font-bold font-mono">{video.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Videos */}
            <div className="mt-auto bg-[#1A2639] pt-6 pb-8 rounded-t-3xl">
                <CategorySection title="">
                    {RELATED_VIDEOS.map(v => (
                        <VideoCard
                            key={v.id}
                            {...v}
                            thumbnailColor={v.color}
                            thumbnailImage={v.thumbnailImage}
                        />
                    ))}
                </CategorySection>
            </div>
        </div>
    );
}
