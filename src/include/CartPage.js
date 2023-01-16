import {useEffect, useState} from 'react'
import {getCart, getCartAttributes, getProductList, getTotalPrice} from '../CartHandler'
import axios from 'axios'
import productListItem from './CartPageProductItem'
import './CartPage.scss'
import {useNavigate} from 'react-router-dom'
export default function CartPage() {
  const [cart, setCart] = useState(getCart())
  const [cartAttributes, setCartAttributes] = useState([])
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()

  function handleValidateCartClick(){
    navigate('/payment')
  }
  useEffect(() =>{
    if(!loaded){
      getCartAttributes(cart).then(res => setCartAttributes(res))
      setLoaded(true)
    }
  })
  return (
    <div id={"cart-page"}>
      {getProductList(cart, cartAttributes)}
      <div id={'cart-total-price'} className={'text-align-right'}>
        Total : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(getTotalPrice(cart, cartAttributes))}
      </div>
      <div className={'text-align-right'}>
        <button onClick={handleValidateCartClick}>Valider le panier</button>
      </div>
    </div>
  )
}
