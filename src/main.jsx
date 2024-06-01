import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './pages/_RootLayout'
import EventsAndAppearances from './pages/articles/EventsAndAppearances'
import Homepage from './pages/Homepage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/appearances" element={<EventsAndAppearances />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
