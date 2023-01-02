import Skateboard from '../include/Skateboard'
import './Home.css'
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
