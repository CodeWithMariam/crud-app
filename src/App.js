import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormPage from './FormPage';
import AdminLogin from './AdminLogin';
import TablePage from './TablePage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    usalary: '',
    udate: '',
    index: ''
  });

  const [userData, setUserData] = useState([]);

  let editRow = (indexNumber) => {
    let editData = { ...userData[indexNumber], index: indexNumber };
    setFormData(editData); // Set the form data with the selected employee details
    // Remove navigation from here, let TablePage handle navigation
  };

  const deleteRow = (indexNumber) => {
    const filterDataAfterDelete = userData.filter((v, i) => i !== indexNumber);
    setUserData(filterDataAfterDelete);
    alert('Are you sure you want to delete?');
  };

  const resetForm = () => {
    setFormData({
      uname: '',
      uemail: '',
      uphone: '',
      usalary: '',
      udate: '',
      index: ''
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/employees" element={<TablePage userData={userData} editRow={editRow} deleteRow={deleteRow} />} />
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/add-employee"
          element={
            <FormPage 
              userData={userData} 
              setUserData={setUserData} 
              formData={formData} 
              setFormData={setFormData} 
              resetForm={resetForm} // Pass reset function for form clearing
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
