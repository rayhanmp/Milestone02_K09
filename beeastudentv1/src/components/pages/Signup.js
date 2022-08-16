import React from 'react'
import './Signup.css'
import { useRef, useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'




const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [matchpwd, setMatchPwd] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    console.log(pwd);
    const match = pwd === matchpwd;
    setMatchPwd(matchpwd);
  }, [pwd, matchpwd])


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (pwd !== matchpwd) {
      setErrMsg(<p className='errMsg'>Password do not match</p>);
      return;
    }
    console.log(user, pwd);
    setSuccess(true);
  }


  
return (
  <>
    {success ? (
      <section className='signupContain'>
        <div className='signupTitle'>Success!</div>
            <button className='buttonToHomes'><a href = "/Login" className='linkTo'>Log In</a></button>
      
      </section>
      ) : (
      <div className='signup-container'>
        <div className='image-container'>
          </div>
        <div className='signup-rectangle'>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <img src='./images/logo.png' className='signup-logo'></img>
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='form-input'>
              <label htmlFor='fullname' className='form-label-fullname'>
                Name
                <input
                  type='text'
                  id='fullname'
                  autoComplete='off'
                  onChange={(e) => setName(e.target.value)}
                  value = {name}
                  required
                >
                </input>
              </label>

            </div>

            <div className='form-input'>
              <label htmlFor='email' className='form-label-email'>
                Email
                <input
                  type='email'
                  id='email'
                  autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)}
                  value = {email}
                  required

                >
                </input>
              </label>

            </div>

            <div className='form-input'>
              <label htmlFor='username' className='form-label-username'>
                Username
                
                <input
                  type='text'
                  id='username'
                  ref={userRef}
                  autoComplete='off'
                  onChange={(e) => setUser(e.target.value)}
                  value = {user}
                  required

                >
                </input>
              </label>

            </div>



            <div className='form-input'>
              <label htmlFor='password' className='form-label-password'>
                Password
                
                <input
                  type='password'
                  name='password'
                  autoComplete='off'
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required

                >
                </input>
              </label>

            </div>

            <div className='form-input'>
              <label htmlFor='password2' className='form-label-password2'>
                Confirm Password
                <input
                  type='password'
                  id='password2'
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  value = {matchpwd}
                >
                </input>
              </label>
            </div>
            <button className= "signup-button" type='submit'>
            Sign Up
          </button>
          </form>

        
        </div>
        <div className='to-login'>
          Already registered? <span className="line"><Link to="/Login">Log In</Link></span>
        </div>
      </div>
      )}
  </>    
  )
}

export default Signup;