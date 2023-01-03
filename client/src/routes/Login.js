import { useState } from 'react'
import Feed from './Feed';
import SignOut from './SignOut';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


export default function Login() {

    const [user, setUser] = useState({})

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
console.log(user)

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
            } else if (data.errors) {
                setError(data.errors)
            }

        })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    function handleSignout(){

    fetch("/logout",{
      method: "DELETE",
    })
    setUser({})


  }

//     if (user && user.id) {
//     return (
//        <>
//        <h1> {user.id} </h1>
//        <h1> {user.bio} </h1>
//        </>
//     )
//  }


    return (
        <div className="home">
        <form onSubmit={handleLogin}>
            <p style={{color: 'red'}}>{error ? error : null}</p>

            <p>Login:</p>

            <input
                type="text" onChange={handleChangeUsername} value={username} placeholder='username'
            />

            <input
                type="password" onChange={handleChangePassword} value={password} placeholder='password'
            />

            <input
                type="submit" value="Login"
            />
        </form>

        <button onClick={handleSignout}>Sign Out</button>
        </div>
    )
}