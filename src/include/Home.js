import Skateboard from './Skateboard'
import './Home.css'
import Sidebar from './Sidebar'
import Header from './Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useParams} from 'react-router-dom'
import ProductListPage from './ProductListPage'
import OrderConfirm from './OrderConfirm'

export default function Home() {

  return (
    <div id={'home'}>
      <OrderConfirm/>
      <ProductListPage/>
    </div>
  )

}
