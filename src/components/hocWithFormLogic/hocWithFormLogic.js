import React, { useState } from 'react';

const hocWithFormLogic = (WrappedComponent) => {
  const WithFormLogic = (props) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Formulário enviado com sucesso');   
      setFormData({}); 
    };

    return (
      <WrappedComponent
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        {...props}
      />
    );
  };

  return WithFormLogic;
};

export default hocWithFormLogic;