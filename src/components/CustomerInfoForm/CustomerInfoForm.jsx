import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CustomerInfoForm.css';

export default function CustomerInfoForm() {

  // dispatch
  const dispatch = useDispatch();

  // local states
  const [customerName, setCustomerName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [delivery, setDelivery] = useState('');


  const addCustomer = (event) => {
    event.preventDefault();
    //dispatch

    // Clear the input fields
    setCustomerName('');
    setStreetAddress('');
    setCity('');
    setZip('');
    
  }

  return (
    <form onSubmit={(event) => addCustomer(event)}>
      <h2>Step 2: Customer Information</h2>
      <div className='form-container'>
        <div className='txt-fields'>
          <input required type="text" placeholder="Name" value={customerName} onChange={(event) => setCustomerName(event.target.value)}></input>
          <input required type="text" placeholder="Street Address" value={streetAddress} onChange={(event) => setStreetAddress(event.target.value)}></input>
          <input required type="text" placeholder="City" value={city} onChange={(event) => setCity(event.target.value)}></input>
          <input required type="text" placeholder="Zip Code" value={zip} onChange={(event) => setZip(event.target.value)}></input>
        </div>
        <div className='delivery-submit'>
          {/* Radial */}

          <button type="submit">NEXT</button>
        </div>
      </div>
    </form>

  )
}