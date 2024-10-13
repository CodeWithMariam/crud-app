import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function FormPage({ userData, setUserData, formData, setFormData }) {
  const navigate = useNavigate();

  useEffect(() => {
    // If formData has an index, it means we are editing; otherwise, it's a new entry
    if (formData.index !== '') {
      setFormData(formData);
    }
  }, [formData, setFormData]);

  const getValue = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      usalary: formData.usalary,
      udate: formData.udate,
    };

    if (formData.index === '') {
      // Adding a new employee
      let checkFilterUserData = userData.filter(
        (v) => v.uemail === formData.uemail || v.uphone === formData.uphone
      );
      if (checkFilterUserData.length > 0) {
        toast.error('Email or phone already exists...');
      } else {
        setUserData([...userData, currentUserFormData]);
        toast.success('Employee added successfully!');
      }
    } else {
      // Editing existing employee
      let updatedData = userData.map((item, i) =>
        i === formData.index ? currentUserFormData : item
      );
      setUserData(updatedData);
      toast.success('Employee updated successfully!');
    }

    // Reset form data after submission
    resetFormData();
    navigate('/');  // Navigate back to the employee table after saving
  };

  const resetFormData = () => {
    setFormData({
      uname: '',
      uemail: '',
      uphone: '',
      usalary: '',
      udate: '',
      index: ''
    });
  };

  const handleCancel = () => {
    resetFormData(); 
    navigate('/');   
  };

  return (
    <div>
      <ToastContainer />
      <h2 className='heading'>{formData.index === '' ? 'Add Employee' : 'Edit Employee'}</h2>
      <form onSubmit={handleSubmit} className='formPage'>
        <div className='pb-2'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            onChange={getValue}
            name='uname'
            className='form-control'
            value={formData.uname}
          />
        </div>
        <div className='pb-2'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            onChange={getValue}
            name='uemail'
            className='form-control'
            value={formData.uemail}
          />
        </div>
        <div className='pb-2'>
          <label className='form-label'>Phone</label>
          <input
            type='number'
            onChange={getValue}
            name='uphone'
            className='form-control'
            value={formData.uphone}
          />
        </div>
        <div className='pb-2'>
          <label className='form-label'>Salary</label>
          <input
            type='number'
            onChange={getValue}
            name='usalary'
            className='form-control'
            value={formData.usalary}
          />
        </div>
        <div className='pb-2'>
          <label className='form-label'>Date</label>
          <input
            type='date'
            onChange={getValue}
            name='udate'
            className='form-control'
            value={formData.udate}
          />
        </div>
        <div className='pb-5'>
          <button className='btn btn-primary'>{formData.index === '' ? 'Save' : 'Update'}</button>
          <button type='button' className='btn btn-secondary mx-3' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
      
    </div>
  );
}

export default FormPage;
