import { useState } from 'react';
import Feed from './Feed';
import SignOut from './SignOut';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function Login({setUser}) {

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
        .then( response => response.json() )
        .then( data => {
            if (data.id) {
                setUser(data)
               navigate('/feed')
            } else if (data.errors) {
                setError(data.errors)
            }

        })
    }
    function handleSignUp(){
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

        <div className="home">
        <form >
            {/* <p style={{color: 'red'}}>{error ? error : null}</p> */}

            <p>Login:</p>

            <input
                type="text" onChange={handleChangeUsername} value={username} placeholder='username'
            />

            <input
                type="password" onChange={handleChangePassword} value={password} placeholder='password'
            />

            {/* <input
                type="submit" value="Login"
            /> */}
            <button onClick={handleLogin}> login </button>
        </form>

        <button onClick={handleSignUp}>Create an account</button>

        </div>
    )
}