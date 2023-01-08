
import React from 'react';

function Form() {


    return (
        <>
             <h2>Card details</h2>
        <h3 id="amount"></h3>
        <input type="text" name="name" id="name" placeholder="Enter Your Name" /><br />
        <input type="number" name="card" id="card" placeholder="Enter Card Number" /><br />
        <input type="text" name="exp" id="exp" placeholder="Expiration date (MM/YYYY)" />
        <input type="password" name="Cvc" id="cvc" placeholder="CVC/CVV" />
        <input type="password" placeholder="Enter your pin" id="pass" name="pin"/><br />
        <button>Submit</button>
            
        </>
    );
}

export default Form;