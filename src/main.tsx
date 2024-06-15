import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import './main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/header'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="default">
    <React.StrictMode>
      <Header />      
      <div className='appBody'>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
      </div>
      <Footer />
    </React.StrictMode>
</div>
)
