// src/components/CopywritingForm.js

import React, { useState } from 'react';

const CopywritingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    idealCustomer: '',
    dreamOutcome: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Short Description"
        required
      />
      <input
        name="idealCustomer"
        value={formData.idealCustomer}
        onChange={handleChange}
        placeholder="Ideal Customer"
        required
      />
      <input
        name="dreamOutcome"
        value={formData.dreamOutcome}
        onChange={handleChange}
        placeholder="Dream Outcome"
        required
      />
      <button type="submit">Generate Copy</button>
    </form>
  );
};

export default CopywritingForm;
