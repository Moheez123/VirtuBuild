import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Button.css';
const CustomButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClose = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const handleShow = () => setShowModal(true);

  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const enquireFor = document.getElementById('enquireFor').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !enquireFor || !message) {
      setErrorMessage('All fields are mandatory');
      return;
    }

    // Perform your form submission logic here

    handleClose(); // Close the modal after form submission
  };

  return (
    <>
      <div>
        <button className="inqury-btn" onClick={handleShow}>
          GET INQUIRY
        </button>
      </div>

      <Modal className='modal' show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black", fontFamily:"Inter"}}>Get In Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='form-box'>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>
                Name <span style={{ color: 'red' }}>*</span>
                <small style={{ color: 'red', marginLeft: '5px' }}> </small>
              </Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>
                Email <span style={{ color: 'red' }}>*</span>
                <small style={{ color: 'red', marginLeft: '5px' }}> </small>
              </Form.Label>
              <Form.Control type="email" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="enquireFor">
              <Form.Label>
                Enquire For <span style={{ color: 'red' }}>*</span>
                <small style={{ color: 'red', marginLeft: '5px' }}></small>
              </Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>
                Message <span style={{ color: 'red' }}>*</span>
                <small style={{ color: 'red', marginLeft: '5px' }}> </small>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="inqury-btn" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomButton;
