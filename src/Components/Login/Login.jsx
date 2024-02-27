import './Login.css'

const Login = () => {
   
    return (
        <div className="loginContainer">
            <h2>Enter Login Details</h2>
            <div className="inputEmail">
                <p>Email</p>
                <input type='email' placeholder='Enter Email'></input>
            </div>
            <div className="inputPassword">
                <p>Password</p>
                <input type='password' placeholder='Enter Password'></input>
            </div>
            <button className='loginBtn'>Login</button>
        </div>
    );
}

export default Login;