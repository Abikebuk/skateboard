import ProductCard from './ProductCard'
import './ProductList.css'

// eslint-disable-next-line react/prop-types
export default function ProductList({products}) {
  return (
    <div id={'product-list'}>
      <div className={'container-fluid p-0'}>
        <div className={'row'}>
          {
            products.map((data) => {
              let productImage = data.attributes.image.data.attributes.formats.thumbnail.url
              if (data.attributes.image.data.attributes.formats.small) {
                productImage = data.attributes.image.data.attributes.formats.small.url
              }
              return (
                <div className={'col-md-6 col-lg-4 col-xl-3 p-0'} key={data.attributes.ref}>
                  <ProductCard
                    id={data.id}
                    title={data.attributes.titre}
                    description={data.attributes.description}
                    productImage={data.attributes.image.data.attributes.formats.thumbnail.url}
                    price={data.attributes.prix}
                    brandLogo={data.attributes.marque.data.attributes.logo.data.attributes.formats.thumbnail.url}
                  />
                </div>
              )
            },

            )
          }
        </div>
      </div>
    </div>
  )
}

