import './login.scss'

export default function 
() {
  return (
    <div className='login'>
        <div className="top">
        <img className='logo'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="logo" />
        </div>

        <div className="container">
            <form className='loginForm' action="post" >
              <h1>Sign In</h1>
              <input type="email" placeholder='Email or phine phone number' />
              <input type="password" placeholder='password' />
              <button className='signinButton'> sign In </button>
              <span>New to netflix ? <b>Sign Up now.</b> </span>
              <small>Thsi page is protected by google reCaptcha  to ensure You're not a 
                bot. <b>Learn More</b>
              </small>
            </form>
        </div>
    </div>
  )
}
