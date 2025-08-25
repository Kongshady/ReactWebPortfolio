import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
// Add more pages

export default function AppRouter() {
    return (
        <Router>
            {/* Minimal navigation bar */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}
