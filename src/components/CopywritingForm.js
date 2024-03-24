// src/components/CopywritingForm.js

import React, { useState } from 'react';
import styles from './CopywritingForm.module.css'; // Import the CSS module

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
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        className={styles.inputField}
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <textarea
        className={styles.textAreaField}
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Short Description"
        required
      />
      <input
        className={styles.inputField}
        name="idealCustomer"
        value={formData.idealCustomer}
        onChange={handleChange}
        placeholder="Ideal Customer"
        required
      />
      <input
        className={styles.inputField}
        name="dreamOutcome"
        value={formData.dreamOutcome}
        onChange={handleChange}
        placeholder="Dream Outcome"
        required
      />
      <button type="submit" className={styles.buttonSubmit}>Generate Copy</button>
    </form>
  );
};

export default CopywritingForm;
