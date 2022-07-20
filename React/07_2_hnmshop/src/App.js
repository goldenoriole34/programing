import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="" element={<About />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
