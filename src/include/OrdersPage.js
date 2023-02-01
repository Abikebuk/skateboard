import {useEffect, useState} from 'react'
import {isAuthenticated} from '../AuthApi'
import {useNavigate} from 'react-router-dom'
import OrderItem from './OrderItem'
import axios from 'axios'
import './OrdersPage.scss'
export default function ordersPage(){
  const [orders, setOrders] = useState([])
  const id = isAuthenticated()? window.localStorage.getItem('id') ?? null : null
  const navigate = useNavigate()
  if(!id) navigate("/connexion")
  useEffect(() => {
    axios.get(
      process.env.REACT_APP_BACK_URL + `/api/commandes?populate[0]=product_sells.produit&filters[users_permissions_user][id][$eq]=${id}`
    ).then((res) => res.data.data)
      .then((res) =>{
        setOrders(res)
      })
  })
  return(
    <div id={'orders-page'}>
      {
        orders.map((e) =>
          <div className={'order-item'}>
            <div className={'order-header'} key={e.id}>
              <span>Commande numéro </span>
              {`# ${e.id} : `}
              {e.attributes.statut ?? "En cours de validation"}
            </div>
            <OrderItem
              data={e}/>
          </div>

        )
      }
    </div>
  )
}
