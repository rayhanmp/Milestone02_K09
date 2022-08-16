import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import { useRef, useState, useEffect} from 'react';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const[user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(user, pwd);
      setUser('');
      setPwd('');
      setSuccess(true);
    }

  return (
    <>
      {success ? (
                <section className='loginredirect'>
                    <div className='loggedIn'>You are logged in!</div>
                    <br />
                    <p>
                        <button className='buttonToHome'><a href="/" className='goHome'>Go to Home</a></button>
                    </p>
                </section>
            ) : (

      <div className='login-container'>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className='login-components-right'>
          <div className='login-elements'>
            <div className='header-login'>WELCOME BACK!</div>
          </div>
        </div>
        <div className='login-components-left'>
          <div className="login-title">LOGIN</div>
          <div className='login-form'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='username-form'>
                <label htmlFor='username'>
                  <input
                    type='text-name'
                    name='username'
                    placeholder='Input your user ID or Email'
                    value={user}
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    required
                  >
                  </input>
                </label>
              </div>

              <div className='password-form'>
                <label htmlFor='password' className='password-form'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Input your password'
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                  >
                  </input>
                </label>
            </div>

            <button className='form--input' type='submit'>
              LOGIN
            </button>
            </form>
          </div>
          
        

          <div className='text-signup'>
            <div className='to-signup'>
              New User? <Link to='/Signup' className='directsignup'>Sign Up</Link>
            </div>
          </div>

        </div>
    </div>
            )}
  </>
  )
}

export default Login;