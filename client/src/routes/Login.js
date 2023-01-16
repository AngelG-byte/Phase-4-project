import { useState } from 'react';
import Feed from './Feed';
import SignOut from './SignOut';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function Login({ setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const [error, setError] = useState('')

    const navigate = useNavigate()
    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)



    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        }
        )
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    setUser(data)
                    navigate('/feed')
                } else if (data.errors) {
                    setError(data.errors)
                }

            })
    }
    function handleSignUp() {
        navigate('/signup')
    }


    // }
    // function loginplz(e){
    //     e.preventDefault()
    //     const loginInfo = {
    //         username,
    //         password
    //     }
    //     handleLogin(loginInfo)
    //     navigate("/")
    // }

    //     if (user && user.id) {
    //          return (
    //             navigate("/")
    //          )
    // }


    return (
        <div className='signup-page'>
            <div className="form-container">


                <form onSubmit={handleLogin}>
                    <div className="form-header">Welcome</div>
                    <h1 className='form-header'>Please Sign-in or <a href='/signup'>Sign-Up</a></h1>
                    <p style={{ color: 'red' }}>{error ? error : null}</p>
                    {/* {formError && <div className="form-error">{formError}</div>} */}
                    <input type="text" name="username" placeholder="username..." className="form-input" value={username} onChange={handleChangeUsername} />
                    <input type="password" name="password" placeholder="password..." className="form-input" value={password} onChange={handleChangePassword} />
                    <button type="submit" className="form-button">Sign In</button>
                </form>
                <a href='/signup'> Don't Have An Account? Sign Up! </a>
            </div>

        </div >
    )
}