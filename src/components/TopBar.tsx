import { Puzzle, Ticket, PenTool, Smile, Search, Download } from 'lucide-react';
import { Button } from './Button';
import { useState, useEffect } from 'react';

export function TopBar() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
        }
    };

    return (
        <div className="p-4 flex items-center justify-between sticky top-0 z-30 bg-[#E91E63] shadow-xl">
            {/* Profile & Logo */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-white overflow-hidden">
                    <img src="/logo.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>

                {/* Nav Icons */}
                <div className="flex items-center gap-2">
                    <NavIcon icon={<Puzzle className="w-6 h-6 text-white" />} color="bg-blue-500" />
                    <NavIcon icon={<Ticket className="w-6 h-6 text-white" />} label="Kisah" active color="bg-pink-400" />
                    <NavIcon icon={<PenTool className="w-6 h-6 text-white" />} color="bg-teal-500" />
                    <NavIcon icon={<Smile className="w-6 h-6 text-white" />} color="bg-purple-500" />
                </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                {deferredPrompt && (
                    <Button
                        variant="primary"
                        onClick={handleInstallClick}
                        className="bg-green-500 hover:bg-green-600 text-white border-2 border-white/20 shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Install App
                    </Button>
                )}
                <Button variant="primary" className="bg-[#5C6BC0] hover:bg-[#3F51B5] text-white border-2 border-white/20 shadow-[0_4px_0_0_rgba(0,0,0,0.2)]">
                    Langganan ✨
                </Button>
                <Button variant="icon" className="bg-[#0D1B2A] text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
}

function NavIcon({ icon, label, active, color }: { icon: React.ReactNode, label?: string, active?: boolean, color: string }) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className={clsx(
                "w-12 h-10 rounded-xl flex items-center justify-center transform transition-all",
                color,
                active ? "scale-110 border-2 border-white shadow-lg" : "opacity-90 rotate-3"
            )}>
                {icon}
            </div>
            {label && (
                <span className="text-xs font-bold bg-white text-kids-bg px-2 py-0.5 rounded-full shadow-sm -mt-2 z-10">
                    {label}
                </span>
            )}
        </div>
    );
}

import { clsx } from 'clsx';
