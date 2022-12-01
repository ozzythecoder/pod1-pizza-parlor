import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

/* 
Render data from pizza.name and pizza.price in the table 
from the pizza option the customer selected in step one.
*/
function Checkout() {
    const history = useHistory();
    const dispatch = useDispatch(); // establish dispatch


  


    /*
    Checkout button should post to the database, 
    show a confirmation dialog, 
    clear the cart 
    and nav (history) the user back to the pizza page (screen-one).
    */
    //POST

    const objectToSend = {
        customer_name : customer.customer_name,
        street_address : customer.street_address,
        city : customer.city,
        zip : customer.zip,
        total : pizza.price,
        type : customer.type,
        pizzas : [pizza]
    }


    const checkoutButton = () => {
       
        // POST CHECKOUT to database
        axios({
            method: 'POST',
            url: '/api/order',
            data: 
               objectToSend
            
            
        }).then( response => {
            //Order confirmation 
            alert('Your order is confirmed!')
            //Clear the cart
            dispatch({
                type: 'CLEAR_CART'
            })

            //Navigate the user to screen-one
            history.push('/')
        }).catch(err => {
            console.error(err);
        })
    }

    return(
        <div>

            <p>{customer.customer_name}</p>
            <p>{customer.street_address}</p>
            <p>{customer.city}</p>
            <p>{customer.zip}</p>
            <h1>Checkout</h1>

            {/* TABLE START*/}
            <table>
                {/* TABLE HEADERS */}
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                {/* TABLE DATA */}
                <tr>
                    <td>
                        {/* PIZZA NAME */}
                        {pizza.name}
                    </td>
                    <td>
                        {/* PIZZA COST */}
                        {pizza.price}
                    </td>
                </tr>
            </table> 
            {/* TABLE END */}

            {/* TOTAL */}
            <p>Total: {pizza.price}</p>

            {/* CHECKOUT BUTTON */}
            <button onClick={checkoutButton}>CHECKOUT</button>
        </div>
    );

}

export default Checkout;