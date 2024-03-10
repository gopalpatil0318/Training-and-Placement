import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [prnNo, setPrnNo] = useState('')

  const navigate = useNavigate();

  const handleLogin = () => {

    localStorage.setItem("userprn", prnNo)
    alert("Student Logged in Successfully! ✅")

    navigate('/profile', { replace: true });
  }
  return (
    <div className='tnp__register_container'>
    <div className='tnp__register_container_main'>
   
      <img src='./imgs/main_logo.jpg' />
     
  
      <h2 className='label'>Login</h2>
      
      <div>
        <label>PRN</label>
        <input type='number' placeholder='Your PRN' onChange={(e)=> setPrnNo(e.target.value)}/>
      </div>

      <div>
        <label>Password</label>
        <input type='password' placeholder='********'/>
      </div>

      <div>
        <button onClick={ handleLogin }>Login</button>
        
      </div>
        


    </div>
    
</div>
    
  )
}

export default Login