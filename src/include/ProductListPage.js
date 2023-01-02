import ProductList from '../include/ProductList'
import Sidebar from '../include/Sidebar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Header from './Header'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function ProductListPage() {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)
  const selectFilter = (e) => {
    console.log(e.target.value)
    let res
    switch (e.target.value) {
      case 'high':
        res = products.sort(
            (a, b) => b.attributes.prix - a.attributes.prix,
        )
        break
      case 'low':
        res = products.sort(
            (a, b) => a.attributes.prix - b.attributes.prix,
        )
        break
    }
    setProducts([...res])
    console.log(products)
  }
  useEffect(() => {
    if (!loaded) {
      console.log('loading products...')
      axios(
          {
            method: 'GET',
            url: process.env.REACT_APP_BACK_URL + '/api/produits?populate=*',
          },
      ).then((res) => {
        setProducts(res.data.data)
      })
      setLoaded(true)
    }
  })
  return (
    <div id={'products'}>
      <FontAwesomeIcon icon="fa-regular fa-user"/>
      <div className={'container-fluid p-0'}>
        <div className={'row p-0 m-0'}>
          <div className={'col-auto p-0'}>
            <Sidebar />
          </div>
          <div id={'content'} className={'col p-0'}>
            <Header />
            <div className={'container-fluid p-0'}>
              <div className={'row'}>
                <div id={'filters'} className={'col-12'}>
                  <span id={'filter-text'}>Trier Par</span>
                  <select name={'filter'} onChange={selectFilter}>
                    <option value={'low'}>Popularité</option>
                    <option value={'low'}>Prix le plus bas</option>
                    <option value={'high'}>Prix le plus haut</option>
                  </select>
                </div>
                <ProductList products={products}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

