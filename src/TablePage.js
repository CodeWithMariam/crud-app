import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, useNavigate,Navigate } from 'react-router-dom';
import FormPage from './FormPage';
import AdminLogin from './AdminLogin'; 
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './AppRouter';


function TablePage({ userData, editRow, deleteRow }) {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    editRow(index);
    navigate('/add-employee'); 
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated'); // Clear session
    navigate('/login');
};

  return (
    <Container fluid >
      <ToastContainer />
        <Row>
          <Col className=' py-5'>
            <h1>Employee Management System</h1>
            <div className="button-container">
              <button className="add-btn" onClick={() => navigate('/add-employee')}>Add Employee</button>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Salary</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((obj, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{obj.uname}</td>
                      <td>{obj.uemail}</td>
                      <td>{obj.uphone}</td>
                      <td>{obj.usalary}</td>
                      <td>{obj.udate}</td>
                      <td className='text-center '>
                        <button className='btn btn-danger mx-2' onClick={() => deleteRow(index)} >Delete</button>
                        <button className='btn btn-success  mx-2'onClick={() => handleEdit(index)}> Edit</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className='text-center'>
                    <td colSpan={12}>
                      <h4>No Data Found</h4>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      
    </Container>
  );
}

export default TablePage;
