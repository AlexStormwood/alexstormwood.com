import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './pages/_RootLayout'
import Homepage from './pages/Homepage'
import ArticleLayout from './pages/_ArticleLayout'
import { ArticlesList } from './pages/ArticlesList'
import ArticleTocProvider from './contexts/ArticleTocContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticleTocProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Homepage />} />
            <Route path="articles" element={<ArticlesList />} />

          </Route>
          <Route path="/articles/:articleRoute" element={<ArticleLayout />} />

        </Routes>
      </ArticleTocProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
