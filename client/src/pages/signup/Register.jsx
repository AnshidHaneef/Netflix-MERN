import { useRef, useState } from 'react'
import './register.scss'

export default function Register() {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const emailRef = useRef()
const passwordRef = useRef()

const handleSubmit = ()=>{
    setEmail(emailRef.current.value)
}

const handleFinish = ()=>{
    setPassword(password.current.value)
}
  return (
    <div className='register'>
        <div className="top">
            <img className='logo'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="logo" />
            <button className='loginButton'> Sign In</button>
        </div>

        <div className="container">
            <h1>Unlimited Movies, Tv Shows, and more. </h1>
            <h2>watch Anywhere. Cancel Anytime </h2>
            <p>
                Ready To Watch? Enter Your Email to Create or Restart Your Membership.  
            </p>
           { !email ? (

            <div className="input">
                <input type="email" placeholder='email adress' ref = {emailRef} />
                <button className="registerButton" onClick={handleSubmit}> Get Started </button>
            </div>
            ):
            (
                <form className="input">
                <input type="password" placeholder='Enter Password' ref = {passwordRef} />
                <button className="registerButton" onClick={handleFinish}> Start </button>
                </form>  
            ) }
        </div>
    </div>
  )
}
