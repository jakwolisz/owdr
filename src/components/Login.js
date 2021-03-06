import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import imageDecoration from '../assets/Decoration.svg';

import { FirebaseContext } from './Firebase';

const Login = () => {
  const firebase = useContext(FirebaseContext);
  let history = useHistory();
  const [serverError, setServerError] = useState(null);
  const [errorMessages, setErrorMessages] = useState([])
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = {};

    if (values.email.length < 3 || !values.email.includes('@')) {
      errors.email = 'Podany email jest nieprawidłowy';
    }

    if (values.password.length < 6) {
      errors.password = 'Podane hasło jest za krótkie.';
    }
    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      firebase.doSignInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          setValues(prevValues => ({
            ...prevValues,
            email: "",
            password: "",
          }));
          history.push('/oddaj-rzeczy');
        })
        .catch(errorek => {
          setServerError(errorek.message)
        });
      }

  };

  return (
    <>

    <div className="login">
  
    <h2 className="login-header">Zaloguj się</h2>
    <img alt="Decoration" src={imageDecoration} />

    <form className="login-container" onSubmit={handleSubmit}>

      <label htmlFor="email">Email:</label>
      <p><input 
            id="email" 
            type="text" 
            value={values.email}
            name="email"
            onChange={handleChange} 
            />
      </p>
      {errorMessages.email && <p>{errorMessages.email}</p>}
      <label htmlFor="password">Hasło:</label>
      <p><input 
            id="password" 
            type="password" 
            value={values.password}
            name="password"
            onChange={handleChange}
            />
      </p>
      {errorMessages.password && <p>{errorMessages.password}</p>}
      <p><input type="submit" value="Zaloguj się" /></p>
      <p><NavLink to="/rejestracja">Załóż konto</NavLink></p>
      <p><NavLink to="/">Główna</NavLink></p>
      {serverError && <p>{serverError}</p>}
    </form>

    </div>
    </>
  );
};

export default Login;
