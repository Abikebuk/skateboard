import Skateboard from '../Skateboard/Skateboard'
import './Home.sass'

export default function Home() {
  return (
    <div id={'home'}>
      <div className={'container-fluid h-100'}>
        <div className={'row h-100'}>
          <div id={'skateboard'} className={'col-12'}>
            <Skateboard/>
          </div>
        </div>
      </div>
    </div>
  )
}
