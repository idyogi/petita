import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { VideoDetailPage } from './pages/VideoDetailPage';
import { FocusedVideoPage } from './pages/FocusedVideoPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/video/:id" element={<VideoDetailPage />} />
                    <Route path="/watch/:id" element={<FocusedVideoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
