import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'

export const CheckoutForm=({price})=>{
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event)=>{
        console.log(price)
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            console.log("Stripe has not yet loaded.")
            return;
        }
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        if(!error){
            console.log("Token Généré: ", paymentMethod);
            // envoie du token vers le backend
            const config =  {
                headers: { Authorization: `Bearer ${elements}` }
            };
            try{
                const { id } = paymentMethod
                console.log(id)
                const response = await axios.post("http://localhost:8080/stripe/charge",
                {
                    amount: price,
                    id: id,
                });
                if (response.data.success){
                    console.log("Payment réussi");
                }
                else{
                    console.log("Payment raté",response)
                }
            }
            catch (error){
                console.log("Erreur! ", error);
            }
        }
        else{
            console.log(error.message);
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{ maxWidth: 400}}>
            <CardElement
                options={{
                    hidePostalCode: true
                }}
            />
            <button>Payer</button>
        </form>
    );
};
