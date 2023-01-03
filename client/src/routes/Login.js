import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';





export default function Login() {
    const [user, setUser] = useState([])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


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
            } else if (user && user.id) { toast('OMG i Work')}

            // console.log(data)
        })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    if (user && user.id) {
    return toast.info('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});


  }


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
        < ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" />
        </div>
    )
}