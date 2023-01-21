import React, {useEffect, useState} from 'react'
import StripeContainer from './StripeContainer';
import {getCart, getCartAttributes, getCartWithPrice, getProductList, getTotalPrice} from '../CartHandler'
import DeliveryAddress from './DeliveryAddress'

export default function PaymentPage({price}) {
  const [loaded, setLoaded] = useState(false);
  const [cart, setCart] = useState(getCart())
  const [cartAttributes, setCartAttributes] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  function onProductListLoaded(){
    const newCart = getCart()
    setCart(newCart)
  }
  useEffect(() =>{
    if(!loaded) {
      getCartAttributes(cart)
        .then((res) => setCartAttributes(res))
      setLoaded(true)
    }
    setTotalPrice(getTotalPrice(cart, cartAttributes))
  }, [cart, cartAttributes])
  return (
    <div id={'payment-page'}>
      {getProductList(cart, cartAttributes)}
      <span>Total : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalPrice)}</span>
      <DeliveryAddress/>
      <StripeContainer
        price={totalPrice * 100}
        cartWithPrice={getCartWithPrice(cart, cartAttributes)}
      />
    </div>
  );
}
