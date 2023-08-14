import React, {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("")

    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const res = await axios.post('/api/auth/register', {name, email, password, mobile}) 
        
        if(res && res.data.success) {
          toast.success('Registered Successfully')
          navigate('/login')
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
      }
    }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h4>Register</h4>
        <div>
          <input 
            className='form-control'
            type='text' 
            placeholder='Enter your Name' 
            value={name}
            id='inputName'
            onChange={e => setName(e.target.value)} 
            required
          />
        </div>
        <div>
          <input 
            className='form-control'
            type='email' 
            placeholder='Enter your Email' 
            value={email} 
            id='inputEmail'
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            className='form-control'
            type='password' 
            placeholder='Enter your Password' 
            value={password} 
            id='inputPassword'
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            className='form-control'
            type='text' 
            placeholder='Enter your Mobile Number' 
            value={mobile} 
            id='inputPhone'
            onChange={e => setMobile(e.target.value)} 
            required 
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register