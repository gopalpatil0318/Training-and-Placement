import React from 'react'
import './student.css'

function Student() {
  return (
    <div className='tnp__student_container'>
        <div className='tnp__student_container_main'>
        <h2 className='label'>Profile</h2>
        <hr></hr>
        <h4>Personal Information</h4>
        <hr></hr>
        <div className='d-flex justify-content-between'>
          <div>
            <label>Photo</label>
           <input type="file" id="image" name="image" accept="image/*"/>

          </div>
          <div> 
            <label>Email</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          <div>
            <label>PRN</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          
          </div>

          <div className='d-flex justify-content-between'>
          <div>
            <label>Name</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          <div> 
            <label>Email</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          <div>
            <label>PRN</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          
          </div>
          <div className='d-flex justify-content-between'>
          <div>
            <label>Name</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          <div> 
            <label>Email</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          <div>
            <label>PRN</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          
          </div>
          <div className='d-flex justify-content-between'>
          <div>
            <label>Name</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          <div> 
            <label>Email</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          <div>
            <label>PRN</label>
            <input type='text' placeholder='Your Full Name'/>
          </div>
          
          </div>
        </div>
    </div>
  )
}

export default Student