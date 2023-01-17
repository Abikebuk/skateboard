import Skateboard from './Skateboard'
import './Home.css'
import Sidebar from './Sidebar'
import Header from './Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useParams} from 'react-router-dom'

export default function Home() {
  const params = new URLSearchParams(window.location.search)
  const orderSuccess = params.get("orderSuccess")
  const orderId = params.get("orderId")
  console.log(orderSuccess, orderId)
  return (
    <div id={'home'}>
      <div className={'container-fluid'}>
        <div className={'row'}>
          {orderSuccess === 'success' ?
            <div className={'col-12'}>
              La commande  #{orderId} a été validée!
            </div> :
            <div className={'col-12'}>
              Il y a eu un problème à la validation de votre commande, veuillez réessayer.
            </div>
          }
          <div className={'col-12'}>
            <Skateboard/>
          </div>
        </div>
      </div>
    </div>
  )

}
