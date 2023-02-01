import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {clearCart} from "../CartHandler";

export const CheckoutForm=({price, cartWithPrice})=>{
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

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
                    axios.post(
                      process.env.REACT_APP_BACK_URL + '/api/commandes',
                      {
                          "data": {
                              "dtCommande" : Date.now(),
                              "statut" : "approved",
                              "users_permissions_user" : window.localStorage.getItem('id')
                          }
                      }
                    ).then(async (res) => {
                        const orderId = res.data.data.id
                        console.log(cartWithPrice)
                        const validationStack = []
                        const error = false
                        for (const index in cartWithPrice) {
                            const c = cartWithPrice[index]
                            console.log(c)
                            validationStack.push('')
                            axios.post(
                              process.env.REACT_APP_BACK_URL + `/api/product-sells`,
                              {
                                  "data": {
                                      "amount": c.quantity,
                                      "price": c.price,
                                      "commande": orderId,
                                      "produit": c.id
                                  }
                              }
                            ).then(() => validationStack.pop())
                        }
                        while (validationStack.length > 0 && !error) {
                            await new Promise(r => setTimeout(r, 500))
                            console.log("Waiting for order validation...")
                            console.log(validationStack)
                        }
                        if(error){
                            console.log("ERROR")
                            navigate(`/?orderSuccess=failed&orderId=${orderId}`)
                        }else{
                            console.log("Transaction validated")
                            clearCart();
                            navigate(`/?orderSuccess=success&orderId=${orderId}`)
                        }
                    })
                }
                else{
                    console.log("Payment raté",response)
                    navigate("/?orderSuccess=failed")
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
