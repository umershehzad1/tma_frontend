
"use client";
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import arrow from "@/assets/order-arrow.svg";
import Image from 'next/image';

const ModalPurchase = ({ show, handleClose }) => {
  // Define your modal content or functionality here
  return (
    <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
       >
        
    
    <Modal size='md'  show={show} onHide={handleClose}>
      <Modal.Header  closeButton>
        
      </Modal.Header >
      <Modal.Body className='text-center ' style={{paddingRight:'4rem', paddingLeft:'4rem'}}>
      <Modal.Title><h1 style={{ color: '#1A1A1A', fontWeight: '600', fontSize: '40px' , marginBottom:'2rem' }}>Congratulations of  your purchase</h1></Modal.Title>
           <p style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu.
              Mauris sollicitudin dignissim diam, 
            ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
      </Modal.Body>
      <Modal.Footer style={{paddingBottom:' 4rem'}}>
      <Button className="add-to-cart-button  border-0 text-center" style={{width:'218px', height:'51px'}}>
               Order Details
               <Image
                 src={arrow}
                width={15}
                height={12}
                alt="team"
                 className="button-text mx-2"
              />
          </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default ModalPurchase;
