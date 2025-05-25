import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './CustomNavbar.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNavbar/>
    <App />
    
  </StrictMode>,
)
