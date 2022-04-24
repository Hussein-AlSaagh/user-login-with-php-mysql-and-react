import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
const Header=()=> {
  const [auth, setAuth]= useState('');
  useEffect(()=>{
    var auth = localStorage.getItem('userName');
    setAuth(auth);
  },
  []);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/register" className="nav-link active">Register</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" className="nav-link active">Login</Link>
        </li>
      </ul>
      <span class="navbar-text">
        Wilkommen: {auth}
      </span>
    </div>
  </div>
</nav>
  )
}

export default Header;
