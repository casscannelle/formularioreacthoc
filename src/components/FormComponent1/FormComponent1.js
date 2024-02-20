// FormComponent1.js
import React from 'react';
import hocWithFormLogic from '../hocWithFormLogic/hocWithFormLogic';

const FormComponent1 = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </div>

      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>

      <div>
        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
      </div>

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default hocWithFormLogic(FormComponent1);
