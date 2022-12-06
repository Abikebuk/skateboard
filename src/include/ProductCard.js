import './ProductCard.sass'

const formatPrice = (price) =>
  new Intl.NumberFormat(
      'de-FR',
      {style: 'currency', currency: 'EUR'})
      .format(price)

// eslint-disable-next-line react/prop-types
export default function ProductCard({title, description, price, brandLogo, productImage}) {
  return (
    <div className={'product-card-wrapper'}>
      <div className="product-card">
        <div className={'content'}>
          <div className={'col-auto header'}>
            <div className={'brand-logo'}>
              <img src={brandLogo} alt={'brand'}/>
            </div>
          </div>
          <div className={'col-auto image'}>
            <img src={productImage} alt={'title'}/>
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
        <div className={'col-auto footer'}>
          <span>Ajouter au panier</span>
        </div>
      </div>
    </div>
  )
}
