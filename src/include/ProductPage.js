import './ProductPage.css'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Header from './Header'
import {addCartItem} from '../CartHandler'


export default function ProductPage() {
  const [data, setData] = useState(null)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [brandLogo, setBrandLogo] = useState('')
  const [brandDescription, setBrandDescription] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const params = useParams()
  const id = params.id

  function handleAddCartClick(e){
    addCartItem(id)
  }

  useEffect(() =>{
    const url = process.env.REACT_APP_BACK_URL + `/api/produits/${id}?populate=*&populate[0]=image&populate[1]=marque.logo`
    axios({
      method: 'GET',
      url: url,
    }).then((res) =>{
      setData(res.data.data.attributes)
      if (data != null) {
        setTitle(data.titre ?? "")
        try{
          setBrandLogo(process.env.REACT_APP_BACK_URL + data.marque.data.attributes.logo.data.attributes.formats.thumbnail.url ?? "")
        }catch{}
        try{
          setImage(process.env.REACT_APP_BACK_URL + data.image.data.attributes.formats.thumbnail.url ?? "")
        }catch {}
        try{
          setBrandDescription(data.marque.data.attributes.description ?? "")
        }catch {}
        setDescription(data.description ?? "")
        setPrice(data.prix ?? "")
      }
    })
  })
  return (
    <div id={'product'}>
      <div className={'container-fluid p-0'}>
        <div className={'row'}>
          <div id={'product-page'} className={'col-12'}>
            <div className={'container-fluid p-0'}>
              <div className={'row p-0'}>
                <div id={'title'} className={'col-12'}>{title}</div>
                <div id={'content'} className={'col-md-12 col-lg-8'}>
                  <div className={'container-fluid p-0'}>
                    <div className={'row p-0'}>
                      <div className={'col-12'}>
                        <img className={'image'} alt={title} src={image}/>
                      </div>
                      <div id={'brand'} className={'col-12'}>
                        <img className={'image'} src={brandLogo} alt={'brand'}/>
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
                    <div id={'side-panel-price'}>
                      <span>Prix : {new Intl.NumberFormat('FR-fr', { style: 'currency', currency: 'EUR' }).format(price)}</span>
                    </div>
                    <div id={'side-panel-add-to-cart'}>
                      <button onClick={handleAddCartClick}>Ajouter au panier</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
