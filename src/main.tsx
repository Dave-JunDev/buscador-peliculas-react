import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
)
