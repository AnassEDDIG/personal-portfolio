import GalaxyBackground from './components/effects/GalaxyBackground';
import CursorLight from './components/effects/CursorLight';
import { useEffect } from 'react';
import { Home } from './pages/home/Home';

function App() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    
    return (
        <main>
            <CursorLight />
            <GalaxyBackground></GalaxyBackground>
            <Home />
        </main>
    );
}

export default App;
