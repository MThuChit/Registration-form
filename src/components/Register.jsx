import React, { useState } from 'react';

const Register = () => {
  const genderOptions = ["Male", "Female", "Others"];
  const hobbyOptions = ["Music", "Movies", "Plastic Model"];
  const roleOptions = ["General staff", "Developer", "System Analyst"];

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: ''
  });
  
  const [hobbies, setHobbies] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;
    
    if (!isChecked) {
      setHobbies((prev) => {
        return prev.filter((item) => item !== targetValue);
      });
    } else {
      setHobbies((prev) => {
        return [...prev, targetValue];
      });
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Registration Form</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <label>Username: <input type="text" name="username" onChange={handleInputChange} /></label>
        <label>Firstname: <input type="text" name="firstname" onChange={handleInputChange} /></label>
        <label>Lastname: <input type="text" name="lastname" onChange={handleInputChange} /></label>

        <div>
          <p>Gender:</p>
          {genderOptions.map(option => (
            <label key={option}>
              <input type="radio" name="gender" value={option} onChange={handleInputChange} /> {option}
            </label>
          ))}
        </div>

        <div>
          <p>Hobbies:</p>
          {hobbyOptions.map(option => (
            <label key={option}>
              <input type="checkbox" value={option} onChange={onHobbiesToggle} /> {option}
            </label>
          ))}
        </div>

        <label>Apply Role: 
          <select name="role" onChange={handleInputChange}>
            <option value="">Select a role</option>
            {roleOptions.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </label>
      </form>

      <hr />
      <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '15px' }}>
        <h3>Input Data Preview:</h3>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Firstname:</strong> {formData.firstname}</p>
        <p><strong>Lastname:</strong> {formData.lastname}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p> {/* Using join as requested */}
        <p><strong>Role:</strong> {formData.role}</p>
      </div>
    </div>
  );
};

export default Register;