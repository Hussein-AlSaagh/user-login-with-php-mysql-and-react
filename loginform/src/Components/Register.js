import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register=(props)=>{

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
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);

  }

  const submitForm=(e)=>{
    e.preventDefault();
    const registeredData = {
      first_name: data.first_name,
      last_name: data.last_name,
      age: data.age,
      gender: data.gender,
      email: data.email,
      password: data.password
    }
    console.log(registeredData);

    //this insert.php file must be located on the webserver where the database is also built up not in this project
    axios.post('http://localhost:8888/php-react/php/insert.php', registeredData)
    .then((result)=>{
      if(result.data.Status == 'Invalid'){
        alert('Invalide User');
      }
      else {
        history(`/successfulRegistration`);
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
          <div className="col-md-6">Vorname:*</div>
          <div className="col-md-6">
            <input type="text" name="first_name" className="form-control" onChange={handleChange} value={data.first_name} required/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Nachname:*</div>
          <div className="col-md-6">
            <input type="text" name="last_name" className="form-control" onChange={handleChange} value={data.last_name} required/>
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
            {/*<input type="text" name="gender" className="form-control" onChange={handleChange} value={data.gender}/>*/}
            <select id="gender" name="gender" className="form-select" onChange={handleChange} value={data.gender}>
              <option value="w">weiblich</option>
              <option value="m">männlich</option>
              <option value="d">divers</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">E-Mail:*</div>
          <div className="col-md-6">
            <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email} required/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">Passwort:*</div>
          <div className="col-md-6">
            <input type="password" name="password" className="form-control" onChange={handleChange} value={data.password} required/>
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
