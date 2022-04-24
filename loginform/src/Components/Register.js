import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register=()=>{

  let history = useNavigate();
  const [data, setData]=useState({
    first_name: "",
    last_name: "",
    age:"",
    gender:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value});

    //console.log(data);

  }

  const submitForm=(e)=>{
    e.preventDefaukt();
    const registeredData = {
      first_name: data.first_name,
      last_name: data.last_name,
      age: data.age,
      gender: data.gender,
      email: data.email,
      password: data.password
    }
    console.log(registeredData);

    axios.post('http://localhost:3000/user-login-with-php-mysql-and-react/loginform/src/php/insert.php', registeredData).then((result)=>{
      if(result.data.status== 'Invalid'){
        alert('Invalide User');
      }
      else {
        history(`/dashboard`);
      }

    });
  }


  return (
    <div className="main-box">
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Register</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Vorname</div>
          <div className="col-md-6">
            <input type="text" name="first_name" className="form-control" onChange={handleChange} value={data.first_name}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Nachname</div>
          <div className="col-md-6">
            <input type="text" name="last_name" className="form-control" onChange={handleChange} value={data.last_name}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Alter</div>
          <div className="col-md-6">
            <input type="number" name="age" className="form-control" onChange={handleChange} value={data.age}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Geschlecht</div>
          <div className="col-md-6">
            <input type="text" name="gender" className="form-control" onChange={handleChange} value={data.gender}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">E-Mail</div>
          <div className="col-md-6">
            <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Passwort</div>
          <div className="col-md-6">
            <input type="password" name="password" className="form-control" onChange={handleChange} value={data.password}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <input type="submit" name="submit" value="Registrieren" className="btn btn-success"/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register;
