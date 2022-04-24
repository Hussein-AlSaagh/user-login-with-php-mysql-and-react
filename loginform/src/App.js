import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="container">
        < Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/dashboard"  element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
