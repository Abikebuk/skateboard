const key = "cart"

const getCart = () => {
  const val = window.localStorage.getItem(key)
  if(val == null){
    window.localStorage.setItem(key, JSON.stringify([]))
    return getCart()
  }
  return JSON.parse(val);
}

export function addCartItem (item) {
  console.log(findItemIndex(item))
  const cart = getCart()
  const index = findItemIndex(item)
  if(index === -1) cart.push({id : item, quantity : 1})
  else cart[index].quantity++
  window.localStorage.setItem(key, JSON.stringify(cart))
  console.log(cart)

}
function findItemIndex(item) {
  const cart = getCart();
  return cart.findIndex((e) => e.id === item)
}
