import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import { SplashScreen } from 'src/components/loading-screen'

import App from './App'


const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
