import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EstiloGlobal from './components/EstiloGlobal/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstiloGlobal />
    <App />
  </React.StrictMode>,
)
