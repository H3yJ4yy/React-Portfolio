import { useState } from 'react';
import { emailValidation } from '../utils/helpers'; // Importing the email validation function

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Validate email
    if (!emailValidation(inputEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setNameError('');
    setEmailError('');
    setMessageError('');

    if (name.trim() === '') {
      setNameError('Please enter your name');
    }
    if (email.trim() === '') {
      setEmailError('Please enter your email');
    } else if (!emailValidation(email)) {
      setEmailError('Please enter a valid email address');
    }
    if (message.trim() === '') {
      setMessageError('Please enter a message');
    }

    // If no errors, submit form
    if (name && email && emailValidation(email) && message) {
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
        {messageError && <p style={{ color: 'red' }}>{messageError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
