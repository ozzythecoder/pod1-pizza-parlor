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
    const currentOrder = useSelector(store => store.currentOrder)

    const objectToSend = {
        customer_name : currentOrder.customer_name,
        street_address : currentOrder.street_address,
        city :  currentOrder.city,
        zip :  currentOrder.zip,
        total : '',
        type : '',
        pizzas : ''
    }


    const checkoutButton = () => {
       
        // POST CHECKOUT to database
        axios({
            method: 'POST',
            url: '/api/order',
            data: objectToSend
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

            <h1>Checkout</h1>
            <p>{ currentOrder.customer_name}</p>
            <p>{ currentOrder.street_address}</p>
            <p>{ currentOrder.city}</p>
            <p>{ currentOrder.zip}</p>

            {/* TABLE START*/}
            <table>
                {/* TABLE HEADERS */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                {/* TABLE DATA */}
                <tbody>
                    <tr>
                        <td>
                            {/* PIZZA NAME */}
                            
                        </td>
                        <td>
                            {/* PIZZA COST */}
                            
                        </td>
                    </tr>
                </tbody>
            </table> 
            {/* TABLE END */}

            {/* TOTAL */}
            <p>Total: </p>

            {/* CHECKOUT BUTTON */}
            <button onClick={checkoutButton}>CHECKOUT</button>
        </div>
    );

}

export default Checkout;