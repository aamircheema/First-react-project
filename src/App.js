import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import Students from './components/Students';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const navigateToStudents = () => {
    window.location.href = '/students'; // Redirect to '/students' after form submission
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Form</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Form addStudent={addStudent} navigateToStudents={navigateToStudents} />} />
          <Route path="/students" element={<Students students={students} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
