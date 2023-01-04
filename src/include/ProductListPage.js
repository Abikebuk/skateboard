import '../include/Cgv.scss'
import ProductList from '../include/ProductList'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

export default function ProductListPage() {
  const params = useParams()
  console.log(params)
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
  }
  useEffect(() => {
      const url = process.env.REACT_APP_BACK_URL +
      '/api/produits?fields[0]=titre&fields[1]=prix&fields[2]=description&populate[0]=image&populate[1]=marque.logo&populate[2]=categories' +
        (params.id == null ? '' : `&filters[categories][id][$eq]=${params.id}`)
      console.log('loading products...')
      console.log(url)
      axios(
          {
            method: 'GET',
            url: url
            ,
          },
      ).then((res) => {
        setProducts(res.data.data)
      })
      setLoaded(true)
    console.log(products)
  }, [params.id])
  return (
    <div id={'products'}>
      <div className={'container-fluid p-0'}>
        <div className={'row'}>
          <div id={'filters'} className={'col-12'}>
            <br/>
            <span id={'filter-text'} className="selecteur"> Trier par : </span>
            <select name={'filter'} onChange={selectFilter} className={'filter'}>
              <option value={'low'}>Popularité</option>
              <option value={'low'}>Prix le plus bas</option>
              <option value={'high'}>Prix le plus haut</option>
            </select>
          </div>
          <ProductList products={products}/>
        </div>
      </div>
    </div>
  )
}

