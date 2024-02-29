import { useState, useRef } from 'react';
import { emailValidation } from '../utils/helpers';
import emailjs from '@emailjs/browser'
import "../styles/contact.css"

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const typeInput = e.target.getAttribute("name");
    const valueInput = e.target.value;

    if (typeInput === "email") {
      setEmail(valueInput);
    } else if (typeInput === "name") {
      setName(valueInput);
    } else if (typeInput === "message") {
      setMessage(valueInput);
    }
  };


  const checkEmail = (e) => {
    
    const { target } = e;
    const email = target.value;

    if (!emailValidation(email)) {
      setEmailError('Email is invalid');
    } else  {
      setEmailError('');
      
    }
  };



  const handleBlur = (e) => {
    const typeInput = e.target.getAttribute("name");
    const valueInput = e.target.value;

    switch (typeInput) {
      case "name":
        setnameError(valueInput ? "" : "Full Name is required");
        break;
      case "email":
        setEmailError(valueInput ? "" : "Email is required");
        break;
      case "message":
        setMessageError(valueInput ? "" : "Message is required");
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setnameError(name ? "" : "Name is required");
    setEmailError(email ? "" : "Email is required");
    setMessageError(message ? "" : "Message is required");

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!emailValidation(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    setErrorMessage("");

    console.log("Form submitted:", { name, email, message });

     emailjs
      .sendForm('service_ln3ea0x', 'template_t1unmt5', form.current, {
        publicKey: 'G9dwAepB9croVVtRF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="formContainer">
      <div className="headerMessage">
        <h3>Contact Me 💌</h3>
      </div>
      <div className=''>
      <form ref={form} className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Full Name"
        />
        {nameError && <p className="error-text">{nameError}</p>}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={checkEmail}
          type="email"
          placeholder="Email"
        />
        {emailError && <p className="error-text">{emailError}</p>}
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Message"
        ></textarea>
        {messageError && <p className="error-text">{messageError}</p>}
        <button type="submit">Submit</button>
     
     
     
      </form>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
