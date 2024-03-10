const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const studentSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    pass: String,
    cpass: String,
    mob: String,
    birthdate: String,
    gender: String,
    bloodgroup: String,
    adharnum: String,
    cast: String,
    fathername: String,
    fathermob: String,
    fatherocpn: String,
    mothername: String,
    mothermob: String,
    mohterocpn: String,
    localaddress: String,
    city: String,
    dist: String,
    state: String,
    pincode: String,
    prn: String,
    tenthmarks: String,
    tord: String,
    tordpercentage: String,
    admission: String,
    department: String,
    division: String,
    sem1sgpa: String,
    sem1backlog: String,
    sem2sgpa: String,
    sem2backlog: String,
    sem3sgpa: String,
    sem3backlog: String,
    sem4sgpa: String,
    sem4backlog: String,
    sem5sgpa: String,
    sem5backlog: String,
    sem6sgpa: String,
    sem6backlog: String,
    livekts: String,
    gap: String,
    about: String,
    interest: String,
    skills: [String],
    project1title: String,
    project1description: String,
    project2title: String,
    project2description: String,
    github: String,
    linkedin: String,
    leetcode: String,
    geeksforgeeks: String,
});

const Student = mongoose.model('Student', studentSchema);






app.post('/api/submit-form', (req, res) => {
    const formData = req.body;
    res.json({ message: 'Form data received and stored successfully.' });


const newStudent = new Student(formData);


newStudent.save()
  .then(() => console.log('User saved to database'))
  .catch(err => console.error(err));

});



app.get('/students', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/api/get-data', (req, res) => {
    const { prn } = req.query;

    console.log(prn)



    Student.findOne({ prn })
      .then(student => {
        if (!student) {
          return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
      })
      .catch(error => {
        console.error('Error fetching student:', error);
        res.status(500).json({ error: 'An error occurred while fetching student data.' });
      });
});


app.listen(8080, () => {
  console.log('Server running on http://localhost:3000');
});
