import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
const Home=()=>{
  return (
    <div className="main-box">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Herzlich Wilkommen</h1>
          <p>möchtest du dich anmelden oder registrieren:</p>
        </div>
        <div className="row text-center">
          <Link to="/login" className="col-md-6">
            <button type="button" className="btn btn-success btn-lg">Anmelden</button>
          </Link>
          <Link to="/register" className="col-md-6">
            <button type="button" className="btn btn-danger btn-lg">Registrieren</button>
          </Link>
        </div>
        </div>
      </div>

  )
}

export default Home;
