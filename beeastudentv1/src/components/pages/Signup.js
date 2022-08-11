import React from 'react'
import './Signup.css'
import { useRef, useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const NAME_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchpwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = setValidName(NAME_REGEX.test(name));
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name])


  useEffect(() => {
    const result = setValidUser(USER_REGEX.test(user));
    console.log(result);
    console.log(user);
    setValidUser(result);
  }, [user])

  useEffect(() => {
    const result = setValidEmail(EMAIL_REGEX.test(email));
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])
  
  useEffect(() => {
    const result = setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchpwd);
    console.log(result);
    console.log(pwd);
    const match = pwd === matchpwd;
    setMatchPwd(match);
  }, [pwd, matchpwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchpwd])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user, pwd);
    setSuccess(true);
  }


  
return (
  <>
    {success ? (
      <section>
        <h1>Success!</h1>
          <p>
            <Link to = "/Login">Sign In</Link>
          </p>
      </section>
      ) : (
      <div className='signup-container'>
        <div className='image-container'>
          <img src='./images/components1.png'></img></div>
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
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby = 'confirmname'
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => setNameFocus(false)}
                >
                </input>
              </label>
              <p id="confirmname" className={validName && !nameFocus ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            ntar
              </p>
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
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby = 'confirmemail'
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                >
                </input>
              </label>
              <p id="confirmemail" className={validEmail && !emailFocus ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            ntar
                        </p>
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
                  aria-invalid={validUser ? "false" : "true"}
                  aria-describedby = 'uidnote'
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                >
                </input>
              </label>
              <p id="uidnote" className={userFocus && user && !validUser ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
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
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby = 'pwdnote'
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                >
                </input>
              </label>
              <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
            </div>

            <div className='form-input'>
              <label htmlFor='password2' className='form-label-password2'>
                Confirm Password
                <input
                  type='password2'
                  id='password2'
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  value = {pwd}
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby = 'confirmpwd'
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                >
                </input>
              </label>
            </div>
            <p id="confirmpwd" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
            </p>
          </form>

          <button className= "signup-button" disabled={!validName ||!validUser || !validPwd || !validMatch ? true : false} >
            Sign Up
          </button>
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