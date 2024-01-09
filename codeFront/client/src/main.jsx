import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import BasketProvider from './context/basketContext.jsx';
import WishlistProvider from './context/wishlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>,
)
