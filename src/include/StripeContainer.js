import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm'

const PUBLIC_KEY = "pk_test_51MBxXPKqNPKl3TM19xlbzrd2Zy1YeS6TgqSGX8Pqli6ePSiYBQ0BRqVEZAJGh9ZbXxvh1jolP2LKsrB5KAk8mJiW00WXgyG5YF";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({price, cartWithPrice})=>{
    return(
        <Elements stripe={stripeTestPromise} >
            <CheckoutForm price={price} cartWithPrice={cartWithPrice}/>
        </Elements>
    );
};

export default Stripe;
