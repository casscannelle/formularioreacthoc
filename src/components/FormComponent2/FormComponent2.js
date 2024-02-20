// FormComponent2.js
import React from 'react';
import hocWithFormLogic from '../hocWithFormLogic/hocWithFormLogic';;

const FormComponent2 = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>

      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
      </div>

      <div>
        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
      </div>

      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default hocWithFormLogic(FormComponent2);
