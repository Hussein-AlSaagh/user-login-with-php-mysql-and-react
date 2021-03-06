import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
const Header=()=> {
  const [auth, setAuth]= useState('');
  const [user, setUser]= useState('');
  let navigate = useNavigate();
  useEffect(()=>{
    var auth = localStorage.getItem('email');
    var userName = localStorage.getItem('userName');

    if(auth===null){
      navigate(`/`);
    }

    setAuth(auth);
    setUser(userName);
  },
  []);
  const logout=()=>{
    localStorage.removeItem('email');
    localStorage.removeItem('userName');
    localStorage.clear();
    navigate(`/`);
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">React login project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/register" className="nav-link active">Registrieren</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" className="nav-link active">Anmelden</Link>
        </li>
      </ul>
      <span class="navbar-text">
        Wilkommen: {user} | <Link to="/" onClick={logout}> Abmelden </Link>
      </span>
    </div>
  </div>
</nav>
  )
}

export default Header;
