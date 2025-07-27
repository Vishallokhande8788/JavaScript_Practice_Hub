import './style.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import TextForm from './components/Textform'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <TextForm pass="myPass"/>
  </StrictMode>
)
