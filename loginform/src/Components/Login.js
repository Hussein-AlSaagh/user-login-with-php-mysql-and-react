import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Login=(props)=>{
  let navigate = useNavigate();

  const [user, setUser] = useState({email:'', password:''})

  const handleChange=(e)=>{
    setUser({ ...user, [e.target.name]: e.target.value });

    //console.log(user);

  }

  const submitForm=(e)=>{
    e.preventDefault();
    const registeredData = {
      email: user.email,
      password: user.password
    }
    console.log(registeredData);

    //this insert.php file must be located on the webserver where the database is also built up not in this project
    axios.post('http://localhost:8888/php-react/php/login.php', registeredData)
    .then((result)=>{
      if(result.data.Status === '200'){
        window.localStorage.setItem('email', result.data.email);
        window.localStorage.setItem('userName',(result.data.first_name+ ' ' +result.data.last_name));
        navigate(`/dashboard`);
      }
      else {
        alert('Invalide User');
      }

    });
  }

  return (
    <div className="main-box">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Login page</h1>
        </div>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-md-6">E-Mail:</div>
            <div className="col-md-6"><input type="email" name="email" onChange={handleChange} value={user.email}/></div>
          </div>

          <div className="row">
            <div className="col-md-6">Passwort</div>
            <div className="col-md-6"><input type="password" name="password" onChange={handleChange} value={user.password}/></div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <input type="submit" name="submit" className="btn btn-success" value="Login" />
            </div>
          </div>
      </form>
      </div>
    </div>
  )
}

export default Login;
