import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { AppRouter } from './router/AppRouter.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
