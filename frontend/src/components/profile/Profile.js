import React, { useState, useEffect } from 'react';
import './profile.css';
import Header from '../header/Header';
import { jsPDF } from 'jspdf';

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


  const downloadPdf = () => {
    const doc = new jsPDF();
    
    const imagePath = './imgs/main_logo.jpg'; 
    doc.addImage(imagePath, 'JPEG', 17, 0, 30, 30);

    doc.setFontSize(14);
    doc.text('Shirpur Education Society\'s ', 90, 9);

    doc.setFontSize(20);
    doc.text('R. C. Patel Institute of Technology, Shirpur', 55, 17);

    doc.setFontSize(12);
    doc.text('An Autonomous Institute ', 97, 23);

    doc.setLineWidth(1);
    doc.line(5, 32, 205, 32); // Horizontal line

    doc.setFontSize(18);
    doc.text('Personal Information', 10, 40);
    doc.setFontSize(14);
    doc.text(`Name: ${data.fullname}`, 10, 50);
    doc.text(`Mobile: ${data.mob}`, 10, 56);
    doc.text(`Email: ${data.email}`, 10, 62);
    doc.text(`Birthdate: ${data.birthdate}`, 10, 68);
    doc.text(`Gender: ${data.gender}`, 10, 74);
    doc.text(`Bloodgroup: ${data.bloodgroup}`, 10, 80);
    doc.text(`Adhar Number: ${data.adharnum}`, 10, 86);
    doc.text(`Cast: ${data.cast}`, 10, 92);
    doc.text(`Father's Name: ${data.fathername}`, 10, 98);
    doc.text(`Father's Mobile: ${data.fathermob}`, 10, 104);
    doc.text(`Father's Occupation: ${data.fatherocpn}`, 10, 110);
    doc.text(`Mother's Name: ${data.mothername}`, 10, 116);
    doc.text(`Mother's Mobile: ${data.mothermob}`, 10, 122);
    doc.text(`Mother's Occupation: ${data.mohterocpn}`, 10,128);
    doc.text(`Local Address: ${data.localaddress}`, 10, 134);
    doc.text(`City: ${data.city}`, 10, 140);
    doc.text(`District: ${data.dist}`, 10, 146);
    doc.text(`State: ${data.state}`, 10, 152);
    doc.text(`Pincode: ${data.pincode}`, 10, 158);

    doc.setFontSize(18);
    doc.text('Academic Information', 110, 40);
    doc.setFontSize(14);
    doc.text(`PRN: ${data.prn}`, 110, 50);
    doc.text(`Tenth Grade Marks: ${data.tenthmarks}`, 110, 56);
    doc.text(`Type of Diploma: ${data.tord}`, 110, 62);
    doc.text(`Diploma Percentage: ${data.tordpercentage}`, 110, 68);
    doc.text(`Admission Type: ${data.admission}`, 110, 74);
    doc.text(`Department: ${data.department}`, 110, 80);
    doc.text(`Division: ${data.division}`, 110, 86);
    doc.text(`Semester 1 SGPA: ${data.sem1sgpa}`, 110, 92);
    doc.text(`Semester 1 Backlog: ${data.sem1backlog}`, 110, 98);
    doc.text(`Semester 2 SGPA: ${data.sem2sgpa}`, 110, 104);
    doc.text(`Semester 2 Backlog: ${data.sem2backlog}`, 110, 110);
    doc.text(`Semester 3 SGPA: ${data.sem3sgpa}`, 110, 116);
    doc.text(`Semester 3 Backlog: ${data.sem3backlog}`, 110, 122);
    doc.text(`Semester 4 SGPA: ${data.sem4sgpa}`, 110, 128);
    doc.text(`Semester 4 Backlog: ${data.sem4backlog}`, 110, 134);
    doc.text(`Semester 5 SGPA: ${data.sem5sgpa}`, 110, 140);
    doc.text(`Semester 5 Backlog: ${data.sem5backlog}`, 110, 146);
    doc.text(`Semester 6 SGPA: ${data.sem6sgpa}`, 110, 152);
    doc.text(`Semester 6 Backlog: ${data.sem6backlog}`, 110, 158);
    doc.text(`Live KTs: ${data.livekts}`, 110, 164);
    doc.text(`Gap Year: ${data.gap}`, 110, 170);

    doc.setLineWidth(1);
    doc.line(5, 285, 205, 285); 

    doc.setFontSize(12);
    doc.text('T&P Cell Contact - tandp@rcpit.ac.in, 9403560548, 9860107963', 45, 292);
   
    doc.save('student_info.pdf');
};

  

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
              <p className='profile_info'>12/Diploma: {data.tord}</p>
              <p className='profile_info'>{data.tord} Percentage: {data.tordpercentage}</p>
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
              <button onClick={downloadPdf}>Download PDF</button>
              
            </div>
         
          </div>
        </div>
      </div>
                    
      
    </div>
  );
}

export default Profile;
