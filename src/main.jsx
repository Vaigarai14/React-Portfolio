import ReactDOM from 'react-dom/client'
import './index.css'
import 'animate.css';
import { Body } from './components/Body'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render((
  <div className='background '>
    <Body />
  </div>
))
