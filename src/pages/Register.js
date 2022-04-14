import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../auth/firebase';

const Register = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    const displayName= `${firstName} ${lastName}`;
    createUser(email, password, displayName, navigate);
    console.log(firstName, lastName, navigate);
  }
  return (
    <div className='d-flex justify-content-center'>
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className='form-title display-3'>Register</h1>

        <form id="register">
          
          <div className='mb-3'>
            <label htmlFor="first-name" className='form-label'>First Name</label>
            <input type="text" placeholder='Enter your first name...' id="first-name" className='form-control'  required onChange={(e)=> setFirstName(e.target.value)} />
            <label htmlFor="last-name" className='form-label'>Last Name</label>
            <input type="text" placeholder='Enter your last name...' id="last-name" className='form-control' required onChange={(e)=> setLastName(e.target.value)} />
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" placeholder='Enter your email...' id="email" className='form-control' required onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" placeholder='Enter your password...' id="password" className='form-control' required onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <input type="button" className='btn btn-primary form-control' value="Register" onClick={handleSubmit} />
          
        </form>
      </div>
    </div>
  )
}

export default Register