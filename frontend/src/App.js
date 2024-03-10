import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/register/Register';
import Login from './components/login/Login';
import Student from './components/student/Student';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="student" element={<Student />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
