"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation'


export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.text())
    .then((data) => {
      alert(data);
      console.log(values);
      if (data === "Logged in successfully") {
        console.log("Logged successfully");
        router.push(`/auth/user?email=${values.email}`);
      }
    })
    .catch((err) => console.log(err));
};

  return (
    <div className='d-flex w-100 vh-100 bg-black justify-content-center align-items-center'>
    <div className="bg-white p-3 rounded w-50">
      <h2>Login</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" placeholder="Enter your email" name="email" className="form-control rounded-0" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password"><strong>Password</strong></label>
          <input type="password" placeholder="Enter your password" name="password" className="form-control rounded-0" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-8">Login</button>
        <a href="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create an account</a>
      </form>
    </div>
   </div>

  );
}