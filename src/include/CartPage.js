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
  const [totalPrice, setTotalPrice] = useState(0)
  const navigate = useNavigate()

  function updateTotalPrice(){
    const newCart = getCart()
    setCart(newCart)
  }
  function handleValidateCartClick(){
    if(window.localStorage.getItem('id') === null) navigate('/inscription')
    else navigate('/payment')
  }
  useEffect(() =>{
    if(!loaded){
      getCartAttributes(cart).then(res => {
        setCartAttributes(res)
        setTotalPrice(getTotalPrice(cart, res))
      })
      setLoaded(true)
    }
    console.log(getTotalPrice(cart, cartAttributes))
    setTotalPrice(getTotalPrice(cart, cartAttributes))
    console.log(cart)
  },[cart])
  return (
    <div id={"cart-page"}>
      {getProductList(cart, cartAttributes, true, updateTotalPrice)}
      <div id={'cart-total-price'} className={'text-align-right'}>
        Total : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalPrice)}
      </div>
      <div className={'text-align-right'}>
        <button onClick={handleValidateCartClick}>Valider le panier</button>
      </div>
    </div>
  )
}
