import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RSVPProvider } from './context/RSVPContext';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <RSVPProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/wedding"
            element={
              <ComingSoon
                eyebrow="The Celebration Continues"
                title="The Wedding"
                note="Details for the wedding celebration are being lovingly prepared. Please check back soon, inshaAllah."
              />
            }
          />
          <Route
            path="/valima"
            element={
              <ComingSoon
                eyebrow="The Celebration Continues"
                title="The Valima"
                note="Details for the valima reception are being lovingly prepared. Please check back soon, inshaAllah."
              />
            }
          />
        </Routes>
      </RSVPProvider>
    </Router>
  );
}

export default App;
