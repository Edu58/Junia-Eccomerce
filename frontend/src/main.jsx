import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './context/products'
import { AdminProvider } from './context/admin'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ProductsProvider>
      <AdminProvider>
        <BrowserRouter>
          <PayPalScriptProvider deferLoading={true}>
            <App />
          </PayPalScriptProvider>
        </BrowserRouter>
      </AdminProvider>
    </ProductsProvider>
  </React.Fragment>
)
