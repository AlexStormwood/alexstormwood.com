import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter} from 'react-router-dom'

import ArticleTocProvider from './contexts/ArticleTocContextProvider'
import RoutesContainer from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticleTocProvider>
        <RoutesContainer />
      </ArticleTocProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
