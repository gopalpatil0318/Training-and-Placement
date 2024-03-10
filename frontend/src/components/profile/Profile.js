import React, { useState, useEffect } from 'react';
import './profile.css';
import Header from '../header/Header';

function Profile() {
  const [data, setData] = useState({});


  useEffect(() => {
    const prn = localStorage.getItem('userprn');
    // const prn = localStorage.getItem('userprn');
    console.log(prn)
    fetch(`http://localhost:8080/api/get-data?prn=${prn}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='tnp__profile_container'>
      <Header />
      <div className='my_container'>
        <div className='tnp__profile_container_main'>
          <div className='tnp__profile_container_left'>
            <div className='tnp__profile_container_left_profile'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6kHZ5dGQTvZsLm9_ZJkWx47dt6IY0pKR2K2qGOhhyCgNBJOiLEQXObJq-0l7dTGlC2Qk&usqp=CAU' alt='Profile' />
              <h4 className='profile_fullname'>{data.fullname}</h4>
              <p className='profile_email'>{data.email}</p>
              <p className='profile_email'>{data.about}</p>
              <ul className='profile_skills'>
                {data.skills && data.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className='profile_icons'>
                <a href={data.github} target='_blank' rel='noopener noreferrer'>
                  <i className='fa fa-github'></i>
                </a>
                <a href={data.linkedin} target='_blank' rel='noopener noreferrer'>
                  <i className='fa fa-linkedin-square'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='tnp__profile_container_right'>
            <div className='tnp__profile_container_right_information'>
              <i><h4>Personal Information</h4></i>
              <hr />
              <p className='profile_info'>Name: {data.fullname}</p>
              <p className='profile_info'>Mobile: {data.mob}</p>
              <p className='profile_info'>Email: {data.email}</p>
              <p className='profile_info'>Birthdate: {data.birthdate}</p>
              <p className='profile_info'>Gender: {data.gender}</p>
              <p className='profile_info'>Bloodgroup: {data.bloodgroup}</p>
              <p className='profile_info'>Adhar Number: {data.adharnum}</p>
              <p className='profile_info'>Cast: {data.cast}</p>
              <p className='profile_info'>Father's Name: {data.fathername}</p>
              <p className='profile_info'>Father's Mobile: {data.fathermob}</p>
              <p className='profile_info'>Father's Occupation: {data.fatherocpn}</p>
              <p className='profile_info'>Mother's Name: {data.mothername}</p>
              <p className='profile_info'>Mother's Mobile: {data.mothermob}</p>
              <p className='profile_info'>Mother's Occupation: {data.mohterocpn}</p>
              <p className='profile_info'>Local Address: {data.localaddress}</p>
              <p className='profile_info'>City: {data.city}</p>
              <p className='profile_info'>District: {data.dist}</p>
              <p className='profile_info'>State: {data.state}</p>
              <p className='profile_info'>Pincode: {data.pincode}</p>
              <hr />
              <i><h4>Academics Information</h4></i>
              <hr />
              <p className='profile_info'>PRN: {data.prn}</p>
              <p className='profile_info'>Tenth Grade Marks: {data.tenthmarks}</p>
              <p className='profile_info'>Type of Diploma: {data.tord}</p>
              <p className='profile_info'>Diploma Percentage: {data.tordpercentage}</p>
              <p className='profile_info'>Admission Type: {data.admission}</p>
              <p className='profile_info'>Department: {data.department}</p>
              <p className='profile_info'>Division: {data.division}</p>
              <p className='profile_info'>Semester 1 SGPA: {data.sem1sgpa}</p>
              <p className='profile_info'>Semester 1 Backlog: {data.sem1backlog}</p>
              <p className='profile_info'>Semester 2 SGPA: {data.sem2sgpa}</p>
              <p className='profile_info'>Semester 2 Backlog: {data.sem2backlog}</p>
              <p className='profile_info'>Semester 3 SGPA: {data.sem3sgpa}</p>
              <p className='profile_info'>Semester 3 Backlog: {data.sem3backlog}</p>
              <p className='profile_info'>Semester 4 SGPA: {data.sem4sgpa}</p>
              <p className='profile_info'>Semester 4 Backlog: {data.sem4backlog}</p>
              <p className='profile_info'>Semester 5 SGPA: {data.sem5sgpa}</p>
              <p className='profile_info'>Semester 5 Backlog: {data.sem5backlog}</p>
              <p className='profile_info'>Semester 6 SGPA: {data.sem6sgpa}</p>
              <p className='profile_info'>Semester 6 Backlog: {data.sem6backlog}</p>
              <p className='profile_info'>Live KTs: {data.livekts}</p>
              <p className='profile_info'>Gap Year: {data.gap}</p>
              <hr />
              <i><h4>Skillset</h4></i>
              <hr />
              <p className='profile_info'>About: {data.about}</p>
              <p className='profile_info'>Interests: {data.interest}</p>
              <p className='profile_info'>Skills: </p>
              <p className='profile_info'>Project 1 Title: {data.project1title}</p>
              <p className='profile_info'>Project 1 Description: {data.project1description}</p>
              <p className='profile_info'>Project 2 Title: {data.project2title}</p>
              <p className='profile_info'>Project 2 Description: {data.project2description}</p>
              <p className='profile_info'>GitHub: <a href={data.github} target="_blank" rel="noopener noreferrer">{data.github}</a></p>
              <p className='profile_info'>LinkedIn: <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>
              <p className='profile_info'>LeetCode: <a href={data.leetcode} target="_blank" rel="noopener noreferrer">{data.leetcode}</a></p>
              <p className='profile_info'>GeeksforGeeks: <a href={data.geeksforgeeks} target="_blank" rel="noopener noreferrer">{data.geeksforgeeks}</a></p>
 
              {/* Add skills and project information here */}
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
