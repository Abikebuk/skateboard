import Skateboard from '../Skateboard/Skateboard'
import './Home.sass'
import ProductList from '../ProductList/ProductList'

export default function Home() {
  return (
    <div id={'home'}>
      <div className={'container-fluid h-100'}>
        <div className={'row h-100'}>
          <div id={'skateboard'} className={'col-12'}>
            <Skateboard/>
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
  )
}
