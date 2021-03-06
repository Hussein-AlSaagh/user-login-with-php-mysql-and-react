import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
const Dashboard=()=>{
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
      <h1>Danke für deine Anmeldung {user}</h1>
    </div>
  )
}

export default Dashboard;
