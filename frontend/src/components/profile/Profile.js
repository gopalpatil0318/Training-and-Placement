import React, { useState, useEffect } from 'react';
import './profile.css';
import Header from '../header/Header';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

function Profile() {
  const [data, setData] = useState({});


  useEffect(() => {
    const prn = localStorage.getItem('userprn');
    console.log(prn)
    fetch(`http://localhost:8080/api/get-data?prn=${prn}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


  const downloadPdf = () => {
    const doc = new jsPDF();

    // Constants Values
    const student_img = './imgs/gopal_student.png'
    const imagePath = './imgs/main_logo.jpg';
    doc.addImage(imagePath, 'JPEG', 17, 0, 30, 30);
    // Perfect Half of entire document on x axis
    const centerX = doc.internal.pageSize.width / 2;

    // Pdf Header 
    doc.setFontSize(14);
    doc.text('Shirpur Education Society\'s ', 90, 9);

    doc.setFontSize(20);
    doc.text('R. C. Patel Institute of Technology, Shirpur', 55, 17);

    doc.setFontSize(12);
    doc.text('(An Autonomous Institute) ', 97, 23, {
      fontsize: 12
    });

    doc.setFontSize(12);
    doc.text('Training and Placement Cell', 93, 28, {
      fontsize: 13,
    });

    doc.setLineWidth(1);
    doc.line(5, 32, 205, 32); // Horizontal line


    // Pdf Main content

    // Main Content Heading
    doc.setFontSize(20);
    doc.text("Student Complete Information", centerX, 42, { align: 'center' });


    const personal_info_rows = [

      [{ content: "Name :", styles: { halign: 'start' } }, { content: data.fullname || " ", styles: { halign: 'start' } }],
      [{ content: "Department : ", styles: { halign: 'start' } }, { content: data.department || " ", styles: { halign: 'start' } }],
      [{ content: "PRN :", styles: { halign: 'start' } }, { content: data.prn || "", styles: { halign: 'start' } }],
      [{ content: "Mobile No. :", styles: { halign: 'start' } }, { content: data.mob || "", styles: { halign: 'start' } }],
      [{ content: "Email Address :", styles: { halign: 'start' } }, { content: data.email || "", styles: { halign: 'start' } }],
      [{ content: "Date Of Birth :", styles: { halign: 'start' } }, { content: data.birthdate || "", styles: { halign: 'start' } }],
      [{ content: "Gender :", styles: { halign: 'start' } }, { content: data.gender || "", styles: { halign: 'start' } }],
      [{ content: "Father's Name :", styles: { halign: 'start' } }, { content: data.fathername || "", styles: { halign: 'start' } }],
      [{ content: "Mother's Name :", styles: { halign: 'start' } }, { content: data.mothername || "", styles: { halign: 'start' } }],
      [{ content: "Father's Occupation :", styles: { halign: 'start' } }, { content: data.fatherocpn || "", styles: { halign: 'start' } }],
      [{ content: "Mother's Occupation :", styles: { halign: 'start' } }, { content: data.mohterocpn || "", styles: { halign: 'start' } }],
      [{ content: "Father's Mobile No. :", styles: { halign: 'start' } }, { content: data.fathermob || "", styles: { halign: 'start' } }],
      [{ content: "Mother's Mobile No. :", styles: { halign: 'start' } }, { content: data.mothermob || "", styles: { halign: 'start' } }],
      [{ content: "Local Address :", styles: { halign: 'start' } }, { content: data.localaddress || "", styles: { halign: 'start' } }],
      [{ content: "Pincode :", styles: { halign: 'start' } }, { content: data.pincode || "", styles: { halign: 'start' } }],
      [{ content: "Blood Group :", styles: { halign: 'start' } }, { content: data.bloodgroup || "", styles: { halign: 'start' } }],
      [{ content: "Admission Type :", styles: { halign: 'start' } }, { content: data.admission || "", styles: { halign: 'start' } }],
      [{ content: "Tenth Grade Marks :", styles: { halign: 'start' } }, { content: data.tenthmarks || "", styles: { halign: 'start' } }],
      [{ content: "Type of Diploma :", styles: { halign: 'start' } }, { content: data.tord || "", styles: { halign: 'start' } }],
      [{ content: "Diploma Percentage :", styles: { halign: 'start' } }, { content: data.tordpercentage || "", styles: { halign: 'start' } }],
      [{ content: "Divison :", styles: { halign: 'start' } }, { content: data.division || "", styles: { halign: 'start' } }],
      [{ content: "Cast :", styles: { halign: 'start' } }, { content: data.cast || "", styles: { halign: 'start' } }],
      [{ content: "City :", styles: { halign: 'start' } }, { content: data.city || "", styles: { halign: 'start' } }],
      [{ content: "District :", styles: { halign: 'start' } }, { content: data.dist || "", styles: { halign: 'start' } }],
      [{ content: "State :", styles: { halign: 'start' } }, { content: data.state || "", styles: { halign: 'start' } }],
      [{ content: "LG Name :", styles: { halign: 'start' } }, { content: "J.S.Sonawane", styles: { halign: 'start' } }]
    ];

    doc.autoTable({
      body: personal_info_rows,
      startY: 45,
      startX: 20,
      theme: 'striped',
      table: {
        theme: 'grid', // Add borders to the table cells
      },
      options: {
        tableWidth: '60' // Adjust table width automatically based on content
      },
      head: [
        [{ content: 'Personal Information', colSpan: 2, styles: { halign: 'start' } }] // Header spanning two columns
      ]
    });


    // Student Image

    // Calculate the x-coordinate to center the image horizontally
    const imageWidth = 40; // Width of the image
    const availableWidth = doc.internal.pageSize.getWidth() - 140; // Width available for the image (page width minus left margin)
    const xCoordinate = 140 + (availableWidth - imageWidth) / 2; // Calculate the x-coordinate

    // Add the image at the calculated x-coordinate
    doc.addImage(student_img, 'PNG', xCoordinate, 55, 40, 40);

    // Draw a border around the image
    doc.setLineWidth(0.5);
    doc.rect(xCoordinate, 55, 40, 40);
    doc.stroke();

    // First Page -- Footer
    doc.setLineWidth(1);
    doc.line(5, 285, 205, 285);

    doc.setFontSize(12);
    doc.text('T&P Cell Contact - tandp@rcpit.ac.in, 9403560548, 9860107963', 45, 292);

    // Page No
    doc.text(`Page 1/2`, 185, doc.internal.pageSize.getHeight() - 6);


    // Second Page
    // Table --> Academic Information
    doc.addPage()

    // Pdf Header 
    const imagePathPg2 = './imgs/main_logo.jpg';
    doc.addImage(imagePathPg2, 'JPEG', 17, 0, 30, 30);
    doc.setFontSize(14);
    doc.text('Shirpur Education Society\'s ', 90, 9);

    doc.setFontSize(20);
    doc.text('R. C. Patel Institute of Technology, Shirpur', 55, 17);

    doc.setFontSize(12);
    doc.text('(An Autonomous Institute) ', 97, 23, {
      fontsize: 12
    });

    doc.setFontSize(12);
    doc.text('Training and Placement Cell', 93, 28, {
      fontsize: 13,
    });

    doc.setLineWidth(1);
    doc.line(5, 32, 205, 32); // Horizontal line

    // Table -- Academic information
    const academic_info_columns = [
      { content: "Semesters", styles: { halign: 'center' } },
      { content: "SGPA", styles: { halign: 'center' } },
      { content: "Backlog Status", styles: { halign: 'center' } },
      { content: "" }
    ];
    const academic_info_rows = [
      [{ content: 'First Year (FY-Btech)', colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
      [{ content: "Semester 1", styles: { halign: 'center' } }, { content: data.sem1sgpa | "", styles: { halign: 'center' } }, { content: data.sem1backlog | "", styles: { halign: 'center' } }],
      [{ content: "Semester 2", styles: { halign: 'center' } }, { content: data.sem2sgpa | "", styles: { halign: 'center' } }, { content: data.sem2backlog | "", styles: { halign: 'center' } }],
      [{ content: 'Second Year (SY-Btech)', colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
      [{ content: "Semester 3", styles: { halign: 'center' } }, { content: data.sem3sgpa | "", styles: { halign: 'center' } }, { content: data.sem3backlog | "", styles: { halign: 'center' } }],
      [{ content: "Semester 4", styles: { halign: 'center' } }, { content: data.sem4sgpa | "", styles: { halign: 'center' } }, { content: data.sem4backlog | "", styles: { halign: 'center' } }],
      [{ content: 'Third Year (TY-Btech)', colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
      [{ content: "Semester 5", styles: { halign: 'center' } }, { content: data.sem5sgpa | "", styles: { halign: 'center' } }, { content: data.sem5backlog | "", styles: { halign: 'center' } }],
      [{ content: "Semester 6", styles: { halign: 'center' } }, { content: data.sem6sgpa | "", styles: { halign: 'center' } }, { content: data.sem6backlog | "", styles: { halign: 'center' } }],
      [{ content: 'Fourth Year (Btech)', colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
      [{ content: "Semester 7", styles: { halign: 'center' } }, { content: data.sem1sgpa | "", styles: { halign: 'center' } }, { content: data.sem1backlog | "", styles: { halign: 'center' } }],
      [{ content: "Semester 8", styles: { halign: 'center' } }, { content: data.sem1sgpa | "", styles: { halign: 'center' } }, { content: data.sem1backlog | "", styles: { halign: 'center' } }],
      [
        { content: "Live ATKT : ", colSpan: 1, styles: { halign: 'center', fontStyle: 'bold' } },
        { content: data.livekts | "", style: { halign: 'center' } },
        { content: "Gap Year : ", colSpan: 1, styles: { halign: 'center', fontStyle: 'bold' } },
        { content: data.gap | "", style: { halign: 'center' } }
      ],
      [{ content: "CGPA (Till Date) : ", colSpan: 1, styles: { halign: 'center', fontStyle: 'bold' } }, { content: "5.6", colSpan: 3, style: { halign: 'start' } }]
    ];

    doc.autoTable({
      head: [academic_info_columns],
      body: academic_info_rows,
      startY: 45,
      startX: 20,
      theme: 'striped'
    });


    // Document Footer
    doc.setLineWidth(1);
    doc.line(5, 285, 205, 285);

    doc.setFontSize(12);
    doc.text('T&P Cell Contact - tandp@rcpit.ac.in, 9403560548, 9860107963', 45, 292);

    // Page NO
    doc.text(`Page 2/2`, 185, doc.internal.pageSize.getHeight() - 6);

    // File Name save
    doc.save(`${data.fullname}.pdf`);
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
              <p className='profile_info'>Birth date: {data.birthdate}</p>
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
