import {useEffect, useState} from 'react'
import {getCart} from '../CartHandler'
import axios from 'axios'
import productListItem from './CartPageProductItem'
import './CartPage.scss'
export default function CartPage() {
  function getTotalPrice(){
    if(cartAttributes.length === 0) return
    const cartMap = cart.map((e) => {
        return (
          {
            id: e.id,
            quantity: e.quantity,
            price: cartAttributes.find((attr) => attr.id === e.id).attributes.prix
          }
        )
      }
    )
    const totalMap = cartMap.map((e) => e.price * e.quantity)
    const total = totalMap.reduce(
      (acc, e) => acc + e,
      0
    )
    return total
  }

  const [cart, setCart] = useState(getCart())
  const [cartAttributes, setCartAttributes] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() =>{
    if(!loaded){
      const idsParsing = cart.map((e, i) => `filters[id][$in][${i}]=${parseInt(e.id)}`)
      const uriParameters = idsParsing.join('&')
      const uri = process.env.REACT_APP_BACK_URL + `/api/produits?${uriParameters}&populate=*`
      console.log(uri)
      axios.get(uri)
        .then((res) =>{
          setCartAttributes(res.data.data)
        })
      setLoaded(true)
    }
  })
  return (
    <div id={"cart-page"}>
      {cart.map((e) => productListItem(
        e.id,
        cartAttributes.length > 0 ?
          (cartAttributes.find((attr) => attr.id === e.id)).attributes :
          null,
        e.quantity))}
      <div id={'cart-total-price'} className={'text-align-right'}>
        Total : {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(getTotalPrice())}
      </div>
      <div className={'text-align-right'}>
        <button>Valider le panier</button>
      </div>
    </div>
  )
}
