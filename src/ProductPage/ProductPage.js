import './ProductPage.sass'
import Button from 'bootstrap/js/src/button'

// eslint-disable-next-line react/prop-types
export default function ProductPage({title, image, brandLogo, brandDescription, description}) {
  return (
    <div id={'product-page'}>
      <div className={'container-fluid p-0'}>
        <div className={'row p-0'}>
          <div id={'title'} className={'col-12'}>{title}</div>
          <div id={'content'} className={'col-md-12 col-lg-8'}>
            <div className={'container-fluid p-0'}>
              <div className={'row p-0'}>
                <div className={'col-12'}>
                  <img className={'image'} src={image}/>
                </div>
                <div id={'brand'} className={'col-12'}>
                  <img className={'image'} src={brandLogo}/>
                  <p className={'description'}>{brandDescription}</p>
                </div>
                <div className={'description'}>
                  <span className={'title'}>Description</span>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id={'side-panel'} className={'col-md-12 col-lg-4'}>
            <div id={'side-panel-content'}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
