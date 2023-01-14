import './ProductCard.sass'
import {Link} from 'react-router-dom'
import {addCartItem} from '../CartHandler'

const formatPrice = (price) =>
  new Intl.NumberFormat(
      'de-FR',
      {style: 'currency', currency: 'EUR'})
      .format(price)

// eslint-disable-next-line react/prop-types
export default function ProductCard({id, title, description, price, brandLogo, productImage}) {
  function handleAddToCartClick(){
    addCartItem(id)
  }
  return (
    <div className={'product-card-wrapper'}>
      <div className="product-card">
        <Link to={'/product/'+id}>
          <div className={'content'}>
            <div className={'col-auto header'}>
              <div className={'brand-logo'}>
                <img src={process.env.REACT_APP_BACK_URL + brandLogo} alt={'brand'}/>
              </div>
            </div>
            <div className={'col-auto image'}>
              <img src={process.env.REACT_APP_BACK_URL + productImage} alt={'title'}/>
            </div>
            <div className={'col-auto information'}>
              <div className={'title'}>
                {title}
              </div>
              <div className={'col description'}>
                <p>{description}</p>
              </div>
            </div>
            <div className={'col-auto variant'}>
              <div className={'col colors'}>
                <span>Couleurs :</span>
              </div>
              <div className={'col-auto price'}>
                {formatPrice(price)}
              </div>
            </div>
          </div>
        </Link>
        <div className={'col-auto footer'} onClick={handleAddToCartClick}>
          <span>Ajouter au panier</span>
        </div>
      </div>
    </div>
  )
}
