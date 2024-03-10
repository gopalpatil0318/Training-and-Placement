import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    pass: "",
    cpass: "",
    mob: "",
    birthdate: "",
    gender: "",
    bloodgroup: "",
    adharnum: "",
    cast: "",
    fathername: "",
    fathermob: "",
    fatherocpn: "",
    mothername: "",
    mothermob: "",
    mohterocpn: "",
    localaddress: "",
    city: "",
    dist: "",
    state: "",
    pincode: "",
    prn: "",
    tenthmarks: "",
    tord: "",
    tordpercentage: "",
    admission: "",
    department: "",
    division: "",
    sem1sgpa: "",
    sem1backlog: "",
    sem2sgpa: "",
    sem2backlog: "",
    sem3sgpa: "",
    sem3backlog: "",
    sem4sgpa: "",
    sem4backlog: "",
    sem5sgpa: "",
    sem5backlog: "",
    sem6sgpa: "",
    sem6backlog: "",
    livekts: "",
    gap: "",
    about: "",
    interest: "",
    skills: [],
    project1title: "",
    project1description: "",
    project2title: "",
    project2description: "",
    github: "",
    linkedin: "",
    leetcode: "",
    geeksforgeeks: "",
  });
  
  const [stage, setStage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
    
    alert("Student Registered Successfully! ✅")

navigate('/login', { replace: true });
  };

  const nextStage = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const prevStage = () => {
    setStage((prevStage) => prevStage - 1);
  };



  const [selectedSkill, setSelectedSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillOptions, setSkillOptions] = useState(['Java', 'HTML', 'CSS', 'SRPING', 'SQL']);

  const addSkill = () => {
    if (!selectedSkill || skills.includes(selectedSkill)) {
      return;
    }

    setSkills([...skills, selectedSkill]);
    const updatedSkills = [...formData.skills, selectedSkill];
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
    setSelectedSkill('');

    setSkillOptions(skillOptions.filter(skill => skill !== selectedSkill));
  };

  const removeSkill = (skillToRemove) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(updatedSkills);

    setSkillOptions([...skillOptions, skillToRemove]);
    const updatedSkills2 = formData.skills.filter((s) => s !== skillToRemove);
    setFormData({
      ...formData,
      skills: updatedSkills2,
    });

  };


  const [tord, setTord] = useState('');

  return (
    <div className='tnp__register_container'>
      <div className='tnp__register_container_main'>
        {/* <div className='color_div'>
          <h2 className='label_tag'>Register</h2>
        </div> */}

        <img src='./imgs/main_logo.jpg' />


        <h2 className='label'>Register</h2>
        {stage === 1 && (
          <form onSubmit={nextStage}>
            <i><h5>Personal Information</h5></i>
            <hr />
            <div>
              <label>Full Name<span class="required">*</span></label>
              <input type='text' placeholder='Ex. Gopal Bharat Patil' name="fullname" value={formData.fullname} onChange={handleChange} />
            </div>


            <div>
              <label>Email<span class="required">*</span></label>
              <input type='email' placeholder='Ex. abc@gmail.com' name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Password<span class="required">*</span></label>
                <input type='password' placeholder='**********' name="pass" value={formData.pass} onChange={handleChange} />
              </div>
              <div>
                <label>Confirm Password<span class="required">*</span></label>
                <input type='password' placeholder='**********' name="cpass" value={formData.cpass} onChange={handleChange} />
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Mobile No<span class="required">*</span></label>
                <input type='number' placeholder='90XXXXXX38' name="mob" value={formData.mob} onChange={handleChange} />
              </div>
              <div>
                <label>Birthdate<span class="required">*</span></label>
                <input type='date' placeholder='Your Birthdate' name="birthdate" value={formData.birthdate} onChange={handleChange} />
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label for="cars">Gender<span class="required">*</span></label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select....</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label for="cars">Blood Group(optional)</label>
                <select name="bloodgroup" value={formData.bloodgroup} onChange={handleChange}>
                  <option value="">Select....</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O-</option>
                </select>
              </div>
            </div>


            <div className='d-flex gap'>
              <div>
                <label>Adhar Number<span class="required">*</span></label>
                <input type='number' placeholder='4031 XXXX XXXX' name="adharnum" value={formData.adharnum} onChange={handleChange} />
              </div>
              <div>
                <label for="cars">Cast<span class="required">*</span></label>
                <select name="cast" value={formData.cast} onChange={handleChange}>
                  <option value="volvo">Select....</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="NT">NT</option>
                  <option value="EBC">EBC</option>
                  <option value="Others">Other</option>
                </select>
              </div>
            </div>

            <hr />

            <div>
              <label>Father Full Name<span class="required">*</span></label>
              <input type='text' placeholder='Ex. Bharat Yadav Patil' name="fathername" value={formData.fathername} onChange={handleChange} />
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Father Mobile No<span class="required">*</span></label>
                <input type='number' placeholder='90XXXXXX38' name="fathermob" value={formData.fathermob} onChange={handleChange} />
              </div>
              <div>
                <label for="cars">Father Occupation<span class="required">*</span></label>
                <select name="fatherocpn" value={formData.fatherocpn} onChange={handleChange}>
                  <option value="">Choose an Occupation...</option>
                  <option value="Government Service">Government Service</option>
                  <option value="Private Service">Private Service</option>
                  <option value="Business/Entrepreneur">Business/Entrepreneur</option>
                  <option value="Agriculture/Farming">Agriculture/Farming</option>
                  <option value="Professional (Doctor, Engineer, Lawyer, etc.)">Professional (Doctor, Engineer, Lawyer, etc.)</option>
                  <option value="Retired">Retired</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div>
              <label>Mother Full Name<span class="required">*</span></label>
              <input type='text' placeholder='Mother Name' name="mothername" value={formData.mothername} onChange={handleChange} />
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Mother's Mobile No<span class="required">*</span> </label>
                <input type='number' placeholder='90XXXXXX38' name="mothermob" value={formData.mothermob} onChange={handleChange} />
              </div>
              <div>
                <label for="cars">Mother's Occupation<span class="required">*</span></label>
                <select name="mohterocpn" value={formData.mohterocpn} onChange={handleChange}>
                  <option value="">Choose an Occupation...</option>
                  <option value="Government Service">Government Service</option>
                  <option value="Private Service">Private Service</option>
                  <option value="Business/Entrepreneur">Business/Entrepreneur</option>
                  <option value="Agriculture/Farming">Agriculture/Farming</option>
                  <option value="Professional (Doctor, Engineer, Lawyer, etc.)">Professional (Doctor, Engineer, Lawyer, etc.)</option>
                  <option value="Retired">Retired</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <hr />

            <div>
              <label>Local Address<span class="required">*</span></label>
              <input type='Text' placeholder='House/Flat No., Street/Road Name, Locality/Area' name="localaddress" value={formData.localaddress} onChange={handleChange}/>
            </div>
            <div className='d-flex gap'>
              <div>
                <label>City <span class="required">*</span></label>
                <input type='text' placeholder='EX. Shirpur' name="city" value={formData.city} onChange={handleChange}/>
              </div>
              <div>
                <label>Dist<span class="required">*</span></label>
                <input type='number' placeholder='Ex. Dhule' name="dist" value={formData.dist} onChange={handleChange}/>
              </div>


            </div>
            <div className='d-flex gap'>
              <div>
                <label>State<span class="required">*</span></label>
                <input type='number' placeholder='Ex. Maharashtra' name="state" value={formData.state} onChange={handleChange}/>
              </div>

              <div>
                <label>Pincode<span class="required">*</span></label>
                <input type='number' placeholder='Ex. 425201' name="pincode" value={formData.pincode} onChange={handleChange}/>
              </div>
            </div>
            <div className='d-flex' style={{ gap: '10px' }}>



              <button type='submit'>Next <i class="fa fa-arrow-right"></i></button>

            </div>



          </form>
        )}
        {stage === 2 && (
          <form onSubmit={nextStage}>
            <i><h5>Academics Information</h5></i>
            <hr />
            <div>
              <label>PRN<span class="required">*</span></label>
              <input type='number' placeholder='2212XXXXX' name="prn" value={formData.prn} onChange={handleChange} />
            </div>
            <div>
              <label>10TH Marks<span class="required">*</span></label>
              <input type='number' placeholder='Ex.89.40' />
            </div>




            <div className='d-flex gap'>
              <div>
                <label for="cars">12TH/Dimploma<span class="required">*</span></label>
                <select id="cars"  name="tord" value={formData.tord} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="12th">12TH</option>
                  <option value="Diploma">Dimploma</option>
                </select>
              </div>
              <div>
                <label>{tord} Percentages<span class="required">*</span></label>
                <input type='number' placeholder='Ex.98.40' name="tordpercentage" value={formData.tordpercentage} onChange={handleChange}/>
              </div>

            </div>



            <div>
              <label for="cars">Addmision Based On<span class="required">*</span></label>
              <select id="cars" name="admission" value={formData.admission} onChange={handleChange}>
                <option value="">Choose...</option>
                <option value="TFWS">TFWS</option>
                <option value="MHT CET">MHT CET</option>
                <option value="JEE Main">JEE Main</option>
                <option value="Management">Management</option>
              </select>
            </div>

            <hr />


            <div>
              <label for="cars">Department<span class="required">*</span></label>
              <select name="department" value={formData.department} onChange={handleChange}>
                <option value="">Choose...</option>
                <option value="Computer">Computer</option>
                <option value="Data Science">Data Science</option>
                <option value="AIML">AIML</option>
                <option value="E&TC">E&TC</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>
              </select>
            </div>

            <div>
              <label for="cars">Division<span class="required">*</span></label>
              <select name="division" value={formData.division} onChange={handleChange}>
                <option value="">Choose...</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            <hr />

            <div className='d-flex gap'>
              <div>
                <label>Sem 1(SGPA)<span class="required">*</span></label>
                <input type='number' placeholder='Ex.98.40' name="sem1sgpa" value={formData.sem1sgpa} onChange={handleChange}/>
              </div>
              <div>
                <label for="cars">Sem 1(Backlog)<span class="required">*</span></label>
                <select name="sem1backlog" value={formData.sem1backlog} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="0">All Clear</option>
                  <option value="1">1 Subject</option>
                  <option value="2">2 Subject</option>
                  <option value="3">3 Subject</option>
                  <option value="4">4 Subject</option>
                </select>
              </div>

            </div>

            <div className='d-flex gap'>
              <div>
                <label>Sem 2(SGPA)<span class="required">*</span></label>
                <input type='number' placeholder='Ex.98.40' name="sem2sgpa" value={formData.sem2sgpa} onChange={handleChange}/>
              </div>

              <div>
                <label for="cars">Sem 2(Backlog)<span class="required">*</span></label>
                <select name="sem2backlog" value={formData.sem2backlog} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="0">All Clear</option>
                  <option value="1">1 Subject</option>
                  <option value="2">2 Subject</option>
                  <option value="3">3 Subject</option>
                  <option value="4">4 Subject</option>
                </select>
              </div>
            </div>
            <div className='d-flex gap'>
              <div>
                <label>Sem 3(SGPA)<span class="required">*</span></label>
                <input type='number' placeholder='Ex.98.40' name="sem3sgpa" value={formData.sem3sgpa} onChange={handleChange}/>
              </div>

              <div>
                <label for="cars">Sem 3(Backlog)<span class="required">*</span></label>
                <select placeholder='Ex.98.40' name="sem3backlog" value={formData.sem3backlog} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="0">All Clear</option>
                  <option value="1">1 Subject</option>
                  <option value="2">2 Subject</option>
                  <option value="3">3 Subject</option>
                  <option value="4">4 Subject</option>
                </select>
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Sem 4(SGPA)<span class="required">*</span></label>
                <input type='number' placeholder='Ex.98.40' name="sem4sgpa" value={formData.sem4sgpa} onChange={handleChange}/>
              </div>

              <div>
                <label for="cars">Sem 4(Backlog)<span class="required">*</span></label>
                <select name="sem4backlog" value={formData.sem4backlog} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="0">All Clear</option>
                  <option value="1">1 Subject</option>
                  <option value="2">2 Subject</option>
                  <option value="3">3 Subject</option>
                  <option value="4">4 Subject</option>
                </select>
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Sem 5(SGPA)<span class="required">*</span></label>
                <input type='number' placeholder='Ex.98.40' name="sem5sgpa" value={formData.sem5sgpa} onChange={handleChange}/>
              </div>

              <div>
                <label for="cars">Sem 5(Backlog)<span class="required">*</span></label>
                <select name="sem5backlog" value={formData.sem5backlog} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="0">All Clear</option>
                  <option value="1">1 Subject</option>
                  <option value="2">2 Subject</option>
                  <option value="3">3 Subject</option>
                  <option value="4">4 Subject</option>
                </select>
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Sem 6(SGPA)<span class="required">*</span></label>
                <input type='number' placeholder='Ex.98.40' name="sem6sgpa" value={formData.sem6sgpa} onChange={handleChange}/>
              </div>

              <div>
                <label for="cars">Sem 6(Backlog)<span class="required">*</span></label>
                <select name="sem6backlog" value={formData.sem6backlog} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="0">All Clear</option>
                  <option value="1">1 Subject</option>
                  <option value="2">2 Subject</option>
                  <option value="3">3 Subject</option>
                  <option value="4">4 Subject</option>
                </select>
              </div>
            </div>

            <hr />

            <div className='d-flex gap'>
              <div>
                <label for="cars">Any Live KT's<span class="required">*</span></label>
                <select name="livekts" value={formData.livekts} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="NO">NO</option>
                  <option value="YES">YES</option>
                </select>
              </div>

              <div>
                <label for="cars">Any GAP during Education<span class="required">*</span></label>
                <select name="gap" value={formData.gap} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="NO">NO</option>
                  <option value="YES">YES</option>
                </select>
              </div>


            </div>

            <div className='d-flex' style={{ gap: '10px' }}>

              <button type='button' onClick={prevStage}><i class="fa fa-arrow-left"></i> Previous</button>

              <button type='submit'>Next <i class="fa fa-arrow-right"></i></button>

            </div>

          </form>
        )}
        {stage === 3 && (
          <form onSubmit={handleSubmit}>
            <i><h5>Skillset</h5></i>
            <hr />

            <div>
              <label>About You</label>
              <textarea id="w3review" placeholder='About you' name="about" value={formData.about} onChange={handleChange} rows="3" cols="30" />
            </div>
            <div>
              <label for="cars">Area of Interest<span class="required">*</span></label>
              <select name="Division" id="cars">
                <option value="">Choose...</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="Testing">Testing</option>
              </select>
            </div>

            <hr />

            <div>
              <h5>Add Skills<span class="required">*</span></h5>

              <div className='d-flex' style={{ gap: '10px' }}>
                <div>
                  <select
                  
                    id="skill-select"
                    value={selectedSkill}
                    onChange={(e) => setSelectedSkill(e.target.value)}
                  >
                    <option value="">Select a skill</option>
                    {skillOptions.map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ marginTop: '5px' }}>
                  <button type="button" onClick={addSkill}>Add Skill</button>

                </div>

              </div>
              <ul className='skillsContainer'>
                {skills.map((skill) => (
                  <li className='mySkill' key={skill}>
                    {skill}
                    <button
                      className="delete-btn"
                      onClick={() => removeSkill(skill)}
                    >
                      <i class="fa fa-close"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <hr />

            <div>
              <label>Project 1(Title)</label>
              <input type='text' placeholder='Project 1 Title' name="project1title" value={formData.project1title} onChange={handleChange}/>
            </div>

            <div>
              <label>Project 1(Dicription)</label>
              <textarea id="w3review" placeholder='Project 1 Description' name="project1description" value={formData.project1description} onChange={handleChange} rows="4" cols="50" />
            </div>

            <hr />

            <div>
              <label>Project 2(Title)</label>
              <input type='text' placeholder='Project 2 Title' name="project2title" value={formData.project2title} onChange={handleChange}/>
            </div>


            <div>
              <label>Project 2(Dicription)</label>
              <textarea id="w3review" placeholder='Project 2 Description' name="project2description" value={formData.project2description} onChange={handleChange} rows="4" cols="50" />
            </div>

            <hr />

            <div className='d-flex gap'>
              <div>
                <label><i class="fa fa-github"></i> Github</label>
                <input type="url" name="github" value={formData.github} onChange={handleChange} placeholder='Github Profile Link' />
              </div>

              <div>
                <label><i class="	fa fa-linkedin-square"></i> Linkedin</label>
                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder='LinkedIn Profile Link' />
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label><i class="fa fa-leetcode"></i> Leetcode</label>
                <input type="url" name="leetcode" value={formData.leetcode} onChange={handleChange} placeholder='Leetcode Profile Link' />
              </div>

              <div>
                <label><i class="fa fa-geekforgeeks"></i> GeeksForGeek</label>
                <input type="url" name="geeksforgeeks" value={formData.geeksforgeeks} onChange={handleChange} placeholder='GeeksForGeeks Profile Link' />
              </div>
            </div>

            <div className='d-flex' style={{ gap: '10px' }}>

              <button type='button' onClick={prevStage}><i class="fa fa-arrow-left"></i> Previous</button>

              <button type='submit'>Register</button>

            </div>

          </form>
        )}
      </div>
    </div>

  );
};

export default Register;
