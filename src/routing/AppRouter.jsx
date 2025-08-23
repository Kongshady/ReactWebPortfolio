import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
// Add more pages

function NavButtons() {
    const navigate = useNavigate();
    return (
        <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <button style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #ccc', background: '#f9f9f9', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</button>
            <button style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #ccc', background: '#f9f9f9', cursor: 'pointer' }} onClick={() => navigate('/about')}>About</button>
        </nav>
    );
}

export default function AppRouter() {
    return (
        <Router>
            {/* Minimal navigation bar */}
            <NavButtons />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}
