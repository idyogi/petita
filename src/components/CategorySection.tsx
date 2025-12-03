interface CategorySectionProps {
    title: string;
    children: React.ReactNode;
}

export function CategorySection({ title, children }: CategorySectionProps) {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4 px-4">{title}</h2>
            <div className="flex gap-4 overflow-x-auto px-4 pb-8 snap-x no-scrollbar">
                {children}
            </div>
        </div>
    );
}
