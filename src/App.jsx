
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
