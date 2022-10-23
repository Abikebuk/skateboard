import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'
export default function ProductList() {
  return (
    <div id={'product-list'}>
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div id={'filters'} className={'col-12'}>
            <span id={'filter-text'}>Trier Par</span>
            <select name={'filter'}>
              <option value={'low'}>Popularité</option>
              <option value={'low'}>Prix le plus bas</option>
              <option value={'high'}>Prix le plus haut</option>
            </select>
          </div>
          <div className={'col-sm-6 col-md-4 col-xl-3'}>
            <ProductCard
              title={'Cool Skateboard'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              price={'232.58'}
              brandLogo={'/quicksilver.png'}
              productImage={'/skateboard.jpg'}
            />
          </div>
          <div className={'col-sm-6 col-md-4 col-xl-3'}>
            <ProductCard
              title={'Cool Skateboard'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              price={'232.58'}
              brandLogo={'/quicksilver.png'}
              productImage={'/skateboard.jpg'}
            />
          </div>
          <div className={'col-sm-6 col-md-4 col-xl-3'}>
            <ProductCard
              title={'Cool Skateboard'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              price={'232.58'}
              brandLogo={'/quicksilver.png'}
              productImage={'/skateboard.jpg'}
            />
          </div>
          <div className={'col-sm-6 col-md-4 col-xl-3'}>
            <ProductCard
              title={'Cool Skateboard'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              price={'232.58'}
              brandLogo={'/quicksilver.png'}
              productImage={'/skateboard.jpg'}
            />
          </div>
          <div className={'col-sm-6 col-md-4 col-xl-3'}>
            <ProductCard
              title={'Cool Skateboard'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              price={'232.58'}
              brandLogo={'/quicksilver.png'}
              productImage={'/skateboard.jpg'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
