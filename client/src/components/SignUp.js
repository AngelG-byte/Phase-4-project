import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({ user, setUser }) {

  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [image_url, setImage_url] = useState('')
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
        bio,
        image_url
      }),
    })
    navigate('/')
  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)
  const handleChangeBio = e => setBio(e.target.value)
  const handleChangeImage = e => setImage_url(e.target.value)

  return (
    <div className="signup-page">
      <div className="form-container">
        <form onSubmit={handleSignup}>
          <div className="form-header">Sign Up</div>
          {/* {formError && <div className="form-error">{formError}</div>} */}
          <input
            type="text" name="username" placeholder="username..." className="form-input" value={username} onChange={handleChangeUsername} />
          <input type="password" name="password" placeholder="password..." className="form-input" value={password} onChange={handleChangePassword} />
          <input type="text" className="form-input" onChange={handleChangeBio} value={bio} placeholder='bio...' />
          <input type="text" className="form-input" onChange={handleChangeImage} value={image_url} placeholder='image url...' />

          <button type="submit" className="form-button"> Sign Up</button>
        </form>
        {/* <a href="/" className='form-button' > signIN</a> */}
        <p>
          <a href='/'>Already Have an Account? Sign in!</a>
        </p>
      </div>

    </div>
  )
}

export default Signup
    // <div>
    //   <form onSubmit={handleSignup}>
    //     <p>Create a Account:</p>
    //     <input type="text" onChange={handleChangeUsername} value={username} placeholder='username' />
    //     <input type="text" onChange={handleChangePassword} value={password} placeholder='password' />
    //     <input type="text" onChange={handleChangeBio} value={bio} placeholder='bio' />
    //     <input type="text" onChange={handleChangeImage} value={image_url} placeholder='image' />
    //     <input type="submit" value="Signup" />
    //   </form>
    // </div>