import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RSVPProvider } from './context/RSVPContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <RSVPProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </RSVPProvider>
    </Router>
  );
}

export default App;
