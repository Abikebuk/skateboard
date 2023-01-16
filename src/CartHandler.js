import axios from 'axios'
import productListItem from './include/CartPageProductItem'

const key = "cart"

export const getCart = () => {
  const val = window.localStorage.getItem(key)
  if(val == null){
    window.localStorage.setItem(key, JSON.stringify([]))
    return getCart()
  }
  return JSON.parse(val);
}

export function addCartItem (item) {
  item = parseInt(item)
  console.log(findItemIndex(item))
  const cart = getCart()
  const index = findItemIndex(item)
  if(index === -1) cart.push({id : item, quantity : 1})
  else cart[index].quantity++
  save(cart)
}
function findItemIndex(item) {
  item = parseInt(item)
  const cart = getCart();
  return cart.findIndex((e) => e.id === item)
}

export function setQuantityOfCartItem(item, quantity){
  console.log("setting qt")
  quantity = parseInt(quantity)
  const cart = getCart();
  const index = findItemIndex(item)
  if (index === -1) return
  cart[index].quantity = parseInt(quantity)
  save(cart)
  console.log(quantity)
  console.log(cart[index])
  console.log(window.localStorage.getItem(key))
}

export function removeItemFromCart(item){
  let cart = getCart()
  const index = findItemIndex(item)
  cart = cart.filter((e) => e.id !== item)
  save(cart)
  return cart;
}

function save(cart){
  window.localStorage.setItem(key, JSON.stringify(cart))
}

export function getCartAttributes(cart) {
  const idsParsing = cart.map((e, i) => `filters[id][$in][${i}]=${parseInt(e.id)}`)
  const uriParameters = idsParsing.join('&')
  const uri = process.env.REACT_APP_BACK_URL + `/api/produits?${uriParameters}&populate=*`
  console.log(uri)
  return axios.get(uri)
    .then((res) => {
      return res.data.data
    })
}

export function getProductList(cart, cartAttributes) {
  return cart.map((e) => productListItem(
    e.id,
    cartAttributes.length > 0 ?
      (cartAttributes.find((attr) => attr.id === e.id)).attributes :
      null,
    e.quantity))
}

export function getTotalPrice(cart, cartAttributes){
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
