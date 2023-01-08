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
              if(data == null) return null
              console.log(data)
              let ref = data.attributes.ref ?? "";
              let id = data.id ?? ""
              let title = data.attributes.titre ?? ""
              let description = data.attributes.description ?? ""
              let productImage = data.attributes.image.data.attributes.formats.thumbnail ?
                data.attributes.image.data.attributes.formats.thumbnail.url :
                ""
              let price = data.attributes.prix ?? ""
              let brandLogo = data.attributes.marque.data ?
                data.attributes.marque.data.attributes.logo.data.attributes.formats.thumbnail.url :
                ""
              if (data.attributes.image.data.attributes.formats.thumbnail)
                productImage = data.attributes.image.data.attributes.formats.thumbnail.url
              if (data.attributes.image.data.attributes.formats.small) {
                productImage = data.attributes.image.data.attributes.formats.small.url
              }
              return (
                <div className={'col-md-6 col-lg-4 col-xl-3 p-0'} key={ref}>
                  <ProductCard
                    id={id}
                    title={title}
                    description={description}
                    productImage={productImage}
                    price={price}
                    brandLogo={brandLogo}
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

