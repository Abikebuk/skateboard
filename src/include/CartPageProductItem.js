import {useEffect, useState} from 'react'
import {removeItemFromCart, setQuantityOfCartItem} from '../CartHandler'
import {Link} from 'react-router-dom'
import {MeshDistortMaterial} from '@react-three/drei'

export default function productListItem(id, productData, quantity, editable, callback){
  async function handleQuantityValueInputChange(e) {
    const re = /^[0-9]*$/
    if (new RegExp(re).exec(e.target.value)) {
      console.log(e.target.value)
      switch (parseInt(e.target.value)){
        case '':
          break;
        case 0:
          setQuantityValue(0)
          break
        default:
          setQuantityValue(e.target.value)
      }
    }
  }

  function handleDeleteClick(){
    removeItemFromCart(id)
    setDeleted(true)
  }

  const [quantityValue, setQuantityValue] = useState(quantity.toString())
  const [deleted, setDeleted] = useState(false)
  useEffect(() =>{
    setQuantityOfCartItem(id, quantityValue)
    if(callback) {
      console.log("callback")
      callback()
    }
  }, [quantityValue])


  if(productData === null) return null
  if(deleted) return null
  return (
    <div className={'product-list-item'} key={`product-list-item-${id}`}>
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-auto p-0'}>
            <div className={'product-thumbnail'}>
              <Link to={`/product/${id}`}>
                <img src={process.env.REACT_APP_BACK_URL + productData.image?.data.attributes.formats.thumbnail.url}/>
              </Link>
            </div>

          </div>
          <div className={'col-3 vertical-center p-0'}>
            <div className={'product-title'}>
              <Link to={`/product/${id}`}>{productData.titre}</Link>
            </div>
          </div>
          <div className={'col-auto vertical-center p-0'}>
            <div className={'product-price'}>
              {
                new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
                  .format(productData.prix)
              }
            </div>

          </div>
          <div className={'col-auto vertical-center p-0'}>
            {
              editable ?
                <div className={'product-quantity'}>
                  <span>Nombre</span>
                  <input type={'text'} value={quantityValue} onChange={handleQuantityValueInputChange}/>
                </div> :
                <div className={'product-quantity'}>
                  <span>x{quantityValue}</span>
                </div>

            }

          </div>
          <div className={'col-2 vertical-center p-0'}>
            <div className={'product-total-price'}>
              {
                new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
                  .format(quantityValue * productData.prix)
              }
            </div>
          </div>
          {
            editable ?
            <div className={'col-auto vertical-center p-0'}>
              <button onClick={handleDeleteClick}>Supprimer</button>
            </div> :
            null
          }

        </div>
      </div>
    </div>
  )
}
