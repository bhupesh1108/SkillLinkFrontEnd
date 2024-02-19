import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginForm.css";

const ServiceForm = () => {
  const userId = sessionStorage["userId"];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    skills: '',
    wages: '',
    address: '',
    date: '',
    userId: userId,
    namefirst: sessionStorage["namefirst"],
    namelast: sessionStorage["namelast"],
    phonenumber: sessionStorage["phonenumber"]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7373/skilllink/insertUserRequirement', formData).then(() => {
        navigate("/servicelist");
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <center className="login-center">
      <h1>Skill🔗Link</h1>
      <h3><b>Hello {sessionStorage["namefirst"]}</b></h3>
      <div className="container">
        <h3>Enter Your Requirement</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select
              className="form-control"
              id="service"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Painter">Painter</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Pest Controller">Pest Controller</option>
              <option value="Carppenter">Carpenter</option>
              <option value="Cleaner">Cleaner</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="wages">Wages</label>
            <input
              type="number"
              className="form-control"
              id="wages"
              name="wages"
              value={formData.wages}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="Date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Service</button>
        </form>
      </div>
    </center>
  );
};

export default ServiceForm;
