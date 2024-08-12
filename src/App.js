import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Registration from './pages/Regetration';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App;
