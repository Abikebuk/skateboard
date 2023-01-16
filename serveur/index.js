const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")('sk_test_51MBxXPKqNPKl3TM1kgFW2SyaAU2NezT365mwx7oNOa6uRt7Eg9eP7mxLC1QJKCFA36LZJxKtZMF3fwFKZGIA1MwH00ty7JghL8');
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/stripe/charge", cors(), async (req, res)=>{
    let { amount, id } = req.body;
    console.log("amount & id :", amount, id);
    try{
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "EUR",
            description: "Vente de Skate",
            payment_method: id,
            confirm: true,
        });
        res.json({
            message: "Payment réussi",
            success: true,
        })
    } catch(error){
        console.log("erreur... ", error);
        res.json({
            message: "Le payment à échoué",
            success: false,
        })
    }
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("Serveur démarré...")
});
