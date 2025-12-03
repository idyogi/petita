import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className="min-h-screen bg-kids-bg text-white font-sans selection:bg-yellow-300 selection:text-black">
            <Outlet />
        </div>
    );
}
