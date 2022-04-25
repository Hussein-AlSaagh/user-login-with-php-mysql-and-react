import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
const Registration=()=>{
  const [auth, setAuth]= useState('');
  const [user, setUser]= useState('');
  let navigate = useNavigate();
  useEffect(()=>{
    var auth = localStorage.getItem('email');
    var userName = localStorage.getItem('userName');

    setAuth(auth);
    setUser(userName);
  },
  []);
  return (
    <div className="row">
      <h1>Danke für deine Registrierung {user} du kannst dich jetzt mit deiner registrierten E-Mail anmelden.</h1>
    </div>
  )
}

export default Registration;
