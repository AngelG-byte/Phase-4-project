import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({user, setUser}) {

  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio]= useState('')
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    fetch('/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username,
    password,
    bio
  }),
})
navigate('/')
  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)
  const handleChangeBio = e => setBio(e.target.value)

  return (
    <div>
      <form onSubmit={handleSignup}>

        <p>Create a Account:</p>

        <input
          type="text" onChange={handleChangeUsername} value={username} placeholder='username'
        />

        <input
          type="text" onChange={handleChangePassword} value={password} placeholder='password'
        />

        <input
          type="text" onChange={handleChangeBio} value={bio} placeholder='bio'
        />

        <input
          type="submit" value="Signup"
        />

      </form>
    </div>
  )
}

export default Signup