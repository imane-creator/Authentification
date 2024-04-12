import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/register', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => console.log(values))
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder="Entrez votre nom" name="name" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Entrez votre email" name="email" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Mot de passe</strong></label>
            <input type="password" placeholder="Entrez votre mot de passe" name="password" className="form-control rounded-0" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-8">S'inscrire</button>
          <p>Vous acceptez nos termes et conditions</p>
          <a href="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" />
        </form>
      </div>
    </div>
  );
}