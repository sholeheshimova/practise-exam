import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import FavoritesProvider from './context/FavoritesContext.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <FavoritesProvider>
    <HelmetProvider>
    <App />
    </HelmetProvider>

   </FavoritesProvider>
 </BrowserRouter>
   

)
