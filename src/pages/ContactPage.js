import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './ContactPage.css';
import emailjs from 'emailjs-com'; 

const ContactPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', contactNo: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false); 

  const SERVICE_ID = 'service_hquob6m';
  const TEMPLATE_ID = 'template_bwocpcb';

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      validateForm();
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateForm();
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) formErrors.message = 'Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSendClick = () => {
    if (!validateForm()) {
      setShowError(true); 
      return;
    }

    setIsAnimating(true);
    setShowError(false); 

    const templateParams = {
      to_name: 'Greyston',
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      number: formData.contactNo
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, '552L4Xos1GNITssj9')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setTimeout(() => {
          setIsAnimating(false);
          setShowCheckmark(true);
        }, 500);
      })
      .catch(() => {
        setShowError(true); 
      });
  };

  const autoResize = (e) => {
    e.target.style.height = 'auto'; 
    e.target.style.height = `${e.target.scrollHeight}px`; 
  };

  return (
    <div className="contact-page">
      <header className="hero-section-nav">
        <nav className="menu">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <ul className="nav-links">
            <li><NavLink to="/landing" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>

      <div className="contact-background">
        <div className="contact-container">
          <div className="contact-screen">
            <div class="contact-screen-header">
              <div class="contact-screen-header-left">
              <div class="contact-screen-header-button close"></div>
              <div class="contact-screen-header-button maximize"></div>
              <div class="contact-screen-header-button minimize"></div>
            </div>
            <div class="contact-screen-header-right">
              <div class="contact-screen-header-ellipsis"></div>
              <div class="contact-screen-header-ellipsis"></div>
              <div class="contact-screen-header-ellipsis"></div>
            </div>
            </div>
            <div className="contact-screen-body">
              <div className="contact-screen-body-item left">
                <div className="contact-app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="contact-app-info">CONTACT INFO : greybellino@gmail.com</div>
              </div>

              <div className="contact-screen-body-item">
                <div className="contact-app-form">
                  <div className="contact-app-form-group">
                    <input
                      className="contact-app-form-control"
                      placeholder="NAME"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <p className="error-text">{errors.name}</p>}
                  </div>
                  <div className="contact-app-form-group">
                    <input
                      className="contact-app-form-control"
                      placeholder="EMAIL"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <p className="error-text">{errors.email}</p>}
                  </div>

                  <div className="contact-app-form-group">
                    <input
                      className="contact-app-form-control"
                      placeholder="CONTACT NO"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.contactNo && errors.contactNo && <p className="error-text">{errors.contactNo}</p>}
                  </div>

                  <div className="contact-app-form-group contact-message">
                    <textarea
                      className="contact-app-form-control contact-textarea"
                      placeholder="MESSAGE"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onInput={autoResize} 
                    />
                    {touched.message && errors.message && <p className="error-text">{errors.message}</p>}
                  </div>

                  <div className="contact-app-form-group contact-buttons">
                    <div className="contact-btn-container" onClick={handleSendClick}>
                      <button
                        className="contact-btn contact-btn-boarder"
                        disabled={!isFormValid} 
                      >
                        {!showCheckmark && !showError ? (
                          <img
                            src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png"
                            alt="Send"
                            className={`contact-airplane ${isAnimating ? 'contact-animation' : ''}`}
                          />
                        ) : showCheckmark ? (
                          <img
                            src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
                            alt="Checkmark"
                            className="contact-checkmark"
                          />
                        ) : (
                          <img
                            src="https://i.cloudup.com/7ja76UpvKp-3000x3000.png"
                            alt="Error"
                            className="contact-error"
                          />
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
