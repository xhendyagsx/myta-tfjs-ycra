import './App.css';
import './signika.css';
import { Route, Routes } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import History from './pages/History';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="https://xhendyagsx.github.io" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
