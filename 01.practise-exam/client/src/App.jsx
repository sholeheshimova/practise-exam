
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import Add from './pages/Add'
import NotFound from './pages/NotFound'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />}/>
      <Route  path='/:id' element={<Details />}/>
      <Route  path='/favorites' element={<Favorites />}/>
      <Route  path='/add' element={<Add />}/>
      <Route  path='*' element={<NotFound />}/>


      </Route>
     </Routes>
    </>
  )
}

export default App
