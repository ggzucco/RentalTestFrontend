import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="default">
    <React.StrictMode>    
      <BrowserRouter>
        <Router />
      </BrowserRouter>     
    </React.StrictMode>
</div>
)
