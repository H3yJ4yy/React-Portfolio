import { useState } from 'react';
import { emailValidation } from '../utils/helpers'; // Importing the email validation function

export default function Contact() {
  const [name, setname] = useState("");
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

    setnameError(name ? "" : "Full Name is required");
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

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="formContainer">
      <div className="headerMessage">
        <p>Contact Me 💌</p>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
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
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}


      <img src={kittylay}></img>
    </div>
  );
}
