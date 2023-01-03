
import Sidebar from './Sidebar'
import Header from './Header'

export default function Content({T}) {
  return (
    <div id={'main'}>
      <div className={'container-fluid p-0'}>
        <div className={'row p-0 m-0'}>
          <div className={'col-auto p-0'}>
            <Sidebar />
          </div>
          <div id={'content'} className={'col p-0'}>
            <Header />
            <T/>
          </div>
        </div>
      </div>
    </div>
  )
}
