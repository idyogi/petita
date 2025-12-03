import { TopBar } from '../components/TopBar';
import { CategorySection } from '../components/CategorySection';
import { VideoCard } from '../components/VideoCard';
import contentData from '../data/content.json';

export function HomePage() {
    return (
        <div className="pb-20">
            <TopBar />

            <div className="mt-4">
                {contentData.categories.map((category, index) => (
                    <CategorySection key={index} title={category.title}>
                        {category.videos.map(video => (
                            <VideoCard
                                key={video.id}
                                id={video.id}
                                title={video.title}
                                duration={video.duration}
                                thumbnailColor={video.color}
                                isLocked={video.isLocked}
                                category={video.category}
                                downloaded={!video.isLocked}
                                thumbnailImage={video.thumbnailImage}
                            />
                        ))}
                    </CategorySection>
                ))}
            </div>
        </div>
    );
}
