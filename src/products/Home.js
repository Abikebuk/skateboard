import Skateboard from '../include/Skateboard'
import './Home.css'
import ProductList from '../include/ProductList'
import ProductPage from '../include/ProductPage'
import Sidebar from '../include/Sidebar'
import Header from '../include/Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div id={'home'}>
      <FontAwesomeIcon icon="fa-regular fa-user"/>
      <div className={'container-fluid p-0'}>
        <div className={'row p-0 m-0'}>
          <div className={'col-auto p-0'}>
            <Sidebar />
          </div>
          <div id={'content'} className={'col p-0'}>
            <Header />
            <div className={'container-fluid'}>
              <div className={'row'}>
                <div id={'skateboard'} className={'col-12'}>
                  <Skateboard/>
                </div>
                <ProductPage
                  title={'COOL SKATEBOARD'}
                  image={'/skateboard.jpg'}
                  brandLogo={'/quicksilver.png'}
                  brandDescription={'Quality products for Boardriders since 1969. ' +
                    'Shop our latest collections, ' +
                    'follow news & videos of our Surf & Snowboard Athletes.'}
                  description={description}
                />
              </div>
            </div>
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
