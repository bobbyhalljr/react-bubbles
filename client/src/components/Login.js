import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    credentials: {
      username: '',
      password: ''
    }
  })

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e => {
    e.preventDefault();

    axiosWithAuth().post('/login', user.credentials)
    .then(res => {
      console.log(res.data)

      localStorage.setItem('token', res.data.payload)
      user.props.history.push('/bubble-page')
    })
    .catch(err => console.log(err.response))
  }

  return (
    <>
      <form onSubmit={login}>
        <input 
          type='text'
          name='username'
          value={user.credentials.username}
          onChange={handleChange}
        />
        <input 
          type='password'
          name='password'
          value={user.credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
