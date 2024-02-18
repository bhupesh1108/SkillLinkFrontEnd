import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; // Import your CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    const[password,setpassword]=useState('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange=(e)=>{
    setpassword(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('');

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: Unable to process your request. Please try again later.');
    }
  };

  return (
    <center>
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>UserName:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
          />
           <label>New Password:</label>
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
    </center>
  );
};

export default ForgotPassword;
