import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import './Pages/signup.css'
import ContextProvider from './context/context.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
 <ContextProvider>
   <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
 </ContextProvider>
)
