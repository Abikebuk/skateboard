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
