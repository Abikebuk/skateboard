import Skateboard from '../Skateboard/Skateboard'
import './Home.css'
import ProductList from '../ProductList/ProductList'
import ProductPage from '../ProductPage/ProductPage'

export default function Home() {
  return (
    <div id={'home'}>
      <div className={'container-fluid h-100'}>
        <div className={'row h-100'}>
          <div id={'skateboard'} className={'col-12'}>
            <Skateboard/>
            <ProductList/>
            <ProductPage
              title={'COOL SKATEBOARD'}
              image={'/skateboard.jpg'}
              brandLogo={'/quicksilver.png'}
              brandDescription={'Quality products for Boardriders since 1969. Shop our latest collections, follow news & videos of our Surf & Snowboard Athletes.'}
              description={description}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const description = '"Blue Skies 9" - Skateboard pour Unisexe\n' +
  '\n' +
  'Style EGL21STSBS\n' +
  'Caractéristiques\n' +
  '\n' +
  'Plateau : plateau en bouleau de 28" x 9"\n' +
  'Grip : Grip sablé transparent\n' +
  'Trucks : trucks de 5,5\'\'\n' +
  'Roues : roues de 60 x 40 mm en polyuréthane\n' +
  'Roulements : ABEC 9 (608 2RS)\n' +
  'Composition 43% bois, 31% métal, 26% polyuréthane'
