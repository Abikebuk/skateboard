import Nav from './include/Nav'
import * as url from './include/var.js'
import User from './user/User'
import Categorie from './categorie/Categorie'
import CategorieCreate from './categorie/CategorieCreate'
import CategorieUpdate from './categorie/CategorieUpdate'
import Product from './product/Product'
import Order from './order/Order'
import OrderInfo from './order/OrderInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import UserInfo from './user/UserInfo';
import ProductInfo from './product/ProductInfo'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact path='/'
            element={
              <Nav />
            }
          />
          <Route
            path={url.user}
            element={
              <User />
            }
          />
          <Route
            path={url.user_get}
            element={
              <UserInfo />
            }
          />
          <Route
            path={url.categorie}
            element={
              <Categorie />
            }
          />
          <Route
            path={url.categorie_get + '/:id'}
            element={
              <CategorieUpdate />
            }
          />
           <Route
            path={url.categorie_create}
            element={
              <CategorieCreate />
            }
          />
          <Route
            path={url.product}
            element={
              <Product />
            }
          />
          <Route
            path={url.product_get}
            element={
              <ProductInfo />
            }
          />
          <Route
            path={url.order}
            element={
              <Order />
            }
          />
          <Route
            path={url.order_get}
            element={
              <OrderInfo />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

