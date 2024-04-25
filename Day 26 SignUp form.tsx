import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formError, setFormError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newFormError = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    if (!formData.firstName.trim()) {
      newFormError.firstName = 'First name cannot be empty';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newFormError.lastName = 'Last name cannot be empty';
      isValid = false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!formData.email.match(emailRegex)) {
      newFormError.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.password.length < 8) {
      newFormError.password = 'Password must be greater than 7 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newFormError.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setFormError(newFormError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          onChange={(e) => handleChange(e)}
          placeholder="First Name"
        />
        <p data-testid="first-name-error-id" className="error">{formError.firstName}</p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          onChange={(e) => handleChange(e)}
          placeholder="Last Name"
        />
        <p data-testid="last-name-error-id" className="error">{formError.lastName}</p>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Email Address"
        />
        <p data-testid="email-error-id" className="error">{formError.email}</p>
        <input
          data-testid="password-id"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          placeholder="Password"
        />
        <p data-testid="password-error-id" className="error">{formError.password}</p>
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
          placeholder="Confirm Password"
        />
        <p data-testid="confirm-password-error-id" className="error">{formError.confirmPassword}</p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121a12; /* Greenish dark black */

  form {
    font-family: sans-serif;
    background-color: #333;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff; /* Text color */
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px);
    background-color: #444; /* Input background */
    color: #fff; /* Input text color */
    border: none;
    border-radius: 4px;
  }

  input::placeholder {
    color: #ccc; /* Placeholder text color */
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #222; /* Button background */
    color: #fff; /* Button text color */
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 8px 0;
    color: red;
    font-size: 14px;
  }
`;

