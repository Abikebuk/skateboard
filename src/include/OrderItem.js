import {useState} from 'react'

export default function OrderItem({data}){
  const attr = data.attributes
  const id = data.id
  const [ productSold ] = useState(attr.product_sells.data)
  return (
    <div>
      {productSold.map
      (
        (e) => {
          if(e === undefined || e === null){
            console.log(e)
          }
          try{
            const id = e.id
            const attr = e.attributes
            let product = attr.produit.data
            const productId = product.id
            product = product.attributes
            return <div>
              {product.titre} x {attr.amount} : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(parseInt(attr.price) * parseInt(attr.amount))}
            </div>
          }catch{
            console.log("ERROR ,", e)
            return null
          }
        }
      )
      }
    </div>
  )
}
