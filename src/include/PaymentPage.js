import React, {useEffect, useState} from 'react'
import StripeContainer from './StripeContainer';
import {getCart, getCartAttributes, getProductList, getTotalPrice} from '../CartHandler'
import DeliveryAddress from './DeliveryAddress'

export default function PaymentPage({price}) {
  const [priceTest, setPriceTest] = useState(0)
  const [cart, setCart] = useState(getCart())
  const [cartAttributes, setCartAttributes] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() =>{
    getCartAttributes(cart).then((res) => setCartAttributes(res))
    setTotalPrice(getTotalPrice(cart, cartAttributes))
  }, [cart])
  function handleChange(e){
    setPriceTest(e.target.value)
    console.log(priceTest)
  }
  return (
    <div id={'payment-page'}>
      {getProductList(cart, cartAttributes)}
      <span>Total : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalPrice)}</span>
      <DeliveryAddress/>
      <StripeContainer price={totalPrice * 100}/>
    </div>
  );
}
