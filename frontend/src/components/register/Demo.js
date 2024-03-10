import React from 'react'
import './register.css'

function Register() {


  function addSkill() {
    const select = document.getElementById('skill-select');
    const skill = select.value.trim();
    if (skill === '') {
        return;
    }

    const skillList = document.getElementById('skill-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${skill}</span>
        <button class="delete-btn">Delete</button>
    `;
    skillList.appendChild(listItem);

    // Disable the selected option in the dropdown
    select.querySelector(`option[value="${skill}"]`).remove();
    
    // Attach event listener to the delete button
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove();
        // Re-enable the option in the dropdown
        const newOption = document.createElement('option');
        newOption.value = skill;
        newOption.text = skill;
        select.appendChild(newOption);
    });
}

// Add event listener to the Add Skill button
document.getElementById('add-skill-btn').addEventListener('click', addSkill);
  return (
    <div className='tnp__register_container'>
      <div className='tnp__register_container_main'>

        <img src='./imgs/main_logo.jpg' />


        <h2 className='label'>Register</h2>


        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#home">Personal Information</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#menu1">Academics Information</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#menu2">Skills</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane container active" id="home">
            <div>
              <label>Full Name</label>
              <input type='text' placeholder='Ex. Gopal Bharat Patil' />
            </div>


            <div>
              <label>Email</label>
              <input type='email' placeholder='Ex. abc@gmail.com' required />
            </div>
            <div className='d-flex gap'>
              <div>
                <label>Mobile No</label>
                <input type='number' placeholder='90XXXXXX38' />
              </div>
              <div>
                <label>Birthdate</label>
                <input type='date' placeholder='Your Name' />
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label for="cars">Gender</label>
                <select name="cars" id="cars">
                  <option value="">Select....</option>
                  <option value="OBC">Male</option>
                  <option value="SC">Female</option>
                  <option value="NT">Other</option>
                </select>
              </div>
              <div>
                <label for="cars">Blood Group</label>
                <select name="cars" id="cars">
                  <option value="volvo">Select....</option>
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
                <label>Adhar Number</label>
                <input type='number' placeholder='4031 XXXX XXXX' />
              </div>
              <div>
                <label for="cars">Cast</label>
                <select name="cars" id="cars">
                  <option value="volvo">Select....</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="NT">NT</option>
                  <option value="EBC">EBC</option>
                  <option value="Others">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label>Father Full Name</label>
              <input type='text' placeholder='Ex. Bharat Yadav Patil' />
            </div>
            <div>
              <label>Mother Full Name</label>
              <input type='text' placeholder='Mother Name' />
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Father Mobile No </label>
                <input type='number' placeholder='90XXXXXX38' />
              </div>
              <div>
                <label>Mother Mobile No</label>
                <input type='number' placeholder='90XXXXXX38' />
              </div>
            </div>

            <div>
              <label for="cars">Father Occupation:</label>
              <select name="cars" id="cars">
                <option value="volvo">Choose an Occupation...</option>
                <option value="Government Service">Government Service</option>
                <option value="Private Service">Private Service</option>
                <option value="Business/Entrepreneur">Business/Entrepreneur</option>
                <option value="Agriculture/Farming">Agriculture/Farming</option>
                <option value="Professional (Doctor, Engineer, Lawyer, etc.)">Professional (Doctor, Engineer, Lawyer, etc.)</option>
                <option value="Retired">Retired</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label>Local Address</label>
              <input type='Text' placeholder='House/Flat No., Street/Road Name, Locality/Area' />
            </div>
            <div className='d-flex gap'>
              <div>
                <label>City </label>
                <input type='text' placeholder='EX. Shirpur' />
              </div>
              <div>
                <label>Dist</label>
                <input type='number' placeholder='Ex. Dhule' />
              </div>


            </div>
            <div className='d-flex gap'>
              <div>
                <label>State</label>
                <input type='number' placeholder='Ex. Maharashtra' />
              </div>

              <div>
                <label>Pincode</label>
                <input type='number' placeholder='Ex. 425201' />
              </div>


            </div>


          </div>








          <div class="tab-pane container fade" id="menu1">


            <div className='d-flex gap'>
              <div>
                <label>PRN</label>
                <input type='number' placeholder='2212XXXXX' />
              </div>
              <div>
                <label>10TH Marks</label>
                <input type='number' placeholder='Ex.89.40' />
              </div>

            </div>


            <div className='d-flex gap'>
              <div>
                <label for="cars">12TH/Dimploma</label>
                <select name="12TH/Dimploma" id="cars">
                  <option value="volvo">Choose...</option>
                  <option value="12">12TH</option>
                  <option value="Diploma">Dimploma</option>
                </select>
              </div>
              <div>
                <label>Dimploma Marks</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>

            </div>

            <div className='d-flex gap'>
              <div>
                <label for="cars">Addmision Based On</label>
                <select name="Addmision" id="cars">
                  <option value="volvo">Choose...</option>
                  <option value="TFWS">TFWS</option>
                  <option value="MHT CET">MHT CET</option>
                  <option value="JEE Main">JEE Main</option>
                  <option value="Management">Management</option>
                </select>
              </div>

              <div>
                <label>12TH marks</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>
            </div>


            <div className='d-flex gap'>
              <div>
                <label for="cars">Department</label>
                <select name="Department" id="cars">
                  <option value="volvo">Choose...</option>
                  <option value="Computer">Computer</option>
                  <option value="Data Science">Data Science</option>
                  <option value="AIML">AIML</option>
                  <option value="E&TC">E&TC</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                </select>
              </div>

              <div>
                <label for="cars">Division</label>
                <select name="Division" id="cars">
                  <option value="volvo">Choose...</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>


            <div className='d-flex gap'>
              <div>
                <label>Sem 1(SGPA)</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>

              <div>
                <label>Sem 2(SGPA)</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Sem 3(SGPA)</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>

              <div>
                <label>Sem 4(SGPA)</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>
            </div>
            <div className='d-flex gap'>
              <div>
                <label>Sem 5(SGPA)</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>

              <div>
                <label>Sem 6(SGPA)</label>
                <input type='number' placeholder='Ex.98.40' />
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Total ATKT</label>
                <input type='number' placeholder='Ex. 4' />
              </div>

              <div>
                <label>Any Gap(Year)</label>
                <input type='number' placeholder='Ex. 2' />
              </div>
            </div>


          </div>



          <div class="tab-pane container fade" id="menu2">


            <div>
              <label for="cars">Area of Interest</label>
              <select name="Division" id="cars">
                <option value="volvo">Choose...</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="Testing">Testing</option>
              </select>
            </div>

            <div>
              <h2>Add Skills</h2>
              <form id="skills-form">
                <label for="skill-select">Select a skill:</label>
                <select id="skill-select">
                  <option value="Skill 1">Skill 1</option>
                  <option value="Skill 2">Skill 2</option>
                  <option value="Skill 3">Skill 3</option>
                  <option value="Skill 4">Skill 4</option>
                  <option value="Skill 5">Skill 5</option>
                </select>
                <button type="button" id="add-skill-btn">Add Skill</button>
              </form>
              <ul id="skill-list"></ul>
            </div>

            <div>
              <label>Project 1(Title)</label>
              <input type='text' placeholder='Titile' />
            </div>

            <div>
              <label>Project 1(Dicription)</label>
              <textarea id="w3review" name="w3review" rows="4" cols="50" />
            </div>

            <div>
              <label>Project 2(Title)</label>
              <input type='text' placeholder='Titile' />
            </div>




            <div>
              <label>Project 2(Dicription)</label>
              <textarea id="w3review" name="w3review" rows="4" cols="50" />
            </div>


            <div className='d-flex gap'>
              <div>
                <label>Github</label>
                <input type="url" id="homepage" name="homepage" />
              </div>

              <div>
                <label>Linkedin</label>
                <input type="url" id="homepage" name="homepage" />
              </div>
            </div>

            <div className='d-flex gap'>
              <div>
                <label>Leetcode</label>
                <input type="url" id="homepage" name="homepage" />
              </div>

              <div>
                <label>GeeksForGeek</label>
                <input type="url" id="homepage" name="homepage" />
              </div>
            </div>

          </div>


        </div>



      </div>

    </div>
  )
}

export default Register