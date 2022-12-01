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
  const [type, setType] = useState('');

// addCustomer function for adding the customer information to the store
  const addCustomer = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CUSTOMER',
      payload: {
        customer_name: customerName,
        street_address: streetAddress,
        city: city,
        zip: zip,
        type: type
      }
    })
    // Clear the input fields
    setCustomerName('');
    setStreetAddress('');
    setCity('');
    setZip('');
    setType('');
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
          <input type="radio" name="JTP" id="carryout" value={type} onClick={(event) => setType(event.target.id)} >Carryout</input>
          <input type="radio" name="JTP" id="delivery" value={type} onClick={(event) => setType(event.target.id)} >Delivery</input>
          <button type="submit">NEXT</button>
        </div>
      </div>
    </form>
  )
}