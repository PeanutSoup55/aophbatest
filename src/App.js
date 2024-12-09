import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
    </Router>
  );
}

export default App;
