import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signIn, signUpProvider } from '../auth/firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    signIn(email, password, navigate)
    console.log(email, password );
  }

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className='form-title display-3'>Login</h1>

        <form id="register">
          
          <div className='mb-3'>
            
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" placeholder='Enter your email...' id="email" className='form-control' required onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" placeholder='Enter your password...' id="password" className='form-control' required onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <input type="button" className='btn btn-primary form-control' value="Login" onClick={handleSubmit} />
          
        </form>
        <button className='btn btn-primary form-control' onClick={handleProviderLogin}>Continue with Google</button>
      </div>
    </div>
  )
}

export default Login